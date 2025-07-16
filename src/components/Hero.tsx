import React from 'react';
import { Download, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Ayaan Gavandi</h1>
            <p className="subtitle">📊 Data Analyst | Excel • SQL • Python • Power BI</p>
            <p className="description">
              Turning data into insights. Making business smarter through comprehensive analysis, 
              visualization, and actionable recommendations.
            </p>
            <div className="hero-buttons">
              <a href="#" className="btn btn-primary">
                <Download size={20} />
                Download Resume
              </a>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('projects')}
              >
                <Eye size={20} />
                View Projects
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=500&h=600" 
              alt="Ayaan Gavandi - Data Analyst"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;