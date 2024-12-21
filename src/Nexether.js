import React, { useEffect, useState } from 'react';
import './style.css'; // Import your CSS file
import logo from './logo.png'; // Adjust the path as necessary
import bgImage from './bg.jpeg'; // Adjust the path as necessary
import product1 from './product1.png'; // Adjust the path as necessary
import product2 from './product2.png'; // Adjust the path as necessary
import product3 from './product3.png'; // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { faLinkedin, faInstagram, faTwitter, faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const NexEther = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false); // State to toggle login modal
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between sign up and sign in
  const images = [product1, product2, product3]; // Add your product images here

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (event) => {
    event.preventDefault();
    setShowLoginModal(true); // Show login modal
  };

  const handleCloseModal = () => {
    setShowLoginModal(false); // Close login modal
    setIsSignUp(false); // Reset to sign in
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp); // Toggle between sign up and sign in
  };

  return (
    <div>
      {/* Header Section */}
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="NexEther Logo" className="logo-img click" />
          <div className="navcontainer">
            <nav className="menu">
              <a href="#about" className="click">About Us</a>
              <a href="#products" className="click">Our Products</a>
              <a href="#contact" className="click">Contact Us</a>
              <a href="#login" className="click" onClick={handleNavClick}>Login</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="home-section" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-section">
          <div className="hero-content">
            <h1>WELCOME TO <br /> <span>NEXETHER</span></h1>
            <h2>Empowering the Future of Blockchain</h2>
            <p>
              At NexEther, innovation meets decentralization. We are dedicated to creating blockchain solutions that push boundaries, empower users, and deliver transparency.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="about-section">
          <main>
            <div className="about-container">
              <div className="aboutus">
                <h1>About Us</h1>
                <p>
                  NexEther is a blockchain startup focused on creating decentralized solutions for modern businesses and individuals. We are committed to building systems that leverage blockchain technology to provide security, efficiency, and transparency in an ever-evolving digital world.
                </p>
              </div>
              <div className="down">
                <div className="who">
                  <h1>Who Are We?</h1>
                  <p>
                    NexEther is a Mockchain startup dedicated to building decentralized solutions. Our mission is to leverage blockchain technology to deliver secure, efficient, and transparent systems, empowering users with greater control over their data and processes.
                  </p>
                </div>
                <div className="choose">
                  <h1>Why Choose Us?</h1>
                  <p>
                    At NexEther, we believe that blockchain technology represents the future of how industries operate. By removing intermediaries and offering trustless systems, we aim to empower organizations with more secure, streamlined, and scalable platforms.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* Products Section */}
      <section id="products">
        <div className="product-section" style={{ backgroundImage: `url(${bgImage})` }}>
          <main>
            <div className="product-container">
              <h1>OUR PRODUCTS</h1>
              <div className="align">
                <div className="image-slider">
                  <button className="slider-btn left-btn" onClick={prevImage}>&#10094;</button>
                  <div className="slider-images">
                    {images.map((image, index) => (
                      <div
                        className="image-container"
                        key={`image-${index}`}
                        style={{ opacity: currentIndex === index ? 1 : 0.6 }}
                      >
                        <img src={image} alt={`Product ${index + 1}`} />
                        <div className="layer">
                          <h2>{`Product ${index + 1}`}</h2>
                          <a href={`product${index + 1}.html`} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="slider-btn right-btn" onClick={nextImage}>&#10095;</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <section id="contact">
        <div className="contact-section" style={{ backgroundImage: `url(${bgImage})` }}>
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

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&#x2715;</span>
            <div className="container" id="container">
              <div className={`form-container sign-in ${!isSignUp ? 'active' : ''}`}>
                <form onSubmit={(e) => { e.preventDefault(); alert('Logged In!'); }}>
                  <h1>Sign In</h1>
                  <div className="social-icons">
                    <a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  </div>
                  <span>or use your email password</span>
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <a className="forgot-link" href="#">Forget Your Password?</a>
                  <button type="submit">Sign In</button>
                </form>
              </div>
              <div className={`form-container sign-up ${isSignUp ? 'active' : ''}`}>
                <form onSubmit={(e) => { e.preventDefault(); alert('Signed Up!'); }}>
                  <h1>Sign Up</h1>
                  <input type="text" placeholder="Username" required />
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit">Sign Up</button>
                </form>
              </div>
              <div className="toggle-container">
                <div className="toggle">
                  <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of the site features</p>
                    <button className="hidden" id="login" onClick={toggleForm}>Sign In</button>
                  </div>
                  <div className="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of the site features</p>
                    <button className="hidden" id="register" onClick={toggleForm}>Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NexEther;
