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

  const bullets = [
    <>
      Supported the <strong>RISE with SAP LE-RUN (ACN CIO)</strong> program, contributing to{' '}
      <strong>24×7 production support</strong> of an enterprise SAP S/4HANA landscape spanning{' '}
      <strong>5+ business-critical modules</strong> on cloud infrastructure.
    </>,
    <>
      Monitored and triaged <strong>20+ system alerts weekly</strong> and resolved incident, change,
      and problem tickets in <strong>ServiceNow</strong> with <strong>100% SLA adherence</strong>,
      applying ITIL practices to accelerate root cause analysis.
    </>,
    <>
      Validated <strong>SAP HANA database backup and recovery operations</strong> across full,
      incremental, and log backups, ensuring <strong>99.9%+ backup success rate</strong> and disaster
      recovery readiness for mission-critical ERP workloads.
    </>,
  ];

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
            marginBottom: '6px',
          }}
        >
          <motion.h3
            style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Advanced Application Engineering Analyst Intern{' '}
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

        <p
          style={{
            color: 'var(--accent-color)',
            fontSize: '0.82rem',
            fontFamily: 'Fira Code, monospace',
            marginBottom: '18px',
          }}
        >
          SAP S/4HANA · ServiceNow · ITIL · Cloud Infrastructure
        </p>

        <motion.ul
          style={{ color: 'var(--text-secondary)', listStyle: 'none', padding: 0 }}
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {bullets.map((point, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              style={{
                position: 'relative',
                paddingLeft: '30px',
                marginBottom: '12px',
                lineHeight: 1.75,
              }}
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
