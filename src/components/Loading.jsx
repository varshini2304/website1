import React, { useEffect, useRef } from 'react';
import './style.css'; // Ensure you have the CSS in the same directory

const Loading = () => {
  const coinRef = useRef(null);
  const brandNameRef = useRef(null);

  useEffect(() => {
    const coin = coinRef.current;
    const brandName = brandNameRef.current;

    const handleAnimationEnd = () => {
      if (brandName) {
        brandName.style.opacity = 1;
      }
    };

    if (coin) {
      coin.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (coin) {
        coin.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, []);

  return (
    <section id="loading" className="loading-section">
      <div className="loading-container">
        <div className="hole"></div>
        <div className="coinb" ref={coinRef}></div>
        <div className="brand-name" ref={brandNameRef}>NexEther</div>
        <div className="logob"></div>
        <div className="title">
          <h1 className="slide-text">NexEther</h1>
        </div>
      </div>
    </section>
  );
};

export default Loading;