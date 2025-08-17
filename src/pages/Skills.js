import React from "react";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming language",
      skills: [
        { name: "Python", level: 20 },
        { name: "Java", level: 60 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Express.js", level: 20 },
        { name: "RESTful APIs", level: 20 },
        { name: "Flask", level: 20 },
        { name: "MySQL", level: 60 },
        { name: "Node.js", level: 60 },
        { name: "Database Design", level: 60 },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 30 },
        { name: "Flutter", level: 30 },
        { name: "JavaScript", level: 60 },
        { name: "HTML/CSS", level: 60 },
      ],
    },
    {
      title: "Low-Code/No-Code",
      skills: [{ name: "Mendix", level: 60 }],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Docker", level: 20 },
        { name: "Git", level: 60 },
      ],
    },
  ];

  return (
    <div className="skills">
      <div className="container">
        <h1>
          My <span class="title-gradient">Skills </span>{" "}
        </h1>
        <p className="skills-intro">
          Here are the technologies and tools I work with to bring ideas to
          life.
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
