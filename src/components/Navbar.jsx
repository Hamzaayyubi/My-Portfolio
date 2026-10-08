import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#training' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          Hamza<span className="text-accent">.</span>
        </a>

        <div className="navbar-desktop">
          <nav className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="navbar-actions">
            <button onClick={() => setDarkMode(!darkMode)} className="btn-icon theme-toggle" aria-label="Toggle Theme">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="https://github.com/Hamzaayyubi" target="_blank" rel="noreferrer" className="btn-icon">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/hamza-ayyubi-540781338/" target="_blank" rel="noreferrer" className="btn-icon">
              <Linkedin size={20} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary resume-btn">
              <Download size={18} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        <div className="navbar-mobile-controls">
          <button onClick={() => setDarkMode(!darkMode)} className="btn-icon theme-toggle" aria-label="Toggle Theme">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary mobile-resume-btn">
            <Download size={18} />
            <span>Resume</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
