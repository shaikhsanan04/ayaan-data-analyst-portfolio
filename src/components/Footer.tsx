import React from 'react';
import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            © 2025 Ayaan Gavandi. Built with <Heart size={16} style={{ color: '#ef4444', display: 'inline' }} /> using React & Vite.
          </div>
          <div className="social-links">
            <a href="https://linkedin.com/in/ayaangavandi" className="social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/ayaangavandi" className="social-link" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="mailto:ayaan.gavandi@email.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;