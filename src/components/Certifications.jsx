import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: 'Centre for Professional Enhancement — Certificate',
      date: 'Jul 2026'
    },
    {
      title: 'GEN AI NASSCOM under the Skill Developed Program',
      date: 'Jun 2025'
    },
    {
      title: 'NAPS Associate under the UNIVOC Foundation',
      date: 'Apr 2025'
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {certs.map((cert, index) => (
            <div key={index} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="btn-icon" style={{ background: 'var(--bg-tertiary)', color: 'var(--accent-primary)', flexShrink: 0 }}>
                  <Award size={20} />
                </div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '600' }}>{cert.title}</h3>
              </div>
              <div className="badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                <Calendar size={14} />
                {cert.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
