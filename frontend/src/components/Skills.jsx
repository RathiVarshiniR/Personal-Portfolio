import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolio';
import SectionHeading from './SectionHeading';

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading eyebrow="Skills" title="Modern stack, measured confidence.">
        A recruiter-friendly snapshot of the technologies I use to move from product idea to deployed application.
      </SectionHeading>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              className="glass-panel p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              whileHover={{ y: -6 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-xl text-white shadow-lg shadow-violet-950/30">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              </div>

              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="text-slate-400">{skill.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
