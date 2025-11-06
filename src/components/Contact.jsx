import React, { useState } from 'react';
import { Instagram, Linkedin, Behance } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Me</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg hover:opacity-95"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-sm text-emerald-600">Thanks! Your message has been noted. You can also reach me directly via email or phone below.</p>
            )}
          </form>

          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-slate-700"><span className="font-semibold">Email:</span> prachi.designs@email.com</p>
              <p className="text-slate-700"><span className="font-semibold">Mobile:</span> +91-XXXXXXXXXX</p>
            </div>
            <div className="flex items-center gap-4 text-slate-600">
              <a aria-label="Instagram" href="#" className="p-3 rounded-full border border-slate-200 hover:bg-slate-100 transition">
                <Instagram size={20} />
              </a>
              <a aria-label="LinkedIn" href="#" className="p-3 rounded-full border border-slate-200 hover:bg-slate-100 transition">
                <Linkedin size={20} />
              </a>
              <a aria-label="Behance" href="#" className="p-3 rounded-full border border-slate-200 hover:bg-slate-100 transition">
                <Behance size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-slate-600 text-sm">
          © 2025 PRACHI | All Rights Reserved
        </div>
      </footer>
    </section>
  );
};

export default Contact;
