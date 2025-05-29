import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

const Home = () => {
  const fullText = `Hi! I'm Saathviga, an undergrad IT Student from India!\nWould love to connect with you! `;
  const [displayText, setDisplayText] = useState('');
  const indexRef = useRef(0);
  const typingIntervalRef = useRef(null);

  useEffect(() => {
    typingIntervalRef.current = setInterval(() => {
      const currentChar = fullText[indexRef.current];
      if (currentChar !== undefined) {
        setDisplayText((prev) => prev + currentChar);
        indexRef.current += 1;
      } else {
        clearInterval(typingIntervalRef.current);
      }
    }, 60);
    return () => clearInterval(typingIntervalRef.current);
  }, []);
  

  useEffect(() => {
    const spotlight = document.getElementById('spotlight');

    const handleMouseMove = (e) => {
      if (spotlight) {
        spotlight.style.left = `${e.pageX}px`;
        spotlight.style.top = `${e.pageY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="home-container">
      <div id="spotlight" />
      <nav className="navbar">
        <ul>
        <li><a href="#about">About</a></li>
          <li><a href="#journey">My Journey</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
      <div className="hero">
        <pre className="typing-text">{displayText}</pre>
      </div>
    </div>
  );
};

export default Home;
