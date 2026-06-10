import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import SectionHeading from './SectionHeading';

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading eyebrow="Experience" title="Internship experience with real delivery habits.">
        A modern timeline view of practical full stack development exposure and engineering growth.
      </SectionHeading>

      <div className="mx-auto max-w-4xl">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.role}-${item.company}`}
            className="relative rounded-3xl border border-white/10 bg-white/7 p-7 shadow-2xl shadow-black/25 backdrop-blur-xl md:p-9"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">{item.period}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-1 text-slate-300">{item.company}</p>
              </div>
              <span className="w-fit rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
                Professional Experience
              </span>
            </div>

            <div className="mt-8 grid gap-4">
              {item.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-4 rounded-2xl border border-white/8 bg-white/5 p-4">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-sky-300" />
                  <p className="leading-7 text-slate-300">{highlight}</p>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
