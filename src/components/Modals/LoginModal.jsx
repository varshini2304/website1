import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "../../styles/login.css";
import { auth } from '../../firebase';

const LoginModal = ({ showLoginModal, handleCloseModal, toggleForm, isSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  if (!showLoginModal) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      await auth.currentUser.updateProfile({
        displayName: username,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>&#x2715;</span>
        <div className={`container ${isSignUp ? 'active' : ''}`} id="container">
          {/* Sign In Form */}
          {!isSignUp && (
            <div className="form-container sign-in active">
              <form onSubmit={handleLogin}>
                <h1>Sign In</h1>
                <div className="social-icons">
                  <a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                  <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                  <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
                <span>or use your email password</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <a className="forgot-link" href="#">Forget Your Password?</a>
                <button type="submit">Sign In</button>
              </form>
            </div>
          )}

          {/* Sign Up Form */}
          <div className={`form-container sign-up ${isSignUp ? 'active' : ''}`}>
            <form onSubmit={handleSignUp}>
              <h1>Sign Up</h1>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
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