import React from 'react';
import { Database, BarChart3, Code, FileSpreadsheet, Brain, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const tools = [
    { name: 'Excel', icon: FileSpreadsheet },
    { name: 'Power BI', icon: BarChart3 },
    { name: 'Python', icon: Code },
    { name: 'SQL', icon: Database },
    { name: 'Tableau', icon: TrendingUp },
    { name: 'Analytics', icon: Brain }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=500" 
              alt="Ayaan Gavandi"
            />
          </div>
          <div className="about-text-content">
            <p className="about-text">
              I'm a passionate Data Analyst with 3+ years of experience transforming complex datasets 
              into actionable business insights. My expertise lies in creating compelling visualizations, 
              building automated reporting systems, and uncovering patterns that drive strategic decisions.
            </p>
            <p className="about-text">
              I specialize in end-to-end data solutions - from data cleaning and preparation to advanced 
              analytics and dashboard development. My goal is to make data accessible and meaningful for 
              stakeholders at all levels.
            </p>
            <div className="tools-grid">
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <div key={index} className="tool-item">
                    <IconComponent className="tool-icon" />
                    <span>{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;