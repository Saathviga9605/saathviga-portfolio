import React from 'react';
import './MyJourney.css';

const MyJourney = () => {
  const journey = [
    {
      year: "2021",
      title: "Srimathi Sundaravalli Memorial School",
      details: "Grade 10 – Percentage: 98%",
    },
    {
      year: "2023",
      title: "Sunshine SSM Senior Secondary School",
      details: "Grade 12 – Percentage: 95.6%",
    },
    {
      year: "2023 - Present",
      title: "Sri Sivasubramaniya Nadar College of Engineering",
      details: "B.Tech in Information Technology – CGPA: 8.818",
      location: "Chennai, India",
    },
  ];

  return (
    <section className="journey-section" id="journey">
      <h2 className="journey-title">My Journey</h2>
      <div className="timeline">
        {journey.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-heading">{item.title}</h3>
              <p className="timeline-details">{item.details}</p>
              {item.location && <p className="timeline-location">{item.location}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyJourney;
