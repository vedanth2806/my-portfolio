import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "AgriTrust",
      description: " A Digital Marketplace for Farmers and Buyers with blockchain transperancy. A scalable REST API built with Node.js and Express for an e-commerce platform with user authentication, product management, and order processing.",
      technologies: ["Node.js", "Express", "MySQL", "Flutter", "Google Cloud Platform"],
      githubLink: "https://github.com/vedanth2806/AgriTrust",
      // liveLink: "#"
    },

    {
      title: "Customer Purchase Portal",
      description: "Low-code application developed using Mendix platform for business process automation and workflow management. The application facilitates online shopping with multiple user roles and complete order management system from product browsing to delivery tracking.",
      technologies: ["Mendix", "Low-Code", "Business Logic"],
      githubLink: "https://github.com/vedanth2806/Customer-Purchase-Portal-MENDIX-",
      // liveLink: "#"
    },
    {
      title: "Online Bidding Application",
      description: "BidderBoy is a comprehensive web-based auction platform that enables users to buy and sell items through competitive bidding. The system facilitates secure transactions between buyers and sellers while providing real-time auction management capabilities.",
      technologies: ["Flask", "sqllite"],
      githubLink: "https://github.com/vedanth2806/Bidding-web-application-Flask",
      // liveLink: "#"
    },
    {
      title: "React Portfolio Website",
      description: "This responsive portfolio website showcasing my projects and skills, built with React and modern web technologies.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      githubLink: "#",
      // liveLink: "#"
    },
    {
      title: " Selenium-Based Automated Data Entry for Hospital Management",
      description: "Automated bulk appointment data entry into an online hospital management system using Selenium significantly reduced the time and effort required for data input while improving both the efficiency and accuracy of the data entry process",
      technologies: ["Selenium"],
      githubLink: "https://github.com/vedanth2806/Selenium",
    }
  ];

  return (
    <div className="projects">
      <div className="container">
        <h1>My <span class="title-gradient">Projects</span></h1>
        <p className="projects-intro">
          Here are some of the projects I've worked on, showcasing my skills in various technologies.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
