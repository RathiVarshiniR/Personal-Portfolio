import { motion } from 'framer-motion';
import { timeline } from '../data/portfolio';
import SectionHeading from './SectionHeading';

function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading eyebrow="About" title="A developer who thinks in products, systems, and users.">
        I am an AI and ML student focused on building full stack applications that feel refined, reliable, and useful. My portfolio centers on practical systems: document chat, safe routing, health apps, computer vision, and admin-managed web experiences.
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="glass-panel p-7 md:p-9"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">Professional Story</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Building toward strong internship impact.</h3>
          <p className="mt-5 leading-8 text-slate-300">
            I enjoy turning rough ideas into usable products: shaping interfaces, designing APIs, connecting databases, and using AI where it genuinely improves the experience. I care about clarity, maintainability, and details that make a project feel complete.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {['React UI', 'Node APIs', 'Applied AI'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-4 text-center">
                <p className="text-sm font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-sky-400 via-violet-400 to-transparent" />
          <div className="space-y-5">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative ml-12 rounded-3xl border border-white/10 bg-white/7 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl"
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <span className="absolute -left-[2.7rem] top-7 grid size-5 place-items-center rounded-full border border-violet-300 bg-[#030712]">
                  <span className="size-2 rounded-full bg-violet-300" />
                </span>
                <p className="text-sm font-semibold text-violet-300">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
