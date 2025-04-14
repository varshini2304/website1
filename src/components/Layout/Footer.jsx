import React, { useState } from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("https://your-api-endpoint.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscribed successfully!");
        setEmail(""); // Clear input field after success
      } else {
        setMessage("Subscription failed. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <footer>
      <div className="end-container">
        <div className="sort">
          <div className="first">
            <img src={logo} alt="NexEther Logo" className="logo-img click" />
          </div>
          <div className="second">
            <h1>Join our mailing list</h1>
            <p>Be the first to know about exclusive offers, and more!</p>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            {message && <p className="message">{message}</p>}
          </div>
          <div className="third">
            <h1>Our Products</h1>
            <a href="product1.html" target="_blank" className="product-link">
              Arogya Locker
            </a>
            <a href="product2.html" target="_blank" className="product-link">
              Decentralized Browser
            </a>
            <a href="product3.html" target="_blank" className="product-link">
              Social Media
            </a>
          </div>
          <div className="fourth">
            <h1>Follow Us</h1>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
