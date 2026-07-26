import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
  const [result, setResult] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setResult('Sending...');

    const formData = new FormData(e.target);
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully!');
        e.target.reset();
      } else {
        setResult('Error: ' + data.message);
        console.error('Web3Forms Error:', data);
      }
    } catch (err) {
      console.error(err);
      setResult('Something went wrong. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    'w-full surface px-4 py-3.5 rounded-xl text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-colors duration-150';

  return (
    <section id="contact" className="page-section">
      <div className="page-container">
        <h2 className="section-title">Contact Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="section-subtitle mb-3 leading-tight">
                Got a project? <br /> Let&apos;s talk about it.
              </h3>
              <p className="prose-muted text-base sm:text-lg">
                I&apos;m currently available for freelance work and full-time roles.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Mail className="text-[var(--color-accent)]" size={22} />, title: 'Email', value: 'asmamawpetros@gmail.com' },
                { icon: <Phone className="text-sky-500" size={22} />, title: 'Phone', value: '+251 89886956' },
                { icon: <MapPin className="text-emerald-500" size={22} />, title: 'Address', value: 'Bahir Dar, Ethiopia' },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl flex items-center justify-center surface">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-[var(--color-text-subtle)] uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-base sm:text-lg font-bold text-[var(--color-text)] break-words">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-[var(--color-border)]">
            {result && (
              <div className="mb-4 text-center text-[var(--color-text)] font-semibold text-sm" role="status">
                {result}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="text-sm font-bold text-[var(--color-text-muted)] ml-1">Full Name</label>
                <input id="contact-name" required name="name" type="text" placeholder="John Doe" className={inputClass} />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="text-sm font-bold text-[var(--color-text-muted)] ml-1">Email Address</label>
                <input id="contact-email" required name="email" type="email" placeholder="john@example.com" className={inputClass} />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="contact-phone" className="text-sm font-bold text-[var(--color-text-muted)] ml-1">Phone Number</label>
                <input id="contact-phone" name="phone" type="tel" placeholder="+251 900 000 000" className={inputClass} />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-sm font-bold text-[var(--color-text-muted)] ml-1">Message</label>
                <textarea
                  id="contact-message"
                  required
                  name="message"
                  rows={5}
                  placeholder="What's on your mind?"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button type="submit" disabled={sending} className="btn-primary w-full text-base disabled:opacity-70 disabled:cursor-not-allowed">
                {sending ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
