import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } }
  };

  return (
    <section id="experience">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        Where I've Worked
      </motion.h2>
      <motion.div 
        className="glass-panel" 
        style={{ maxWidth: '800px', margin: '0 auto', overflow: 'hidden' }}
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: 'auto' }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '20px' }}>
          <div>
            <motion.h3 
              style={{ fontSize: '1.3rem', color: '#ccd6f6' }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              AEH Intern <motion.span className="accent" whileHover={{ textShadow: '0 0 8px #64ffda' }}>@ Accenture</motion.span>
            </motion.h3>
          </div>
          <motion.div 
            className="mono" style={{ color: '#8892b0', fontSize: '0.9rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Jun 2026 – Present
          </motion.div>
        </div>
        <motion.ul 
          style={{ color: '#8892b0', listStyle: 'none' }}
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.li variants={itemVariants} style={{ position: 'relative', paddingLeft: '30px', marginBottom: '10px' }} whileHover={{ x: 5, color: '#ccd6f6' }}>
            <span className="accent" style={{ position: 'absolute', left: 0 }}>▹</span>
            Collaborated with <strong>3+ cross-functional teams</strong> to map enterprise software workflows, contributing to documentation covering <strong>5 core business processes</strong>.
          </motion.li>
          <motion.li variants={itemVariants} style={{ position: 'relative', paddingLeft: '30px', marginBottom: '10px' }} whileHover={{ x: 5, color: '#ccd6f6' }}>
            <span className="accent" style={{ position: 'absolute', left: 0 }}>▹</span>
            Completed <strong>40+ hours</strong> of hands-on training across Agile methodologies, cloud technologies, and software engineering practices through project-based learning modules.
          </motion.li>
          <motion.li variants={itemVariants} style={{ position: 'relative', paddingLeft: '30px', marginBottom: '10px' }} whileHover={{ x: 5, color: '#ccd6f6' }}>
            <span className="accent" style={{ position: 'absolute', left: 0 }}>▹</span>
            Participated in <strong>weekly</strong> technical training sessions and mentorship programs, applying learnings to <strong>2 internal projects</strong> within the first month of joining.
          </motion.li>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Experience;
