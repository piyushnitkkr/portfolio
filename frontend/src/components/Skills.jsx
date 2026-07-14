import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C', 'C++', 'Java', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS', 'Shadcn/ui'],
  },
  {
    title: 'Backend & Databases',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'Firebase', 'MongoDB', 'MySQL', 'REST APIs', 'Auth & Authorization'],
  },
  {
    title: 'AI / ML & CV',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'CNNs', 'NLP', 'OCR', 'OpenCV', 'YOLOv5', 'Machine Learning'],
  },
  {
    title: 'Cloud & Deployment',
    skills: ['Firebase', 'Vercel', 'Render', 'FCM'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Streamlit', 'Postman', 'Wireshark', 'Cisco Packet Tracer', 'Tinkercad'],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '20px',
        }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="glass-panel"
            style={{ padding: '22px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <h3 className="accent mono" style={{ fontSize: '0.95rem', marginBottom: '14px' }}>
              {category.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  style={{
                    background: 'rgba(184, 242, 230, 0.08)',
                    color: 'var(--text-primary)',
                    padding: '5px 12px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    border: '1px solid var(--glass-border)',
                  }}
                  whileHover={{
                    scale: 1.08,
                    background: 'rgba(184, 242, 230, 0.18)',
                    color: 'var(--accent-color)',
                  }}
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
