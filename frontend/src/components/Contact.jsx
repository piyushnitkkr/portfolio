import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const formData = new FormData(e.target);
    
    // Web3Forms API Key - Get yours for free at https://web3forms.com/
    formData.append("access_key", "9bf04673-54fd-4222-894d-de90720fc596");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully!');
        e.target.reset();
      } else {
        console.log("Error", data);
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="mono accent" style={{ marginBottom: '10px' }}>04. What's Next?</p>
        <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Get In Touch</h2>
        <p style={{ color: '#949494', marginBottom: '40px' }}>
          I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>
      
      <motion.form 
        onSubmit={handleSubmit} 
        style={{ textAlign: 'left' }} 
        className="glass-panel"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="form-group">
          <input type="text" name="name" className="form-control" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" name="email" className="form-control" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea name="message" className="form-control" placeholder="Your Message" required></textarea>
        </div>
        <div style={{ textAlign: 'center' }}>
          <motion.button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '15px', display: 'block' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Say Hello
          </motion.button>
        </div>
        {status && <p style={{ textAlign: 'center', marginTop: '20px', color: status.includes('success') ? '#b8f2e6' : '#ff6b6b' }}>{status}</p>}
      </motion.form>
    </section>
  );
};

export default Contact;
