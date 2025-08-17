import React from "react";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="title-gradient">Vedanth R Kumar</span>
            </h1>
            <h2 className="hero-subtitle">
              Software Engineer | Full Stack Developer
            </h2>
            <p className="hero-description">
              Passionate about creating scalable Full Stack solutions and
              innovative applications. Currently exploring modern web
              technologies and building impactful projects.
            </p>
            <div className="hero-buttons">
              <a href="/contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="/projects" className="btn btn-secondary">
                View My Work
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="placeholder-avatar">VRK</div>
          </div>
        </div>
      </section>

      {/* <section className="quick-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>2+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>5+</h3>
              <p>Technologies Mastered</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
