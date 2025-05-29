import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate <strong>IT student</strong> with a love for solving real-world problems through technology.
              With a deep interest in <strong>AI, web development, and software engineering</strong>, I've worked on impactful
              projects that range from <em>women's safety devices</em> to <em>AI-powered platforms</em>. I’m an enthusiastic learner,
              driven by curiosity and the desire to build things that matter.
            </p>
            <p>
              My journey so far has been decorated with multiple scholarships and mentorships, including the <strong>Google Women Engineers </strong>
              program. Beyond tech, I love <em>reading mystery novels</em> (I'm a huge <strong>Agatha Christie</strong> fan) and
              listening to <strong>BTS</strong>.
            </p>
            <p>
              I'm currently exploring opportunities where I can apply my skills, contribute meaningfully, and keep growing in the ever-evolving world
              of tech.
            </p>
          </div>
          <div className="about-image">
            <img src={process.env.PUBLIC_URL + "/assets/me.png"} alt="Your Portrait" />
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="fun-facts">
  <h3 className="fun-facts-title">Fun Facts About Me</h3>
  <ul className="facts-list">
    <li>I can debug a stubborn error faster with a playlist of BTS in the background — music and logic go hand-in-hand for me.</li>
    <li>I love blending tech and storytelling—I've built projects inspired by classic literature and real-world challenges.</li>
    <li>I'm the kind of person who reads research papers for fun and still finds time to get lost in a good mystery novel.</li>
  </ul>
</div>


{/* Quote Section */}
<div className="quote-section">
  <h3 className="quote-title">Words I Live By</h3>
  <blockquote className="main-quote">
    “Do not wait to strike till the iron is hot; but make it hot by striking.”<br />
    <span>— William Butler Yeats</span>
  </blockquote>

  <h3 className="quote-title">BTS Lyric That Speaks to Me</h3>
  <blockquote className="main-quote">
    “Love myself, love yourself, peace.”<br />
    <span>— BTS, <b>Answer: Love Myself</b></span>
  </blockquote>
</div>
</div>
    </section>
  );
};

export default AboutMe;
