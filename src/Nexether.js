import React, { useEffect, useState } from 'react';
import './style.css'; // Import your CSS file
import product1 from './product1.png';
import product2 from './product2.png';
import product3 from './product3.png';
import logo from './logo.png'; // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { faLinkedin, faInstagram, faTwitter, faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const NexEther = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false); // State to toggle login modal
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between sign up and sign in
  const [popupVisible, setPopupVisible] = useState(false);
  const images = [
    { src: product1, name: 'Decentralized Browser', description: 'The Decentralized Browser by NexEther redefines internet browsing with enhanced privacy, security, and freedom. Built on blockchain technology, this innovative browser eliminates the need for central servers, ensuring that user data remains private and untraceable. It provides a seamless browsing experience while supporting peer-to-peer networks, enabling censorship-resistant access to information.' },
    { src: product2, name: 'Social Media Application', description: 'Our Decentralized Social Media Application redefines online interactions by offering a platform that prioritizes user autonomy  data privacy, and transparency. Built on blockchain technology, this application ensures that users retain full ownership of their content and data, eliminating reliance on centralized servers prone to breaches and censorship. By integrating peer-to-peer networking, it promotes freedom of expression and a fair content distribution model' },
    { src: product3, name: 'Arogya Locker', description: 'Arogya Locker is an innovative product designed to revolutionize healthcare data management  It serves as a secure, decentralized platform for storing and sharing medical records. Leveraging blockchain technology, it ensures data integrity, privacy, and transparency, enabling users to access and control their health information seamlessly. Arogya Locker empowers individuals while fostering a more efficient and connected healthcare ecosystem.' },
  ];
  const imagesd = [product1, product2, product3];
  const [selectedProduct, setSelectedProduct] = useState(null);

  const nextImaged = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesd.length);
  };

  const prevImaged = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesd.length) % imagesd.length);
  };

  const prevPopupImage = () => {
    if (!selectedProduct) return;
    const currentIndex = images.findIndex((product) => product.name === selectedProduct.name);
    const prevIndex = (currentIndex - 1 + images.length) % images.length; // Handle wrap-around
    setSelectedProduct(images[prevIndex]);
  };

  const nextPopupImage = () => {
    if (!selectedProduct) return;
    const currentIndex = images.findIndex((product) => product.name === selectedProduct.name);
    const nextIndex = (currentIndex + 1) % images.length; // Handle wrap-around
    setSelectedProduct(images[nextIndex]);
  };


  const getTransformStyled = (index) => {
    const position = (index - currentIndex + imagesd.length) % imagesd.length;
    if (position === 0) return 'translateX(0) scale(1.2)';
    if (position === 1 || position === -imagesd.length + 1) return 'translateX(120%) scale(1)';
    if (position === -1 || position === imagesd.length - 1) return 'translateX(-120%) scale(1)';
    return 'translateX(200%)';
  };

  const getOpacity = (index) => {
    const position = (index - currentIndex + images.length) % images.length;
    return position === 0 ? 1 : 0.6;
  };

  const getZIndex = (index) => {
    const position = (index - currentIndex + images.length) % images.length;
    return position === 0 ? 1 : 0;
  };

  const showPopup = (product) => {
    setSelectedProduct(product);
    setPopupVisible(true);
  };

    const closePopup = () => {
      setPopupVisible(false);
      setSelectedProduct(null);
    };

  useEffect(() => {
    const interval = setInterval(nextImaged, 3500);
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
      <section id="home" className="home-section">
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
              <div className="card values">
                <div className="card-inner">
                  <div className="card-front">
                    <h1>CORE VALUES</h1>
                  </div>
                  <div className="card-back">
                    <p>
                      At NexEther, innovation drives us, with every team member contributing to creative solutions. Trust and transparency guide our work, while collaboration fuels our success. We’re committed to excellence, always striving for the highest standards.
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
                      Our mission is to empower businesses and individuals with secure, transparent, and decentralized solutions, driving innovation and control in the digital world.
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
                      Our vision is to create a decentralized world where businesses and individuals have full control, with secure, transparent, and innovative solutions that transform industries.
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
                      At NexEther, we’re revolutionizing industries with blockchain—bringing security, transparency, and control to finance, supply chains, and digital identities. No middlemen, just scalable solutions for real-world problems. Let’s shape a smarter, decentralized future together!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
{/* Products Section */}
<section id="products">
  <div className="product-section">
    <main>
      <div className="product-container">
        <h1>OUR PRODUCTS</h1>
        <div className="align">
          <div className="image-slider">
            <button className="slider-btn left-btn" onClick={prevImaged}>&#10094;</button>
            <div className="slider-images">
              {images.map((product, index) => (
                <div
                  className="image-container"
                  key={`image-${index}`}
                  style={{
                    transform: getTransformStyled(index),
                    opacity: getOpacity(index),
                    zIndex: getZIndex(index),
                  }}
                  onClick={() => showPopup(product)} // Open popup with product details
                >
                  <img src={product.src} alt={`Product ${index + 1}`} />
                  <div className="layer">
                    <h2>{product.name}</h2>
                    <i onClick={() => showPopup(product)}>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </i>
                  </div>
                </div>
              ))}
            </div>
            <button className="slider-btn right-btn" onClick={nextImaged}>&#10095;</button>
          </div>
        </div>
      </div>
    </main>
  </div>

  {popupVisible && (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closePopup}>&#10005;</button>
        <button className="slider-btn left-btn" onClick={prevPopupImage}>&#10094;</button>
        <div className='border-line'> </div>
        <div className="popup-image-content">
          <img src={selectedProduct.src} alt={selectedProduct.name} />
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
        </div>
        <button className="slider-btn right-btn" onClick={nextPopupImage}>&#10095;</button>
      </div>
    </div>
  )}
</section>

      {/* Contact Section */}
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

      <footer>
  <main>
    <div className="end-container">
      <div className="sort">
        <div className="first">
          <img src={logo} alt="NexEther Logo" href="#home" className="logo-img click" />
        </div>
        <div className="second">
          <h1>Join our mailing list</h1>
          <p>Be the first to know about exclusive offers, and more!</p>
          <form action="subscribe">
            <input type="email" placeholder="Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="third">
          <h1>Our Products</h1>
          <a href="product1.html" target="_blank" className="product-link">Arogya Locker</a>
          <a href="product2.html" target="_blank" className="product-link">Decentralized Browser</a>
          <a href="product3.html" target="_blank" className="product-link">Social Media</a>
        </div>
        <div className="fourth">
        <h1>Follow Us</h1>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </div>
  </main>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
          <span className="close" onClick={handleCloseModal}>&#x2715;</span>
            <div className={`container ${isSignUp ? 'active' : ''}`} id="container">
            {!isSignUp && (
                <div className="form-container sign-in active">
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
              )}
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

