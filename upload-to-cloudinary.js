import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// 1. Read .env.local
const envPath = path.resolve('.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
for (const line of envContent.split('\n')) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const idx = trimmed.indexOf('=');
    if (idx !== -1) {
      envVars[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim();
    }
  }
}

const cloudName = envVars.CLOUDINARY_CLOUD_NAME || 'asmiy35i';
const apiKey = envVars.CLOUDINARY_API_KEY || '338287737492882';
const apiSecret = envVars.CLOUDINARY_API_SECRET || 'AdIVm1L2BsiKlBnPP8LMAdi_QXQ';

console.log(`Using Cloudinary cloud_name: ${cloudName}, api_key: ${apiKey}`);

function generateSignature(params, secret) {
  const sortedKeys = Object.keys(params).sort();
  const paramStr = sortedKeys.map(k => `${k}=${params[k]}`).join('&');
  return crypto.createHash('sha1').update(paramStr + secret).digest('hex');
}

async function uploadFile(filePath, folder = 'portfolio/images') {
  const fileName = path.basename(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const resourceType = ext === '.pdf' ? 'raw' : 'image';
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

  const timestamp = Math.floor(Date.now() / 1000);
  const cleanBaseName = path.parse(fileName).name.replace(/[^a-zA-Z0-9_-]/g, '_');
  const publicId = `${folder}/${cleanBaseName}`;

  const paramsToSign = {
    public_id: publicId,
    timestamp: timestamp,
  };

  const signature = generateSignature(paramsToSign, apiSecret);

  const fileBuffer = fs.readFileSync(filePath);
  const blob = new Blob([fileBuffer]);

  const formData = new FormData();
  formData.append('file', blob, fileName);
  formData.append('api_key', apiKey);
  formData.append('timestamp', timestamp);
  formData.append('public_id', publicId);
  formData.append('signature', signature);

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Upload failed for ${fileName}: ${data.error?.message || JSON.stringify(data)}`);
  }

  let optimizedUrl = data.secure_url;
  if (resourceType === 'image' && !fileName.endsWith('.svg')) {
    optimizedUrl = data.secure_url.replace('/upload/', '/upload/f_auto,q_auto/');
  }

  return {
    fileName,
    originalName: fileName,
    publicId: data.public_id,
    secureUrl: data.secure_url,
    optimizedUrl,
  };
}

async function run() {
  const imagesDir = path.resolve('src/assets/images-all');
  const files = fs.readdirSync(imagesDir);

  let results = {};
  if (fs.existsSync('cloudinary-mapping.json')) {
    try {
      results = JSON.parse(fs.readFileSync('cloudinary-mapping.json', 'utf8'));
    } catch {}
  }

  const tasks = [];
  for (const file of files) {
    const fullPath = path.join(imagesDir, file);
    if (fs.statSync(fullPath).isDirectory()) continue;
    if (results[file]) {
      console.log(`Skipping already uploaded ${file}`);
      continue;
    }
    tasks.push({ filePath: fullPath, folder: 'portfolio/images', key: file });
  }

  const resumePdfPath = path.resolve('src/assets/resume petros asmamaw 2p.pdf');
  if (fs.existsSync(resumePdfPath) && !results['resume petros asmamaw 2p.pdf']) {
    tasks.push({ filePath: resumePdfPath, folder: 'portfolio/documents', key: 'resume petros asmamaw 2p.pdf' });
  }

  console.log(`Found ${tasks.length} remaining files to upload in parallel (concurrency 6)...`);

  const CONCURRENCY = 6;
  let running = 0;
  let index = 0;

  await new Promise((resolve) => {
    if (tasks.length === 0) return resolve();

    function next() {
      if (index >= tasks.length && running === 0) {
        return resolve();
      }

      while (running < CONCURRENCY && index < tasks.length) {
        const currentTask = tasks[index++];
        running++;
        console.log(`[Uploading ${index}/${tasks.length}] ${currentTask.key}...`);

        uploadFile(currentTask.filePath, currentTask.folder)
          .then((res) => {
            results[currentTask.key] = res;
            console.log(`  ✓ Done ${currentTask.key} -> ${res.optimizedUrl}`);
            fs.writeFileSync('cloudinary-mapping.json', JSON.stringify(results, null, 2), 'utf8');
          })
          .catch((err) => {
            console.error(`  ✗ Error ${currentTask.key}:`, err.message);
          })
          .finally(() => {
            running--;
            next();
          });
      }
    }

    next();
  });

  fs.writeFileSync('cloudinary-mapping.json', JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nAll done! Total mapped files: ${Object.keys(results).length}`);
}

run();
