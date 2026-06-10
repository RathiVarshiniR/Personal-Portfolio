import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, children }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.6 }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{children}</p>}
    </motion.div>
  );
}

export default SectionHeading;
