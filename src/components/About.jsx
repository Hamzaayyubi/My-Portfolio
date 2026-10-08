import { Code, BookOpen, Layers, Terminal } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <BookOpen size={24} />,
      title: 'B.Tech CSE',
      desc: 'Lovely Professional University'
    },
    {
      icon: <Code size={24} />,
      title: 'Full Stack Development',
      desc: 'MERN Stack & Beyond'
    },
    {
      icon: <Layers size={24} />,
      title: '2 Featured Projects',
      desc: 'Real-world Applications'
    },
    {
      icon: <Terminal size={24} />,
      title: 'Always Learning',
      desc: 'Exploring New Tech'
    }
  ];

  return (
    <section id="about" className="section bg-alt">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-text-container card">
            <p className="about-text">
              I am a B.Tech Computer Science & Engineering student at Lovely Professional University, with a strong focus on full-stack web development. I enjoy bringing ideas to life through code, building everything from responsive user interfaces to robust backend systems.
            </p>
            <p className="about-text">
              My core interests lie in frontend development, backend development, crafting REST APIs, and managing databases. I am deeply passionate about problem-solving and building practical real-world applications that deliver excellent user experiences.
            </p>
            <p className="about-text">
              Continuous learning is at the heart of my approach. I consistently explore modern web technologies, refine my skills, and push myself to build reliable, scalable, and maintainable software solutions.
            </p>
          </div>
          
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card card">
                <div className="highlight-icon">{item.icon}</div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
