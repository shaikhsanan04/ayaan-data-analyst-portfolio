import React, { useEffect, useRef } from 'react';
import { Database, Code, BarChart3, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Data Tools',
      icon: BarChart3,
      skills: [
        { name: 'Microsoft Excel', level: 95, description: 'Advanced formulas, pivot tables, VBA macros' },
        { name: 'Power BI', level: 90, description: 'Interactive dashboards, DAX, data modeling' },
        { name: 'Tableau', level: 85, description: 'Data visualization, storytelling, calculated fields' },
        { name: 'Google Analytics', level: 80, description: 'Web analytics, conversion tracking, reporting' }
      ]
    },
    {
      title: 'Programming',
      icon: Code,
      skills: [
        { name: 'Python', level: 85, description: 'Data analysis, automation, machine learning' },
        { name: 'SQL', level: 90, description: 'Complex queries, stored procedures, optimization' },
        { name: 'R', level: 75, description: 'Statistical analysis, data mining, visualization' },
        { name: 'JavaScript', level: 70, description: 'Web development, data visualization libraries' }
      ]
    },
    {
      title: 'Libraries & Frameworks',
      icon: Database,
      skills: [
        { name: 'Pandas', level: 90, description: 'Data manipulation, cleaning, transformation' },
        { name: 'NumPy', level: 85, description: 'Numerical computing, array operations' },
        { name: 'Matplotlib', level: 80, description: 'Static plots, customization, publication-ready charts' },
        { name: 'Seaborn', level: 75, description: 'Statistical visualization, heatmaps, distributions' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Data Storytelling', level: 95, description: 'Translating insights into compelling narratives' },
        { name: 'Business Intelligence', level: 90, description: 'Strategic analysis, KPI development' },
        { name: 'Problem Solving', level: 88, description: 'Analytical thinking, root cause analysis' },
        { name: 'Communication', level: 85, description: 'Presenting findings to stakeholders' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress-bar');
            progressBars.forEach((bar) => {
              const percentage = bar.getAttribute('data-percentage');
              if (percentage) {
                (bar as HTMLElement).style.width = percentage + '%';
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="skill-category">
                <h3>
                  <IconComponent size={24} />
                  {category.title}
                </h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar"
                          data-percentage={skill.level}
                        ></div>
                      </div>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;