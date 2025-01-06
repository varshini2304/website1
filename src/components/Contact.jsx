import React from 'react';
import './style.css';

const Contact = () => (
  <section id="contact">
    <div className="contact-section">
      <div className='left-con'>
        <h1>Contact Us</h1>
        <p>Have a question or want to get in touch? Send us a message and we will get back to you as soon as possible!</p>        <button type='submit'>SEND A MESSAGE</button>
      </div>
      <div className='right-con'>
        <h2>Contact Info</h2>
        <div className='info-block'>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <p>Our Office<br/>
            1234 Divi St. #1000, San Francisc, CA 93251</p>
        </div>
        <div className='info-block'>
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          <p>Open Office Hours<br />
            M-F: 8am-6pm<br/>
            S-S: 10am-4pm</p>
        </div>
        <div className='info-block'>
          <i className="fa fa-comments" aria-hidden="true"></i>
          <p>Get in Touch<br />
            divibuild.com<br/>
            (346) 426-2351</p>
        </div>
        <div className='social-icons'>
          <a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="https://twitter.com/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
    <div className="call-section">
      <p>Call: (541) 931-3526</p>
 <p>Email: support@nexether.com</p>
      <p>Address: 123 xyz street, district, state, country - 123456</p>
    </div>
  </section>
);

export default Contact;
