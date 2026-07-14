import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <motion.div
        className="glass-panel"
        style={{ maxWidth: '800px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(100, 255, 218, 0.08)' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '16px',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                color: 'var(--text-primary)',
                marginBottom: '5px',
              }}
            >
              National Institute of Technology, Kurukshetra
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
              Bachelor of Technology in Information Technology
            </p>
          </div>
          <span className="mono accent" style={{ fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
            Aug 2023 – Present
          </span>
        </div>

        <p style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>
          <strong>CGPA:</strong> 8.92
        </p>
        <p style={{ color: 'var(--text-secondary)' }}>
          <strong>Coursework:</strong> Data Structures &amp; Algorithms, Operating Systems, DBMS,
          Computer Networks, OOPs
        </p>
      </motion.div>
    </section>
  );
};

export default Education;
