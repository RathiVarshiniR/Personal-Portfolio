import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import api from '../lib/api';
import SectionHeading from './SectionHeading';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      await api.post('/contact', form);
      setForm(initialForm);
      setStatus({ type: 'success', message: 'Message sent successfully.' });
    } catch {
      setStatus({ type: 'error', message: 'Message could not be sent. Please email me directly.' });
    }
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading eyebrow="Contact" title="Let’s build something valuable.">
        Send a message for internships, collaborations, project reviews, or full stack development opportunities.
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          className="glass-panel p-7"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h3 className="text-2xl font-semibold text-white">Contact Links</h3>
          <p className="mt-4 leading-7 text-slate-300">
            I am open to internship discussions, technical interviews, and product-focused full stack opportunities.
          </p>

          <div className="mt-8 space-y-3">
            {[
              { icon: FaEnvelope, label: 'Email', href: 'mailto:rathivarshini@example.com' },
              { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/' },
              { icon: FaGithub, label: 'GitHub', href: 'https://github.com/' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/6 p-4 text-slate-200 transition hover:bg-white/10"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-500 text-white">
                    <Icon />
                  </span>
                  {item.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-panel p-7"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Name</span>
              <input
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                required
                className="form-field"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                required
                className="form-field"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="mt-5 block space-y-2">
            <span className="text-sm font-medium text-slate-200">Message</span>
            <textarea
              value={form.message}
              onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
              required
              rows="6"
              className="form-field resize-none"
              placeholder="Tell me about the opportunity..."
            />
          </label>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <FaPaperPlane />
              {status.type === 'loading' ? 'Sending' : 'Send Message'}
            </button>
            {status.message && <p className={`text-sm ${status.type === 'error' ? 'text-rose-300' : 'text-emerald-300'}`}>{status.message}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
