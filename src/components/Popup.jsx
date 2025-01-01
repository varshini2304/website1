import React, { useEffect, useState } from 'react';
import './style.css';
import product1 from './product1.png';
import product2 from './product2.png';
import product3 from './product3.png';

const images = [
  { src: product1, name: 'Decentralized Browser', description: 'The Decentralized Browser by NexEther redefines internet browsing with enhanced privacy, security, and freedom. Built on blockchain technology, this innovative browser eliminates the need for central servers, ensuring that user data remains private and untraceable. It provides a seamless browsing experience while supporting peer-to-peer networks, enabling censorship-resistant access to information.' },
  { src: product2, name: 'Social Media Application', description: 'Our Decentralized Social Media Application redefines online interactions by offering a platform that prioritizes user autonomy, data privacy, and transparency. Built on blockchain technology, this application ensures that users retain full ownership of their content and data, eliminating reliance on centralized servers prone to breaches and censorship. By integrating peer-to-peer networking, it promotes freedom of expression and a fair content distribution model.' },
  { src: product3, name: 'Arogya Locker', description: 'Arogya Locker is an innovative product designed to revolutionize healthcare data management. It serves as a secure, decentralized platform for storing and sharing medical records. Leveraging blockchain technology, it ensures data integrity, privacy, and transparency, enabling users to access and control their health information seamlessly. Arogya Locker empowers individuals while fostering a more efficient and connected healthcare ecosystem.' },
];

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);

  const nextPopupImage = () => {
    if (!selectedProduct) return;
    const currentIndex = images.findIndex((product) => product.name === selectedProduct.name);
    const nextIndex = (currentIndex + 1) % images.length; // Handle wrap-around
    setSelectedProduct(images[nextIndex]);
  };

  const prevPopupImage = () => {
    if (!selectedProduct) return;
    const currentIndex = images.findIndex((product) => product.name === selectedProduct.name);
    const prevIndex = (currentIndex - 1 + images.length) % images.length; // Handle wrap-around
    setSelectedProduct(images[prevIndex]);
  };

  const showPopup = (product) => {
    setSelectedProduct(product);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedProduct(null);
  };

  const Popup = ({ product, onClose }) => (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closePopup}>&#10005;</button>
        <button className="slider-btn left-btn" onClick={prevPopupImage}>&#10094;</button>
        <div className='border-line'></div>
        <div className="popup-image-content">
          <img src={selectedProduct.src} alt={selectedProduct.name} />
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
        </div>
        <button className="slider-btn right-btn" onClick={nextPopupImage}>&#10095;</button>
      </div>
    </div>
  );

  return (
    <div>
      {/* Example of triggering the popup on clicking a product */}
      {images.map((product, index) => (
        <div key={index} onClick={() => showPopup(product)}>
          <img src={product.src} alt={product.name} />
          <h3>{product.name}</h3>
        </div>
      ))}

      {popupVisible && <Popup product={selectedProduct} onClose={closePopup} />}
    </div>
  );
};

export default App;
