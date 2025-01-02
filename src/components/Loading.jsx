import React, { useEffect, useRef } from "react";
import "./style.css"; // Ensure this file contains all your styles

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
      coin.addEventListener("animationend", handleAnimationEnd);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (coin) {
        coin.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);

  return (
    <section id="loading" className="loading-section">
      <div className="loading-container">
        <div className="hole"></div>
        <div className="coinl" ref={coinRef}></div>
        <div className="brand-name" ref={brandNameRef}></div>
      </div>
      <div className="loadlogo"></div>
      <div className="title">
        <b className="slide-text"><h1>NexEther</h1></b>
      </div>
    </section>
  );
};

export default Loading;