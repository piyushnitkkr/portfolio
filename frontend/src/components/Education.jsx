import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <motion.div 
        className="glass-panel" 
        style={{ maxWidth: '800px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(100, 255, 218, 0.1)' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#ccd6f6', marginBottom: '5px' }}>National Institute of Technology, Kurukshetra</h3>
            <p style={{ color: '#8892b0', fontStyle: 'italic', marginBottom: '15px' }}>Bachelor of Technology in Information Technology</p>
          </div>
          <div className="mono accent" style={{ fontSize: '0.9rem', marginBottom: '15px' }}>
            Aug 2023 – Present
          </div>
        </div>
        <p style={{ color: '#ccd6f6', marginBottom: '10px' }}><strong>CGPA:</strong> 8.92</p>
        <p style={{ color: '#8892b0' }}>
          <strong>Coursework:</strong> Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, OOPs
        </p>
      </motion.div>
    </section>
  );
};

export default Education;
