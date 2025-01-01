import React from 'react';
import './style.css';

const Contact = () => (
  <section id="contact">
  <div className="contact-section">
    <main>
      <div className="contact-container">
        <h1>CONTACT US</h1>
        <p><span>We are here to help you with anything!</span></p>
        <div className="arrange">
          <div className="left">
            <form onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea name="message" placeholder="Your message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="right">
            <div className="right-container">
              <p>+91 8861644090 <br /> Feel free to call us! Our working hours are: Mon-Sat 9am-5pm</p>
              <p>contactxyz@nexether.com <br /> Have any questions or concerns? Contact our Support team!</p>
              <p>123 xyz street, district, state, country - 123456 <br /> Headquarters</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</section>

);

export default Contact;
