import { Code2 } from 'lucide-react';

const Training = () => {
  const topics = [
    'Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 
    'Graphs', 'Hashing', 'Sorting', 'Problem Solving'
  ];

  return (
    <section id="training" className="section">
      <div className="container">
        <h2 className="section-title">Training & Development</h2>
        
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div className="btn-icon" style={{ background: 'var(--accent-glow)', color: 'var(--accent-primary)', borderColor: 'transparent' }}>
              <Code2 size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Data Structures & Algorithms</h3>
              <p style={{ color: 'var(--text-muted)' }}>Continuous Technical Learning</p>
            </div>
          </div>
          
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>
            I actively engage in continuous learning to strengthen my core computer science fundamentals. My training focuses on deep conceptual understanding and practical problem-solving across various data structures and algorithms.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {topics.map((topic, index) => (
              <span key={index} className="badge" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
