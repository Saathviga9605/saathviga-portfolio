import React from 'react';
import './Projects.css';

const projects = [

    {
      title: "Factshare",
      image: process.env.PUBLIC_URL + "assets/factshare.png",
      brief: "AI-powered fact-checker using Gemini & Google APIs with 92% accuracy and live news chatbot.",
      tech: "React, Flask, MongoDB, Gemini API, Fact Check API",
      date: "Feb - Mar 2025"
    },

    {
      title: "HealthConnect",
      image: process.env.PUBLIC_URL + "assets/healthconnect.png",
      brief: "Hospital system for managing appointments, history & billing digitally.",
      tech: "Python, MySQL",
      date: "Sep - Nov 2024"
    },
    {
      title: "Event Management System",
      image: process.env.PUBLIC_URL + "assets/event-management.png",
      brief: "Organize and manage events with admin/organizer roles & analytics.",
      tech: "Python, Flask, React, Firebase",
      date: "Feb 2025 - April 2025"
    },
    {
      title: "NetGenius",
      image: process.env.PUBLIC_URL + "assets/netgenius.png",
      brief: "NLP chatbot to automate routine network tasks and generate reports.",
      tech: "Python, Streamlit, NLP",
      date: "Jan - Feb 2025"
    },
    {
      title: "Agrofriendly",
      image: process.env.PUBLIC_URL + "assets/agrofriendly.png",
      brief: "ML-based farming system for crop, price & yield predictions.",
      tech: "Python, Streamlit, HTML, CSS",
      date: "Apr - May 2024"
    },
    {
      title: "Parcel Service System",
      image: process.env.PUBLIC_URL + "assets/parcel.png",
      brief: "Parcel tracker with real-time updates & WhatsApp notifications.",
      tech: "Python, JSON",
      date: "Feb - Jun 2024"
    },
    {
      title: "Astro Escape",
      image: process.env.PUBLIC_URL + "assets/astro.png",
      brief: "A cosmic adventure game with 3 mini-games and 200+ downloads.",
      tech: "C#, Unity",
      date: "Jul 2024"
    }
  ];
  

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} className="project-image" />
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.brief}</p>
              <p className="tech">{proj.tech}</p>
              <p className="date">{proj.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
