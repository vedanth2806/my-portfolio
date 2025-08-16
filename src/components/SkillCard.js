// import React from 'react';

// const SkillCard = ({ category }) => {
//   return (
//     <div className="skill-card">
//       <h3>{category.title}</h3>
//       <div className="skills-list">
//         {category.skills.map((skill, index) => (
//           <div key={index} className="skill-item">
//             <div className="skill-header">
//               <span className="skill-name">{skill.name}</span>
//               <span className="skill-percentage">{skill.level}%</span>
//             </div>
//             <div className="skill-bar">
//               <div 
//                 className="skill-progress" 
//                 style={{ width: `${skill.level}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillCard;
// SkillCard.jsx
import React from 'react';

/**
 * Converts a numeric level (0-100) to one of three strings.
 * <40  → Beginner
 * 40-69 → Intermediate
 * ≥70  → Advanced
 */
const levelLabel = (level) => {
  if (typeof level === 'string') return level; // already a label
  if (level < 40) return 'Beginner';
  if (level < 70) return 'Intermediate';
  return 'Advanced';
};

const levelClass = (label) => label.toLowerCase(); // beginner | intermediate | advanced

const SkillCard = ({ category }) => (
  <div className="skill-card">
    <h3>{category.title}</h3>

    <div className="skills-list">
      {category.skills.map((skill, idx) => {
        const label = levelLabel(skill.level);
        return (
          <div key={idx} className="skill-item">
            <span className="skill-name">{skill.name}</span>

            <span className={`skill-pill ${levelClass(label)}`}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

export default SkillCard;
