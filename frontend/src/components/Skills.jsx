import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', skills: ['C', 'C++', 'Java', 'JavaScript', 'Python', 'SQL'] },
    { title: 'Frontend', skills: ['React.js', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS', 'Shadcn/ui'] },
    { title: 'Backend & DBs', skills: ['FastAPI', 'Node.js', 'Express.js', 'Firebase', 'MongoDB', 'MySQL'] },
    { title: 'AI & ML', skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'YOLOv5'] },
    { title: 'Tools', skills: ['Git', 'GitHub', 'Streamlit', 'Docker', 'Postman'] }
  ];

  return (
    <section id="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="glass-panel" 
            style={{ padding: '20px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="accent mono" style={{ fontSize: '1.1rem', marginBottom: '15px' }}>{category.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {category.skills.map((skill, i) => (
                <motion.span 
                  key={i} 
                  style={{ background: 'rgba(100, 255, 218, 0.1)', color: '#ccd6f6', padding: '5px 12px', borderRadius: '15px', fontSize: '0.85rem' }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(100, 255, 218, 0.2)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
