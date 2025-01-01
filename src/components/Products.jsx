import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import product1 from './product1.png';
import product2 from './product2.png';
import product3 from './product3.png';
import Popup from './Popup';
import './style.css';

const Products = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const defaultImages = [
    { src: product1, name: 'Decentralized Browser', description: 'The Decentralized Browser by NexEther...' },
    { src: product2, name: 'Social Media Application', description: 'Our Decentralized Social Media Application...' },
    { src: product3, name: 'Arogya Locker', description: 'Arogya Locker is an innovative product...' }
  ];

  const imagesToUse = images || defaultImages;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imagesToUse.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + imagesToUse.length) % imagesToUse.length);
  };

  const showPopup = (product) => {
    setSelectedProduct(product);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedProduct(null);
  };

  const getTransformStyled = (index) => {
    const position = (index - currentIndex + imagesToUse.length) % imagesToUse.length;
    if (position === 0) return 'translateX(0) scale(1.2)';
    if (position === 1 || position === -imagesToUse.length + 1) return 'translateX(120%) scale(1)';
    if (position === -1 || position === imagesToUse.length - 1) return 'translateX(-120%) scale(1)';
    return 'translateX(200%)';
  };

  const getOpacity = (index) => {
    const position = (index - currentIndex + imagesToUse.length) % imagesToUse.length;
    return position === 0 ? 1 : 0.6;
  };

  const getZIndex = (index) => {
    const position = (index - currentIndex + imagesToUse.length) % imagesToUse.length;
    return position === 0 ? 1 : 0;
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="products">
      <div className="product-section">
        <main>
          <div className="product-container">
            <h1>OUR PRODUCTS</h1>
            <div className="align">
              <div className="image-slider">
                <button className="slider-btn left-btn" onClick={prevImage}>&#10094;</button>
                <div className="slider-images">
                  {imagesToUse.map((product, index) => (
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
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </div>
                    </div>
                  ))}
                </div>
                <button className="slider-btn right-btn" onClick={nextImage}>&#10095;</button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {popupVisible && <Popup product={selectedProduct} onClose={closePopup} />}
    </section>
  );
};

export default Products;
