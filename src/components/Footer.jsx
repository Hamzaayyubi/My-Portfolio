import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '2rem 0', 
      textAlign: 'center', 
      borderTop: '1px solid var(--border-color)',
      background: 'var(--bg-secondary)',
      marginTop: 'auto'
    }}>
      <div className="container">
        <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          Built with <Heart size={16} className="text-accent" style={{ fill: 'currentColor' }} /> by Hamza Ayyubi
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
