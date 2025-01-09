import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faLinkedin, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import "../styles/style.css";

const Contact = () => {
    const [showCard, setShowCard] = useState(false);

    const toggleCard = () => {
        setShowCard(!showCard);
    };

    return (
        <section id="contact">
            <div className="contact-section">
                <div className='left-con'>
                    <h1>Contact Us</h1>
                    <p>Have a question or want to get in touch? Send us a message and we will get back to you as soon as possible!</p>
                    <button type='button' className="primary-btn" onClick={toggleCard}>
                        {showCard ? 'Close Form' : 'Send a Message'}
                    </button>

                    {showCard && (
                        <div className="hidden-card visible">
                            <form onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
                                <input type="text" placeholder="Name" required />
                                <input type="email" placeholder="Email" required />
                                <textarea name="message" placeholder="Your message" required></textarea>
                                <button type="submit" className="submit-btn">Send Message</button>
                            </form>
                        </div>
                    )}
                </div>

                <div className='right-con'>
                    <h2>Contact Info</h2>
                    <div className='info-block'>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <p>1234 Divi St. #1000, San Francisco, CA 93251</p>
                    </div>
                    <div className='info-block'>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <p>Open Office Hours: M-F: 8am-6pm | S-S: 10am-4pm</p>
                    </div>
                    <div className='info-block'>
                        <i className="fa fa-comments" aria-hidden="true"></i>
                        <p>divibuild.com | (346) 426-2351</p>
                    </div>
                    <div className='social-icons'>
                        <a href="https://www.facebook.com/"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                        <a href="https://twitter.com/"><i ><FontAwesomeIcon icon={faFacebookF} /></i></a>
                        <a href="https://www.linkedin.com/"><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
