import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    icon: '🏆',
    text: (
      <>
        Solved <strong>1,000+ DSA problems</strong> across LeetCode, GeeksforGeeks, Codeforces, and
        other competitive programming platforms.
      </>
    ),
  },
  {
    icon: '🏃',
    text: (
      <>
        Volunteered for the <strong>Fit India Movement</strong>, coordinating{' '}
        <strong>3+ campus events</strong> and engaging <strong>100+ students</strong> in health and
        fitness initiatives.
      </>
    ),
  },
];

const Achievements = () => {
  return (
    <section id="achievements">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        Achievements &amp; Extracurricular
      </motion.h2>

      <motion.div
        className="glass-panel"
        style={{ maxWidth: '800px', margin: '0 auto' }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {achievements.map((item, i) => (
            <motion.li
              key={i}
              style={{
                position: 'relative',
                paddingLeft: '36px',
                marginBottom: i < achievements.length - 1 ? '18px' : 0,
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              whileHover={{ x: 4, color: 'var(--text-primary)' }}
            >
              <span
                style={{ position: 'absolute', left: 0, top: '2px', fontSize: '1.1rem' }}
                aria-hidden="true"
              >
                {item.icon}
              </span>
              {item.text}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Achievements;
