import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <section className="about-intro">
          <h1>
            About <span class="title-gradient">Me</span>
          </h1>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm Vedanth R Kumar, a passionate Software Engineer with a
                strong focus on full stack development and creating scalable
                solutions. With experience as intern at Titan Company Ltd and
                expertise in modern technologies, I bring both technical skills
                and practical industry knowledge to every project.
              </p>
              <p>
                My journey in software development has led me through various
                technologies including Node.js, Flutter, React.js, MySQL and
                Mendix, allowing me to build versatile applications that solve
                real-world problems. I'm particularly interested in backend
                architecture and system design.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-avatar-large">VRK</div>
            </div>
          </div>
        </section>

        <section className="experience">
          <h2>
            Professional <span className="title-gradient">Experience</span>
          </h2>
          <div className="experience-item">
            <div className="experience-header">
              <h3>Software Engineer</h3>
              <div className="company-details">
                <span className="company">
                  Agilophiles Technology private Ltd
                </span>
                <span className="experience-date">
                  Dec 2025 - Present
                </span>
              </div>
            </div>
            <ul className="experience-bullets">
              <li>
                Implemented secure file encryption/decryption (AES) for sensitive
                documents and improving data protection compliance.
              </li>
              <li>
                Designed and implemented backend services in Go, including GRPC APIs integrated
                with database PostgreSQL and drift, used by the Flutter app.
              </li>
              <li>
                Participated in code reviews, debugging and performance
                optimization to ensure stability and maintainability of the
                codebase.
              </li>
              <li>
                Presented bi-weekly product demos to clients and
                participated in weekly Agile standups and planning meetings,
                translating requirements into technical tasks and ensuring timely
                feature delivery.
              </li>
            </ul>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3>Web Developer Intern</h3>
              <div className="company-details">
                <span className="company">Titan Company Ltd</span>
                <span className="experience-date">
                  Nov 2023 - Dec 2023
                </span>
              </div>
            </div>
            <ul className="experience-bullets">
              <li>
                Gained hands-on experience in web development, working on
                enterprise-level applications and contributing to various
                development projects using Mendix technologies and best practices.
              </li>
            </ul>
          </div>
        </section>

        <section className="interests">
          <h2>
            Technical <span class="title-gradient">Focus</span>
          </h2>
          <div className="interests-grid">
            <div className="interest-card">
              <h3>Full Stack Development</h3>
              <p>
                Interested in designing scalable and efficient Full Stack
                solutions.
              </p>
            </div>

            <div className="interest-card">
              <h3>Backend Development</h3>
              <p>
                Passionate about creating robust server-side applications and
                APIs
              </p>
            </div>
            <div className="interest-card">
              <h3>Modern Technologies</h3>
              <p>
                Always exploring new frameworks and tools to stay current with
                industry trends
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
