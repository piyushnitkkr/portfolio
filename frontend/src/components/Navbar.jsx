import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = ({ scrollY, toggleTheme, isDarkMode }) => {
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20, staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
    hover: { color: 'var(--accent-color)', y: -2, transition: { type: 'spring', stiffness: 400 } }
  };

  return (
    <motion.nav 
      className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.a 
        href="#" 
        className="nav-logo"
        whileHover={{ scale: 1.05, color: 'var(--accent-color)' }}
        whileTap={{ scale: 0.95 }}
      >
        Portfolio
      </motion.a>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <ul className="nav-links">
          {['Home', 'Experience', 'Projects', 'About', 'Skills', 'Contact'].map((item) => (
            <motion.li key={item} variants={linkVariants} whileHover="hover">
              <Link to={item === 'Home' ? 'hero' : item.toLowerCase()} smooth={true} duration={500} className="nav-link">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
        
        <motion.button
          onClick={toggleTheme}
          style={{ background: 'rgba(150,150,150,0.1)', border: 'none', borderRadius: '8px', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', color: 'var(--text-primary)' }}
          whileHover={{ scale: 1.1, background: 'rgba(150,150,150,0.2)' }}
          whileTap={{ scale: 0.9 }}
        >
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
