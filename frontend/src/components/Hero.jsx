import { motion } from 'framer-motion';
import { FaArrowDown, FaDownload, FaPaperPlane } from 'react-icons/fa';
import { socials, techIcons } from '../data/portfolio';
import resumePdf from '../assets/resume.pdf';

function Hero() {
  const scrollToProjects = () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.34),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.22),transparent_30%),linear-gradient(180deg,#030712_0%,#070b16_58%,#030712_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-10 sm:px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <motion.div
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-200 shadow-2xl shadow-black/20 backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.75)]" />
            Available for internships and full stack roles
          </motion.div>

          <motion.h1
            className="max-w-5xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            Rathi Varshini R
            <span className="mt-3 block bg-gradient-to-r from-sky-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Full Stack Developer | AI & ML Student
            </span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            I build polished web applications with React, Node.js, MongoDB, and thoughtful AI integrations. My work blends strong engineering fundamentals with clean product thinking and recruiter-friendly presentation.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <button
              type="button"
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-2xl shadow-violet-950/30 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              View Projects
              <FaArrowDown />
            </button>
            <a
              href={resumePdf}
              download
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/12 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-300/50 hover:bg-white/12"
            >
              Download Resume
              <FaDownload />
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            {socials.map((item) => {
              const Icon = item.label === 'Email' ? FaPaperPlane : item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-slate-200 backdrop-blur transition hover:-translate-y-1 hover:border-violet-300/50 hover:text-white"
                  aria-label={item.label}
                >
                  <Icon />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16 }}
        >
          <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-fuchsia-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/10 p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-violet-950">
              <div className="flex h-full flex-col justify-between p-8">
                <div className="flex justify-end">
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">AI + MERN</span>
                </div>
                <div className="grid place-items-center">
                  <motion.div
                    className="grid size-44 place-items-center rounded-full border border-white/20 bg-gradient-to-br from-sky-400 via-violet-500 to-fuchsia-500 text-6xl font-bold text-white shadow-2xl shadow-violet-950/60"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    RV
                  </motion.div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-violet-200">Portfolio</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Production-ready web experiences with AI curiosity.</p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-3">
              {techIcons.slice(0, 8).map((Icon, index) => (
                <motion.div
                  key={index}
                  className="grid aspect-square place-items-center rounded-2xl border border-white/10 bg-white/8 text-xl text-slate-100"
                  whileHover={{ y: -4, scale: 1.04 }}
                >
                  <Icon />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
