import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { githubStats } from '../data/portfolio';
import SectionHeading from './SectionHeading';

function GithubStats() {
  const weeks = Array.from({ length: 52 }, (_, index) => index);

  return (
    <section id="github" className="section-shell">
      <SectionHeading eyebrow="GitHub" title="A code footprint with steady product practice.">
        Stats cards, repository focus, and a contribution-style graph create a quick engineering signal.
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {githubStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-panel p-6"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-panel p-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-white/8 text-white">
                <FaGithub />
              </div>
              <div>
                <h3 className="font-semibold text-white">Contribution Graph</h3>
                <p className="text-sm text-slate-400">Visual activity placeholder ready for GitHub API integration.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-26 gap-1 overflow-hidden">
            {weeks.map((week) => (
              <div key={week} className="grid gap-1">
                {Array.from({ length: 7 }, (_, day) => {
                  const level = (week * 3 + day * 5) % 5;
                  const shades = ['bg-white/7', 'bg-sky-400/20', 'bg-sky-400/35', 'bg-violet-400/45', 'bg-fuchsia-400/60'];
                  return <span key={day} className={`size-2.5 rounded-[3px] ${shades[level]}`} />;
                })}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {['PDF Chatbot', 'SafeRoute AI', 'Portfolio Admin CMS', 'Retinal AI Detection'].map((repo) => (
              <div key={repo} className="rounded-2xl border border-white/10 bg-white/6 p-4">
                <p className="font-medium text-white">{repo}</p>
                <p className="mt-2 text-sm text-slate-400">Repository showcase card</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GithubStats;
