import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const formData = new FormData(e.target);
    formData.append('access_key', '9bf04673-54fd-4222-894d-de90720fc596');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ maxWidth: '680px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        <p className="mono accent" style={{ marginBottom: '10px', fontSize: '0.9rem' }}>
          04. What's Next?
        </p>
        <h2
          style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            marginBottom: '18px',
            color: 'var(--text-primary)',
          }}
        >
          Get In Touch
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.8 }}>
          I'm currently looking for new opportunities, and my inbox is always open. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="glass-panel"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name"
            required
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Your Email"
            required
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            className="form-control"
            placeholder="Your Message"
            required
            disabled={loading}
          />
        </div>

        <motion.button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', padding: '15px', display: 'block', opacity: loading ? 0.7 : 1 }}
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
          disabled={loading}
        >
          {loading ? 'Sending…' : 'Say Hello'}
        </motion.button>

        {status === 'success' && (
          <p
            style={{
              textAlign: 'center',
              marginTop: '18px',
              color: 'var(--accent-color)',
              fontSize: '0.95rem',
            }}
          >
            ✅ Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p
            style={{
              textAlign: 'center',
              marginTop: '18px',
              color: '#ff6b6b',
              fontSize: '0.95rem',
            }}
          >
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
