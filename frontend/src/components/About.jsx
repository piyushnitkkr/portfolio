import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        {/* Text content */}
        <motion.div
          style={{ color: 'var(--text-secondary)' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p variants={itemVariants} style={{ marginBottom: '15px', lineHeight: 1.8 }}>
            Hello! My name is Piyush and I enjoy creating things that live on the internet. My interest
            in web development started back in 2023 when I decided to try editing custom Tumblr themes —
            turns out hacking together HTML & CSS taught me a lot!
          </motion.p>
          <motion.p variants={itemVariants} style={{ marginBottom: '15px', lineHeight: 1.8 }}>
            Fast-forward to today, and I've had the privilege of interning at an enterprise level at{' '}
            <motion.span
              className="accent"
              style={{ display: 'inline-block' }}
              whileHover={{ scale: 1.08 }}
            >
              Accenture
            </motion.span>
            , and building several full-stack applications. My main focus these days is building
            accessible, inclusive products and digital experiences.
          </motion.p>
          <motion.p variants={itemVariants} style={{ marginBottom: '16px' }}>
            Here are a few technologies I've been working with recently:
          </motion.p>
          <motion.ul
            variants={containerVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(130px, 1fr))',
              gap: '10px',
              listStyle: 'none',
              fontFamily: 'Fira Code, monospace',
              fontSize: '0.88rem',
            }}
          >
            {['JavaScript (ES6+)', 'React', 'Node.js', 'Python', 'MongoDB', 'FastAPI'].map((tech, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                style={{ position: 'relative', paddingLeft: '20px', color: 'var(--text-secondary)' }}
                whileHover={{ x: 5, color: 'var(--accent-color)' }}
              >
                <span className="accent" style={{ position: 'absolute', left: 0 }}>
                  ▹
                </span>{' '}
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Avatar */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
        >
          <motion.div
            style={{ position: 'relative', width: '240px', height: '240px' }}
            whileHover={{ scale: 1.05, rotate: 2, transition: { type: 'spring', stiffness: 300 } }}
          >
            <motion.div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--accent-color)',
                borderRadius: '4px',
                position: 'absolute',
                top: '16px',
                left: '16px',
                zIndex: 0,
                opacity: 0.5,
              }}
              whileHover={{ top: '8px', left: '8px' }}
            />
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--card-bg)',
                borderRadius: '4px',
                border: '2px solid var(--accent-color)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'var(--accent-color)',
                fontSize: '2.5rem',
                fontWeight: 800,
                position: 'relative',
                zIndex: 1,
              }}
            >
              PM
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
