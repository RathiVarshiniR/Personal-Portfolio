import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { featuredProjects } from '../data/portfolio';
import api from '../lib/api';
import SectionHeading from './SectionHeading';

function Projects() {
  const [projects, setProjects] = useState(featuredProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    api
      .get('/projects')
      .then((res) => {
        if (active && Array.isArray(res.data) && res.data.length) {
          setProjects(res.data);
        }
      })
      .catch(() => setProjects(featuredProjects))
      .finally(() => active && setLoading(false));

    return () => {
      active = false;
    };
  }, []);

  const visibleProjects = useMemo(() => projects.filter((project) => project.featured !== false), [projects]);

  return (
    <section id="projects" className="section-shell">
      <SectionHeading eyebrow="Featured Projects" title="Project work shaped for recruiters to scan fast.">
        Each card highlights the product idea, stack, and quick actions for source code or live demos.
      </SectionHeading>

      {loading && <p className="mb-6 text-center text-sm text-slate-400">Loading live project data...</p>}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project._id || project.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/7 shadow-2xl shadow-black/20 backdrop-blur-xl"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src={project.image || featuredProjects[index % featuredProjects.length].image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 min-h-24 leading-7 text-slate-300">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {(project.technologies || []).map((tech) => (
                  <span key={tech} className="rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-100">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
