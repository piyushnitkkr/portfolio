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

const ExternalLinkIcon = ({ size = 16 }) => (
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
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const featuredProjects = [
  {
    title: '💊 WellBuddy',
    subtitle: 'Smart Health Companion App',
    tech: ['React Native', 'FastAPI', 'Firebase', 'MongoDB', 'Google ML Kit', 'NLP'],
    bullets: [
      'Built a cross-platform healthcare companion app unifying prescription management, medication scheduling, health records, and wellness insights into a single mobile experience serving 3 core user workflows.',
      'Engineered an OCR pipeline using Google ML Kit and regex-based parsing to extract medicine names and dosage details with 85%+ accuracy, cutting manual data entry time by ~70%.',
      'Shipped an NLP-powered health assistant chatbot alongside FCM push notifications, adherence reminders, and a Scikit-learn health risk predictor — covering 4 distinct personalized-care features in a single release.',
    ],
    link: 'https://piyushnitkkr.github.io/Well-Buddy/',
    github: 'https://github.com/piyushnitkkr/Well-Buddy',
  },
  {
    title: '🚦 Smart Traffic Control',
    subtitle: 'AI-Driven Traffic Management System',
    tech: ['YOLOv5x', 'PyTorch', 'OpenCV', 'Streamlit', 'Computer Vision'],
    bullets: [
      'Built an AI-driven traffic management system that optimizes signal timings across multi-lane intersections through real-time vehicle detection, lane analysis, and adaptive control logic.',
      'Trained and fine-tuned a YOLOv5x model on 6,000+ annotated traffic images, achieving 88.6% detection accuracy and boosting detection precision by 34% over the baseline.',
      'Launched an interactive Streamlit monitoring dashboard for traffic analytics, reducing average lane wait time by 22% in simulated traffic scenarios across 10+ test cases.',
    ],
    link: 'https://github.com/piyushnitkkr/Smart-Traffic-Control',
    github: 'https://github.com/piyushnitkkr/Smart-Traffic-Control',
  },
  {
    title: '🧠 MindSketch',
    subtitle: 'Emotion Detection from Drawings',
    tech: ['React.js', 'FastAPI', 'TensorFlow', 'CNNs', 'Node.js', 'Vercel'],
    bullets: [
      'Constructed a deep learning emotion recognition platform using CNN models trained on the QuickDraw dataset, achieving 88% test accuracy across 6 emotion classes on sketch-based inputs.',
      'Wired a React.js frontend to a FastAPI backend for sub-200ms real-time inference, surfacing live prediction dashboards and personalized journaling suggestions in a single UI.',
      'Deployed scalable services across Render and Vercel with a responsive Tailwind CSS and Shadcn/ui interface, achieving 100% uptime across 3 months of production use.',
    ],
    link: 'https://ai-emotion-tracker.vercel.app/',
    github: null,
  },
];

const otherProjects = [
  {
    title: '📚 Smart Study Hub',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    description:
      'Full-stack collaboration platform featuring real-time chat, file sharing, and JWT authentication. Built with scalable backend architecture and a polished user experience.',
    link: 'https://smart-hub-zrd3.vercel.app/',
    github: null,
  },
];

const TechTag = ({ label }) => (
  <li
    style={{
      backgroundColor: 'rgba(184, 242, 230, 0.08)',
      padding: '4px 11px',
      borderRadius: '20px',
      fontSize: '0.76rem',
      color: 'var(--accent-color)',
      fontWeight: 500,
      listStyle: 'none',
      border: '1px solid rgba(184, 242, 230, 0.12)',
      whiteSpace: 'nowrap',
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="glass-panel"
            style={{ padding: '28px 30px' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.4)', transition: { duration: 0.2 } }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '6px',
              }}
            >
              <div>
                <h3
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                    fontWeight: 700,
                    marginBottom: '3px',
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ color: 'var(--accent-color)', fontSize: '0.82rem', fontWeight: 600 }}>
                  {project.subtitle}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <GitHubIcon />
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live demo"
                  style={{ color: 'var(--accent-color)' }}
                >
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>

            {/* Tech tags */}
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '7px',
                padding: 0,
                margin: '14px 0 18px',
              }}
            >
              {project.tech.map((t, i) => (
                <TechTag key={i} label={t} />
              ))}
            </ul>

            {/* Bullet points */}
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {project.bullets.map((bullet, i) => (
                <li
                  key={i}
                  style={{
                    position: 'relative',
                    paddingLeft: '22px',
                    marginBottom: i < project.bullets.length - 1 ? '10px' : 0,
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.75,
                  }}
                >
                  <span
                    className="accent"
                    style={{ position: 'absolute', left: 0, top: '1px', fontSize: '0.75rem' }}
                  >
                    ▹
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
              }}
            >
              <h4
                style={{
                  color: 'var(--text-primary)',
                  fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                  fontWeight: 700,
                }}
              >
                {project.title}
              </h4>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <GitHubIcon size={16} />
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live demo"
                  style={{ color: 'var(--accent-color)' }}
                >
                  <ExternalLinkIcon size={15} />
                </a>
              </div>
            </div>

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

            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', padding: 0 }}>
              {project.tech.map((t, i) => (
                <TechTag key={i} label={t} />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
