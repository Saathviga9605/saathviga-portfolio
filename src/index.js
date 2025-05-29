import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home'; // Importing the Home component
import './Home.css'; // Importing the Home CSS styles
import MyJourney from './MyJourney'; // Importing the MyJourney component
import './MyJourney.css'; // Imxporting the MyJourney CSS styles
import SkillsTech from './SkillsTech';
import './SkillsTech.css'; // Importing the SkillsTech CSS styles
import Projects from './Projects'; // Importing the Projects component
import './Projects.css'; // Importing the Projects CSS styles
import Achievements from './Achievements'; // Importing the Achievements component
import './Achievements.css'; // Importing the Achievements CSS styles
import ContactMe from './ContactMe'; // Importing the ContactMe component
import './ContactMe.css'; // Importing the ContactMe CSS styles
import AboutMe from './AboutMe';
import './AboutMe.css'; // Importing the AboutMe CSS styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <AboutMe />
    <MyJourney />
    <SkillsTech />
    <Projects />
    <Achievements />
    <ContactMe />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
