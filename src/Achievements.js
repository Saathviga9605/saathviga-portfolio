import React from 'react';
import './Achievements.css'; // Custom styles

const achievements = [
  {
    title: "Google Women Engineers Scholar (Top 200 of 55,000+)",
    subtitle: "Feb 2024 - Present",
    description: [
      "100% fee scholarship and ₹1,00,000 reward.",
      "Technical Skills: Clean Coding, Git, System Design, Python, DSA, Linux.",
      "Corporate Skills: Project Management, Teamwork, Communication."
    ]
  },
  {
    title: "Shubhra Kar Linux Foundation LiFT Scholarship",
    subtitle: "2024",
    description: [
      "Awarded for commitment to open-source and Linux systems."
    ]
  },
  {
    title: "SheFi Scholars Program",
    subtitle: "2024",
    description: [
      "Received 100% fee scholarship to join the blockchain-focused SheFi Scholars Program."
    ]
  },
  {
    title: "The Coding School’s Quantum Computing Scholar",
    subtitle: "2024",
    description: [
      "Selected with full scholarship for 2-semester course on Quantum Computing."
    ]
  },
  {
    title: "SheCodes Foundation Scholar",
    subtitle: "2024",
    description: [
      "Awarded full scholarship to participate in SheCodes development bootcamps."
    ]
  }
];

const Achievements = () => {
  return (
    <div id="achievements" className="achievements-section">

      <h2 className="section-title">🌟 Achievements</h2>
      <div className="timeline">
        {achievements.map((item, index) => (
          <div className="timeline-card" key={index}>
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <ul>
              {item.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
