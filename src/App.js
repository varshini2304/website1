import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';
import LoginModal from './components/LoginModal';
import product1 from './product1.png';
import product2 from './product2.png';
import product3 from './product3.png';

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false); // Manage modal visibility
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign In and Sign Up forms

  // Toggle between Sign In and Sign Up forms
  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  // Close login modal
  const handleCloseModal = () => {
    setShowLoginModal(false);
    setIsSignUp(false); // Reset to sign in
  };

  // Array of product details
  const products = [
    { src: product1, name: 'Decentralized Browser', description: 'A secure, decentralized browser with enhanced privacy.' },
    { src: product2, name: 'Social Media Application', description: 'A blockchain-based social media platform for secure sharing.' },
    { src: product3, name: 'Arogya Locker', description: 'A health data storage solution leveraging blockchain.' },
  ];

  return (
    <div>
      {/* Header Component */}
      <Header onLoginClick={() => setShowLoginModal(true)} />

      {/* Page Sections */}
      <Home />
      <About />
      <Products images={products} />
      <Contact />
      <Footer />

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal
          showLoginModal={showLoginModal}
          handleCloseModal={handleCloseModal} // Pass the close handler
          isSignUp={isSignUp}
          toggleForm={toggleForm}
        />
      )}
    </div>
  );
};

export default App;
