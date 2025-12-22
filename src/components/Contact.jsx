import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState(""); // Status message
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "ec9594a0-ecd1-43ae-a8c3-c0451db084a5"); // Your Web3Forms API key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        e.target.reset();
      } else {
        setResult("Error: " + data.message);
        console.error("Web3Forms Error:", data);
      }
    } catch (err) {
      console.error(err);
      setResult("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-black mb-16 text-center text-white">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                Got a project? <br /> Let’s talk about it.
              </h3>
              <p className="text-slate-400 text-lg">
                I’m currently available for freelance work and full-time roles.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-indigo-500" />, title: "Email", value: "asmamawpetros@gmail.com" },
                { icon: <Phone className="text-blue-500" />, title: "Phone", value: "+251 89886956" },
                { icon: <MapPin className="text-emerald-500" />, title: "Address", value: "Bahir Dar, Ethiopia" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center border-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-lg font-bold text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="glass p-10 rounded-[2.5rem] border-white/5">
            {result && (
              <div className="mb-6 text-center text-white font-semibold">
                {result}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Full Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-950/50 border border-white/5 px-6 py-4 rounded-2xl text-white focus:outline-none focus:border-indigo-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-950/50 border border-white/5 px-6 py-4 rounded-2xl text-white focus:outline-none focus:border-indigo-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+251 900 000 000"
                  className="w-full bg-slate-950/50 border border-white/5 px-6 py-4 rounded-2xl text-white focus:outline-none focus:border-indigo-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="What’s on your mind?"
                  className="w-full bg-slate-950/50 border border-white/5 px-6 py-4 rounded-2xl text-white focus:outline-none focus:border-indigo-500/50 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/20 active:scale-95"
              >
                {sending ? "Sending..." : "Send Message"} <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
