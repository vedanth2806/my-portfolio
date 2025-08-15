import React from 'react';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "Database Design", level: 75 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      title: "Low-Code/No-Code",
      skills: [
        { name: "Mendix", level: 80 },
        { name: "Platform Development", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 }
      ]
    }
  ];

  return (
    <div className="skills">
      <div className="container">
        <h1>My <span class="title-gradient">Skills </span> </h1>
        <p className="skills-intro">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
