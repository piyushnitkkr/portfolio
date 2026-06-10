import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section id="achievements">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Extracurricular
      </motion.h2>
      <motion.div 
        className="glass-panel" 
        style={{ maxWidth: '800px', margin: '0 auto' }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ul style={{ color: '#8892b0', listStyle: 'none' }}>
          <motion.li 
            style={{ position: 'relative', paddingLeft: '30px', marginBottom: '15px' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <span className="accent" style={{ position: 'absolute', left: 0, top: '2px' }}>🏆</span>
            Solved <strong>1,000+ DSA problems</strong> across LeetCode, GeeksforGeeks, Codeforces, and other competitive programming platforms.
          </motion.li>
          <motion.li 
            style={{ position: 'relative', paddingLeft: '30px', marginBottom: '15px' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <span className="accent" style={{ position: 'absolute', left: 0, top: '2px' }}>🏃</span>
            Volunteered for the <strong>Fit India Movement</strong>, coordinating <strong>3+ campus events</strong> and engaging <strong>100+ students</strong> in health and fitness initiatives.
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Achievements;
