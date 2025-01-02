import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Popup from "./components/ProductPopup";
import Loading from "./components/Loading"; // Import Loading component
import product1 from "./product1.png";
import product2 from "./product2.png";
import product3 from "./product3.png";
import "./style.css";

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading page visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Show loading page for 5 seconds (increased from 3 seconds)
    return () => clearTimeout(timer);
  }, []);

  const toggleForm = () => setIsSignUp((prev) => !prev);

  const handleCloseModal = () => {
    setShowLoginModal(false);
    setIsSignUp(false);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedProduct(null);
  };

  const products = [
    { src: product1, name: "Decentralized Browser", description: "A secure, decentralized browser with enhanced privacy." },
    { src: product2, name: "Social Media Application", description: "A blockchain-based social media platform for secure sharing." },
    { src: product3, name: "Arogya Locker", description: "A health data storage solution leveraging blockchain." },
  ];

  const showPopup = (product) => {
    setSelectedProduct(product);
    setPopupVisible(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Header onLoginClick={() => setShowLoginModal(true)} />
      <Home />
      <About />
      <Products images={products} onProductClick={showPopup} />
      <Contact />
      <Footer />
      {showLoginModal && (
        <LoginModal
          showLoginModal={showLoginModal}
          handleCloseModal={handleCloseModal}
          isSignUp={isSignUp}
          toggleForm={toggleForm}
        />
      )}
      {popupVisible && selectedProduct && (
        <Popup product={selectedProduct} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default App;