import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../../styles/style.css';

const LoginModal = ({ showLoginModal, handleCloseModal, toggleForm, isSignUp }) => {
  if (!showLoginModal) return null;


  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>&#x2715;</span>
        <div className={`container ${isSignUp ? 'active' : ''}`} id="container">
          {/* Sign In Form */}
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

          {/* Sign Up Form */}
          <div className={`form-container sign-up ${isSignUp ? 'active' : ''}`}>
            <form onSubmit={(e) => { e.preventDefault(); alert('Signed Up!'); }}>
              <h1>Sign Up</h1>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign Up</button>
            </form>
          </div>

          {/* Toggle Container */}
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
  );
};

export default LoginModal;
