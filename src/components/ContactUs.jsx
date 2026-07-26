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
    'w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 px-4 sm:px-6 py-3.5 sm:py-4 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors';

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 sm:mb-16 text-center text-slate-900 dark:text-white">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-8 sm:space-y-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                Got a project? <br /> Let&apos;s talk about it.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
                I&apos;m currently available for freelance work and full-time roles.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: <Mail className="text-indigo-500" size={22} />, title: 'Email', value: 'asmamawpetros@gmail.com' },
                { icon: <Phone className="text-blue-500" size={22} />, title: 'Phone', value: '+251 89886956' },
                { icon: <MapPin className="text-emerald-500" size={22} />, title: 'Address', value: 'Bahir Dar, Ethiopia' },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-2xl flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white break-words">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-5 sm:p-8 md:p-10 rounded-[1.75rem] sm:rounded-[2.5rem] border border-slate-200 dark:border-white/10">
            {result && (
              <div className="mb-5 sm:mb-6 text-center text-slate-900 dark:text-white font-semibold text-sm sm:text-base">
                {result}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Full Name</label>
                <input
                  id="contact-name"
                  required
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Email Address</label>
                <input
                  id="contact-email"
                  required
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-phone" className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Phone Number</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="+251 900 000 000"
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Message</label>
                <textarea
                  id="contact-message"
                  required
                  name="message"
                  rows={5}
                  placeholder="What's on your mind?"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="cursor-pointer w-full py-4 sm:py-5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-2xl font-bold text-base sm:text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                {sending ? 'Sending...' : 'Send Message'} <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
