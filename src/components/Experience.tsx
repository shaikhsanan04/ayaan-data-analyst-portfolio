import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Data Analyst Intern',
      company: 'CoachX',
      location: 'Remote',
      duration: 'Jan 2024 - Jan 2025',
      type: 'Internship',
      responsibilities: [
        'Collected, cleaned, and analyzed datasets using Excel, SQL, and Python',
        'Created interactive dashboards and reports using Power BI and Tableau',
        'Developed SQL queries for business performance metrics',
        'Built Excel reports with PivotTables and charts'
      ]
    },
    {
      title: 'Freelance Data Analyst & Front-End Developer',
      company: 'Self-Employed',
      location: 'Remote',
      duration: 'Nov 2022 - Dec 2023',
      type: 'Freelance',
      responsibilities: [
        'Designed dashboards in Excel and Tableau',
        'Cleaned raw data for analytics accuracy',
        'Built client websites using HTML, CSS, and JavaScript',
        'Practiced SQL queries and built personal dashboards'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-badge">
                  <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="experience-meta-top">
                  <span className="experience-type-badge">{exp.type}</span>
                  <div className="experience-duration">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="experience-main">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company-info">
                  <div className="company-details">
                    <Briefcase size={16} />
                    <span className="company-name">{exp.company}</span>
                  </div>
                  <div className="location-details">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="experience-responsibilities">
                <h4>Key Responsibilities</h4>
                <ul className="responsibilities-list">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="responsibility-item">
                      <ChevronRight size={12} />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;