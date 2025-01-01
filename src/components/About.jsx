import React from 'react';
import './style.css';

const About = () => (
  <section id="about">
    <div
      className="about-section"
      style={{
        backgroundImage: "url('src/components/parallax.jpg')", // Replace with your image path
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="about-container">
        <div className="card values">
          <div className="card-inner">
            <div className="card-front">
              <h1>CORE VALUES</h1>
            </div>
            <div className="card-back">
              <p>
                <h1>CORE VALUES</h1>
                <br />
                At NexEther, innovation drives us, with every team member
                contributing to creative solutions. Trust and transparency guide
                our work, while collaboration fuels our success. We’re committed
                to excellence, always striving for the highest standards.
              </p>
            </div>
          </div>
        </div>
        <div className="card mission">
          <div className="card-inner">
            <div className="card-front">
              <h1>OUR MISSION</h1>
            </div>
            <div className="card-back">
              <p>
                <h1>OUR MISSION</h1>
                <br />
                Our mission is to empower businesses and individuals with secure,
                transparent, and decentralized solutions, driving innovation and
                control in the digital world.
              </p>
            </div>
          </div>
        </div>
        <div className="card vision">
          <div className="card-inner">
            <div className="card-front">
              <h1>OUR VISION</h1>
            </div>
            <div className="card-back">
              <p>
                <h1>OUR VISION</h1>
                <br />
                Our vision is to create a decentralized world where businesses
                and individuals have full control, with secure, transparent, and
                innovative solutions that transform industries.
              </p>
            </div>
          </div>
        </div>
        <div className="card aboutus">
          <div className="card-inner">
            <div className="card-front">
              <h1>ABOUT US</h1>
            </div>
            <div className="card-back">
              <p>
                <h1>ABOUT US</h1>
                <br />
                At NexEther, we’re revolutionizing industries with
                blockchain—bringing security, transparency, and control to
                finance, supply chains, and digital identities. No middlemen,
                just scalable solutions for real-world problems. Let’s shape a
                smarter, decentralized future together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
