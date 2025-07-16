import React from 'react';
import { Mail, Linkedin, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <p className="contact-description">
            Ready to turn your data into actionable insights? Whether you need a comprehensive dashboard, 
            detailed analysis, or data-driven recommendations, I'm here to help your business make 
            smarter decisions.
          </p>
          <div className="contact-methods">
            <a href="mailto:ayaan.gavandi@email.com" className="contact-method">
              <Mail className="contact-icon" />
              <h3>Email</h3>
              <p>ayaan.gavandi@email.com</p>
            </a>
            <a href="https://linkedin.com/in/ayaangavandi" className="contact-method" target="_blank" rel="noopener noreferrer">
              <Linkedin className="contact-icon" />
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </a>
            <a href="#" className="contact-method">
              <FileText className="contact-icon" />
              <h3>Resume</h3>
              <p>Download PDF</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;