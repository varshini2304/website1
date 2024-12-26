import React, { useState } from "react";
import "./style.css"; // Adjust the path to your CSS file

const SignUpForm = () => (
  <div className="form-container sign-up">
    <form>
      <h1>Create Account</h1>
      <div className="social-icons">
        <a href="#" className="icon">
          <i className="fa-brands fa-google-plus-g"></i>
        </a>
        <a href="#" className="icon">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" className="icon">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="#" className="icon">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <span>or use your email for registration</span>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <div className="checkbox">
        <input type="checkbox" id="terms" />
        <a href="#" style={{ textDecoration: "underline" }}>
          I agree to the Terms & Conditions
        </a>
      </div>
      <button>Sign Up</button>
    </form>
  </div>
);

const SignInForm = () => (
  <div className="form-container sign-in">
    <form>
      <h1>Sign In</h1>
      <div className="social-icons">
        <a href="#" className="icon">
          <i className="fa-brands fa-google-plus-g"></i>
        </a>
        <a href="#" className="icon">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" className="icon">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="#" className="icon">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <span>or use your email password</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#" style={{ textDecoration: "underline" }}>
        Forget Your Password?
      </a>
      <button>Sign In</button>
    </form>
  </div>
);

const ToggleContainer = ({ handleToggle, isSignUp }) => (
  <div className="toggle-container">
    <div className="toggle">
      <div className="toggle-panel toggle-left">
        <h1>Welcome Back!</h1>
        <p>Enter your personal details to use all of the site features ^^</p>
        <button
          className="hidden"
          id="login"
          onClick={() => handleToggle(false)}
        >
          Sign In
        </button>
      </div>
      <div className="toggle-panel toggle-right">
        <h1>Hello, My Friend!</h1>
        <p>Register with your personal details to use all of the site features</p>
        <button
          className="hidden"
          id="register"
          onClick={() => handleToggle(true)}
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
);

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = (signUpState) => {
    setIsSignUp(signUpState);
  };

  return (
    <div className="container" id="container">
      {isSignUp ? <SignUpForm /> : <SignInForm />}
      <ToggleContainer handleToggle={handleToggle} isSignUp={isSignUp} />
    </div>
  );
};

export default App;
