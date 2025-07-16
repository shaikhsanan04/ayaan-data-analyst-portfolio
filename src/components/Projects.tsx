import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Sales Performance Dashboard',
      description: 'Interactive Power BI dashboard analyzing sales trends, customer segmentation, and revenue forecasting with real-time KPI tracking.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Power BI', 'SQL', 'DAX', 'Excel'],
      liveDemo: 'https://demo-sales-dashboard.com',
      github: 'https://github.com/ayaangavandi/sales-dashboard'
    },
    {
      title: 'Customer Behavior Analytics',
      description: 'Python-based analysis of customer journey data using machine learning to identify patterns and predict churn probability.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      liveDemo: 'https://demo-customer-analytics.com',
      github: 'https://github.com/ayaangavandi/customer-analytics'
    },
    {
      title: 'Financial Data Pipeline',
      description: 'Automated ETL pipeline for financial data processing with real-time monitoring and alert systems built using SQL and Python.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['SQL', 'Python', 'Apache Airflow', 'PostgreSQL'],
      liveDemo: 'https://demo-financial-pipeline.com',
      github: 'https://github.com/ayaangavandi/financial-pipeline'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveDemo} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;