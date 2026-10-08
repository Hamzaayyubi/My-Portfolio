import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'Mongoose']
    },
    {
      title: 'Programming',
      skills: ['C', 'C++', 'Java']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Vite', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category card">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-badges">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
