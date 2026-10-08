import { ArrowRight, ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Side: Content */}
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Available for Opportunities
          </div>
          
          <h1 className="hero-greeting">Hi, I'm Hamza Ayyubi.</h1>
          <h2 className="hero-title gradient-text">Full Stack Web Developer</h2>
          
          <p className="hero-description">
            I build modern, responsive and user-focused web applications with clean interfaces and reliable backend systems.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Connect
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-container">
            {/* Floating Labels */}
            <div className="floating-label label-react animate-float" style={{ animationDelay: '0s' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="20" height="20" />
              <span>React</span>
            </div>
            <div className="floating-label label-node animate-float" style={{ animationDelay: '1s' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="20" height="20" />
              <span>Node.js</span>
            </div>
            <div className="floating-label label-mongo animate-float" style={{ animationDelay: '2s' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="20" height="20" />
              <span>MongoDB</span>
            </div>

            <div className="profile-frame">
              <div className="profile-glow"></div>
              <img 
                src="/profile.png" 
                alt="Hamza Ayyubi" 
                className="profile-image"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://via.placeholder.com/400x500/1a1d24/6366f1?text=Profile+Photo';
                }}
              />
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="scroll-indicator">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={24} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
