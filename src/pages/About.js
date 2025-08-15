import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <section className="about-intro">
          <h1>About <span class="title-gradient">Me</span></h1>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm Vedanth R Kumar, a passionate Software Engineer with a strong focus on backend development 
                and creating scalable solutions. With experience at Titan Company Ltd and expertise in modern 
                technologies, I bring both technical skills and practical industry knowledge to every project.
              </p>
              <p>
                My journey in software development has led me through various technologies including Node.js, 
                Flutter, and Mendix, allowing me to build versatile applications that solve real-world problems. 
                I'm particularly interested in backend architecture and system design.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-avatar-large">VRK</div>
            </div>
          </div>
        </section>

        <section className="experience">
          <h2>Professional <span class="title-gradient">Experience</span></h2>
          <div className="experience-item">
            <div className="experience-header">
              <h3>Software Engineering Intern</h3>
              <span className="company">Titan Company Ltd</span>
            </div>
            <p className="experience-description">
              Gained hands-on experience in software development, working on enterprise-level applications 
              and contributing to various development projects using modern technologies and best practices.
            </p>
          </div>
        </section>

        <section className="interests">
          <h2>Interests & <span class="title-gradient">Goals</span></h2>
          <div className="interests-grid">
            <div className="interest-card">
              <h3>Backend Development</h3>
              <p>Passionate about creating robust server-side applications and APIs</p>
            </div>
            <div className="interest-card">
              <h3>System Architecture</h3>
              <p>Interested in designing scalable and efficient system architectures</p>
            </div>
            <div className="interest-card">
              <h3>Modern Technologies</h3>
              <p>Always exploring new frameworks and tools to stay current with industry trends</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
