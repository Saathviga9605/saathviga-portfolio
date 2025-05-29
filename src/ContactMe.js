import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Let’s Connect!</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactMe;
