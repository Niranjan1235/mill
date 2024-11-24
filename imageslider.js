import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/1920x1080/FF5733",
    "https://via.placeholder.com/1920x1080/33FF57",
    "https://via.placeholder.com/1920x1080/3357FF",
  ];

  return (
    <div className="image-slider">
      {/* Image Slides */}
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div className="slide-content">
              <h2 className="animated-text">Welcome to Our Rice Mill</h2>
              <div className="button-container">
                <button
                  className="slider-button"
                  onClick={() => alert("Navigating to About Us page!")}
                >
                  About Us
                </button>
                <button
                  className="slider-button"
                  onClick={() => alert("Navigating to Products page!")}
                >
                  Products
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <div className="slider-controls">
        <button
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + images.length) % images.length)
          }
        >
          &#10094;
        </button>
        <button
          onClick={() =>
            setCurrentIndex((currentIndex + 1) % images.length)
          }
        >
          &#10095;
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
