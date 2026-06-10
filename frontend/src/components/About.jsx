import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: '100%' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
      >
        About Me
      </motion.h2>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px', alignItems: 'center' }}>
        <motion.div 
          style={{ color: '#8892b0' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={itemVariants} style={{ marginBottom: '15px' }}>
            Hello! My name is Piyush and I enjoy creating things that live on the internet. My interest in web development started back in 2023 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
          </motion.p>
          <motion.p variants={itemVariants} style={{ marginBottom: '15px' }}>
            Fast-forward to today, and I've had the privilege of working at an enterprise level at <motion.span className="accent" whileHover={{ scale: 1.1, color: '#fff', display: 'inline-block' }}>Accenture</motion.span>, and building several full-stack applications. My main focus these days is building accessible, inclusive products and digital experiences.
          </motion.p>
          <motion.p variants={itemVariants}>
            Here are a few technologies I've been working with recently:
          </motion.p>
          <motion.ul variants={containerVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(140px, 200px))', gap: '10px', listStyle: 'none', marginTop: '20px', fontFamily: 'Fira Code, monospace', fontSize: '0.9rem' }}>
            {['JavaScript (ES6+)', 'React', 'Node.js', 'Python', 'MongoDB', 'FastAPI'].map((tech, i) => (
              <motion.li 
                key={i} 
                variants={itemVariants} 
                style={{ position: 'relative', paddingLeft: '20px' }}
                whileHover={{ x: 5, color: '#64ffda' }}
              >
                <span className="accent" style={{ position: 'absolute', left: 0 }}>▹</span> {tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        
        <motion.div 
          className="about-pic" 
          style={{ position: 'relative', width: '300px', height: '300px' }}
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
          whileHover={{ scale: 1.05, rotate: 2, transition: { type: 'spring', stiffness: 300 } }}
        >
          <motion.div 
            style={{ width: '100%', height: '100%', backgroundColor: '#64ffda', borderRadius: '4px', position: 'absolute', top: '20px', left: '20px', zIndex: -1 }}
            whileHover={{ top: '10px', left: '10px' }}
          ></motion.div>
          <div style={{ width: '100%', height: '100%', backgroundColor: '#112240', borderRadius: '4px', border: '2px solid #64ffda', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64ffda', fontSize: '2rem' }}>
            PM
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
