import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // For character-by-character animation
  const name = "Piyush Mittal";
  const charVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 15, stiffness: 200 } }
  };

  return (
    <motion.section 
      id="hero" 
      style={{ minHeight: '100vh', paddingTop: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 10 }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p variants={itemVariants} style={{ marginBottom: '20px', color: '#949494', fontSize: '1.2rem', fontWeight: 500 }}>
        Hello! I'm
      </motion.p>
      
      <motion.h1 
        style={{ fontSize: 'clamp(50px, 10vw, 100px)', color: '#b8f2e6', fontWeight: 800, margin: '0 0 10px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', letterSpacing: '-2px' }}
      >
        {name.split('').map((char, index) => (
          <motion.span key={index} variants={charVariants} style={{ display: 'inline-block' }}>
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.h2 
        variants={itemVariants} 
        style={{ fontSize: 'clamp(20px, 4vw, 40px)', color: '#949494', fontWeight: 400, marginTop: '10px', marginBottom: '50px', position: 'relative' }} 
      >
        Full-Stack Developer & AI Enthusiast
        <div style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '2px', background: '#4a4a4a' }}></div>
      </motion.h2>
      
      <motion.div 
        variants={itemVariants}
        style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}
      >
        <motion.a 
          href="https://drive.google.com/drive/folders/1snRoGk0fhvF0R38HCx1RPp7UU_1zCW9o?usp=drive_link" 
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          📄 View Resume
        </motion.a>
        <Link to="contact" smooth={true} duration={500}>
          <motion.button 
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            ✉️ Get In Touch
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
