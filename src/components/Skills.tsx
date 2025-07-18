import React, { useEffect, useRef } from 'react';
import { 
  Database, 
  Code, 
  BarChart3, 
  FileSpreadsheet, 
  Brain, 
  TrendingUp,
  PieChart,
  Activity,
  Layers,
  Zap,
  Target,
  Users
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Microsoft Excel', icon: FileSpreadsheet, level: 95, color: '#10B981' },
    { name: 'Power BI', icon: BarChart3, level: 90, color: '#F59E0B' },
    { name: 'Python', icon: Code, level: 85, color: '#3B82F6' },
    { name: 'SQL', icon: Database, level: 90, color: '#8B5CF6' },
    { name: 'Tableau', icon: TrendingUp, level: 85, color: '#EF4444' },
    { name: 'Pandas', icon: Layers, level: 90, color: '#06B6D4' },
    { name: 'NumPy', icon: Activity, level: 85, color: '#84CC16' },
    { name: 'R', icon: PieChart, level: 75, color: '#F97316' },
    { name: 'Google Analytics', icon: Target, level: 80, color: '#EC4899' },
    { name: 'Matplotlib', icon: BarChart3, level: 80, color: '#6366F1' },
    { name: 'Data Storytelling', icon: Users, level: 95, color: '#14B8A6' },
    { name: 'Machine Learning', icon: Brain, level: 75, color: '#A855F7' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillCards = entry.target.querySelectorAll('.skill-card');
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
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
        <div className="skills-card-grid">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div key={index} className="skill-card">
                <div className="skill-card-inner">
                  <div className="skill-icon-wrapper">
                    <IconComponent 
                      className="skill-card-icon" 
                      style={{ color: skill.color }}
                    />
                  </div>
                  <h3 className="skill-card-name">{skill.name}</h3>
                  <div className="skill-card-level">
                    <div className="skill-card-progress">
                      <div 
                        className="skill-card-progress-bar"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color 
                        }}
                      ></div>
                    </div>
                    <span className="skill-card-percentage">{skill.level}%</span>
                  </div>
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