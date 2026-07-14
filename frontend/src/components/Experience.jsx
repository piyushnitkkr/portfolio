import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
  };

  return (
    <section id="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        Where I've Worked
      </motion.h2>

      <motion.div
        className="glass-panel"
        style={{ maxWidth: '800px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px',
          }}
        >
          <motion.h3
            style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            AEH Intern{' '}
            <motion.span className="accent" whileHover={{ textShadow: '0 0 8px var(--accent-color)' }}>
              @ Accenture
            </motion.span>
          </motion.h3>

          <motion.span
            className="mono"
            style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', whiteSpace: 'nowrap' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Jun 2026 – Present
          </motion.span>
        </div>

        <motion.ul
          style={{ color: 'var(--text-secondary)', listStyle: 'none' }}
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            <>
              Collaborated with <strong>3+ cross-functional teams</strong> to map enterprise software
              workflows, contributing to documentation covering <strong>5 core business processes</strong>.
            </>,
            <>
              Completed <strong>40+ hours</strong> of hands-on training across Agile methodologies, cloud
              technologies, and software engineering practices through project-based learning modules.
            </>,
            <>
              Participated in <strong>weekly</strong> technical training sessions and mentorship programs,
              applying learnings to <strong>2 internal projects</strong> within the first month of joining.
            </>,
          ].map((point, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              style={{ position: 'relative', paddingLeft: '30px', marginBottom: '12px', lineHeight: 1.75 }}
              whileHover={{ x: 5, color: 'var(--text-primary)' }}
            >
              <span className="accent" style={{ position: 'absolute', left: 0 }}>
                ▹
              </span>
              {point}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Experience;
