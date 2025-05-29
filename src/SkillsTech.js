import React, { useState } from 'react';
import './SkillsTech.css';

const skillsData = {
  "CS Fundamentals": ["Data Structures", "Algorithms", "Machine Learning", "Web Development"],
  "Programming Languages & Technologies": ["Python", "JavaScript", "C++", "Java", "SQL", "HTML", "CSS", "React"],
  "Tools & Platforms": ["Docker", "Kubernetes", "Git", "MySQL", "MongoDB", "Figma", "Linux", "NumPy", "Pandas", "Bootstrap", "Version Control Systems"],
  "Soft Skills": ["Leadership", "Public Speaking", "Creativity", "Teamwork", "Analytical Thinking"]
};

const SkillsTech = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills & Tech Stack</h2>
      <div className="bubbles-container">
        {Object.keys(skillsData).map((category, index) => (
          <div key={index} className="main-bubble" onClick={() => toggleCategory(category)}>
            {category}
            {activeCategory === category && (
              <div className="sub-bubbles">
                {skillsData[category].map((skill, i) => (
                  <div key={i} className="sub-bubble">{skill}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsTech;
