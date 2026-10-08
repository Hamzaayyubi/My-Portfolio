import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [messageError, setMessageError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setMessageError('');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setMessageError(data.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setMessageError('Network error occurred.');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        
        <div className="contact-container">
          <div className="contact-info card">
            <h3 className="contact-heading">Get in Touch</h3>
            <p className="contact-text">
              Have a project idea, internship opportunity, or just want to connect? I'd love to hear from you.
            </p>
            
            <div className="contact-links">
              <a href="mailto:ayyubihamza877@gmail.com" className="contact-link">
                <div className="contact-icon"><Mail size={20} /></div>
                <div>
                  <span className="link-label">Email</span>
                  <span className="link-value">ayyubihamza877@gmail.com</span>
                </div>
              </a>
              
              <a href="https://github.com/Hamzaayyubi" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-icon"><Github size={20} /></div>
                <div>
                  <span className="link-label">GitHub</span>
                  <span className="link-value">github.com/Hamzaayyubi</span>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/hamza-ayyubi-540781338/" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-icon"><Linkedin size={20} /></div>
                <div>
                  <span className="link-label">LinkedIn</span>
                  <span className="link-value">Hamza Ayyubi</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="contact-form-container card">
            {status === 'success' ? (
              <div className="success-state">
                <CheckCircle size={64} className="text-accent" style={{ marginBottom: '1rem' }} />
                <h3>Message sent successfully!</h3>
                <p>I'll get back to you soon.</p>
                <button className="btn btn-secondary" onClick={() => setStatus('idle')} style={{ marginTop: '1.5rem' }}>Send Another Message</button>
              </div>
            ) : status === 'error' ? (
              <div className="error-state" style={{ textAlign: 'center', padding: '3rem 0' }}>
                <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>Unable to send your message right now.</h3>
                <p style={{ marginBottom: '1.5rem' }}>{messageError}</p>
                <p>Please email me directly at <a href="mailto:ayyubihamza877@gmail.com" className="text-accent">ayyubihamza877@gmail.com</a>.</p>
                <button className="btn btn-secondary" onClick={() => setStatus('idle')} style={{ marginTop: '1.5rem' }}>Try Again</button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="form-input" 
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-textarea" 
                    placeholder="Hello Hamza, I would like to discuss..."
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
