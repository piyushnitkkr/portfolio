import React from 'react';
import { motion } from 'framer-motion';

const GitHubIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const featuredProjects = [
  {
    title: '💊 WellBuddy',
    subtitle: 'AI-Powered Health Companion App',
    tech: ['React Native', 'Node.js', 'FastAPI', 'Llama 4', 'MongoDB', 'Expo'],
    description:
      'Built a full-stack AI health companion integrating Llama 4 Scout (Groq) for prescription OCR, AI wellness chatbot with VADER sentiment analysis, Google Fit sync, recurring medicine notifications, and a complete Play Store compliance package.',
    link: 'https://piyushnitkkr.github.io/Well-Buddy/',
    github: 'https://github.com/piyushnitkkr/Well-Buddy',
  },
  {
    title: '🧠 MindSketch',
    subtitle: 'Emotion Detection System',
    tech: ['React', 'FastAPI', 'TensorFlow', 'CNN', 'Vercel'],
    description:
      'Full-stack AI emotion recognition platform using a custom CNN model trained to 88% accuracy. Features real-time sketch input with instant emotion prediction, live canvas interaction, and persistent mood tracking.',
    link: 'https://ai-emotion-tracker.vercel.app/',
    github: null,
  },
  {
    title: '📈 AI Stock Predictor',
    subtitle: 'Ensemble ML Prediction System',
    tech: ['Transformer', 'XGBoost', 'Streamlit', 'Python', 'Sentiment Analysis'],
    description:
      'Developed an ensemble ML system using Transformer + XGBoost achieving ~70% accuracy on Nifty 50 predictions. Engineered a feature pipeline (22 → top 10 features) with integrated sentiment analysis and sector-based signals.',
    link: 'https://ai-stock-predictor-test.streamlit.app/',
    github: null,
  },
];

const otherProjects = [
  {
    title: '🚦 Smart Traffic Control',
    tech: ['YOLOv5', 'PyTorch', 'OpenCV', 'Streamlit', 'Computer Vision'],
    description:
      'YOLOv5-based real-time traffic optimization system trained on 6K+ images achieving 88.6% accuracy. Reduced lane wait time by 22% using adaptive signal logic with weighted scoring.',
    link: 'https://github.com/piyushnitkkr/Smart-Traffic-Control',
    github: 'https://github.com/piyushnitkkr/Smart-Traffic-Control',
  },
  {
    title: '📚 Smart Study Hub',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    description:
      'Full-stack collaboration platform featuring real-time chat, file sharing, and authentication. Built with scalable backend architecture and polished user experience.',
    link: 'https://smart-hub-zrd3.vercel.app/',
    github: null,
  },
];

const TechTag = ({ label, large }) => (
  <li
    style={{
      backgroundColor: 'rgba(184, 242, 230, 0.08)',
      padding: large ? '5px 12px' : '4px 10px',
      borderRadius: '20px',
      fontSize: large ? '0.78rem' : '0.74rem',
      color: 'var(--accent-color)',
      fontWeight: 500,
      listStyle: 'none',
      border: '1px solid rgba(184, 242, 230, 0.12)',
    }}
  >
    {label}
  </li>
);

const Projects = () => {
  return (
    <section id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      {/* Featured Projects */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '28px',
        }}
      >
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="glass-panel"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '28px',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(0,0,0,0.4)', transition: { duration: 0.2 } }}
          >
            <div>
              <h3
                style={{
                  color: 'var(--text-primary)',
                  fontSize: 'clamp(1.1rem, 3vw, 1.45rem)',
                  marginBottom: '5px',
                  fontWeight: 700,
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  color: 'var(--accent-color)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  marginBottom: '14px',
                }}
              >
                {project.subtitle}
              </p>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  marginBottom: '22px',
                  lineHeight: 1.75,
                }}
              >
                {project.description}
              </p>
            </div>

            <div>
              <ul
                style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px', padding: 0 }}
              >
                {project.tech.map((t, i) => (
                  <TechTag key={i} label={t} large />
                ))}
              </ul>

              <div
                style={{
                  display: 'flex',
                  gap: '20px',
                  borderTop: '1px solid var(--glass-border)',
                  paddingTop: '16px',
                  alignItems: 'center',
                }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent-color)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  View Live <span>→</span>
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                    style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}
                  >
                    <GitHubIcon />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects */}
      <motion.h3
        style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
          marginTop: '70px',
          marginBottom: '28px',
          fontWeight: 700,
          color: 'var(--text-primary)',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Other Projects
      </motion.h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '22px',
        }}
      >
        {otherProjects.map((project, index) => (
          <motion.div
            key={index}
            className="glass-panel"
            style={{ padding: '26px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 8px 25px rgba(0,0,0,0.35)', transition: { duration: 0.2 } }}
          >
            <h4
              style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                marginBottom: '10px',
                fontWeight: 700,
              }}
            >
              {project.title}
            </h4>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.87rem',
                marginBottom: '18px',
                lineHeight: 1.7,
              }}
            >
              {project.description}
            </p>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '18px', padding: 0 }}>
              {project.tech.map((t, i) => (
                <TechTag key={i} label={t} />
              ))}
            </ul>
            <div
              style={{
                display: 'flex',
                gap: '15px',
                borderTop: '1px solid var(--glass-border)',
                paddingTop: '14px',
                alignItems: 'center',
              }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--accent-color)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                View Live <span>→</span>
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                  style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}
                >
                  <GitHubIcon size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
