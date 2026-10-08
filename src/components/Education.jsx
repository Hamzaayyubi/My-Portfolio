import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section bg-alt">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Decorative element */}
            <div style={{ 
              position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', 
              background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))' 
            }}></div>
            
            <div style={{ paddingLeft: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <GraduationCap size={24} className="text-accent" />
                    B.Tech Computer Science & Engineering
                  </h3>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={18} />
                    Lovely Professional University, Phagwara, Punjab
                  </p>
                </div>
                
                <div className="badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
                  <Calendar size={16} className="text-accent" />
                  Expected Graduation: 2028
                </div>
              </div>
              
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginTop: '1.5rem' }}>
                Pursuing a comprehensive curriculum focusing on software engineering, web technologies, database management, and advanced computing concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
