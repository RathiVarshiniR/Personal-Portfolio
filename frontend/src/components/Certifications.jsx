import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';
import { certifications } from '../data/portfolio';
import SectionHeading from './SectionHeading';

function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading eyebrow="Certifications" title="Proof points that support the portfolio.">
        Focused learning across AI foundations, Python, full stack development, and machine learning.
      </SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((certificate, index) => (
          <motion.article
            key={certificate}
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-sky-400/12 text-sky-200">
              <FaAward />
            </div>
            <h3 className="text-lg font-semibold text-white">{certificate}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">Completed and ready to discuss in interviews.</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
