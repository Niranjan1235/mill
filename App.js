import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import logo from "./logo_mill-remove.png";
import img1 from "./paddy-field-6281737_1920.jpg";
import img2 from "./aswath2.jpg";
import img3 from "./nandhu-kumar-03JtNfCubFw-unsplash.jpg";
import whatsappIcon from "./whatsapp (1).png";
import callIcon from "./phone-1439839_1920.png";
import instagramIcon from "./instagram.png";
import millingProcessImage from "./rice milling process.jpg";
import ContactUs from "./contactus";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState("");

  // Image slider this have an bug
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const rightPanelContent = document.getElementById("right-panel-content");
    if (rightPanelContent) {
      rightPanelContent.classList.remove("right-panel-content-animation");
      setTimeout(() => {
        rightPanelContent.classList.add("right-panel-content-animation");
      }, 50);
    }
  }, [selectedInfo]);
  const infoContent = {
    "Select the Type of Paddy":
      "You can select the type of paddy you want directly through our WhatsApp DMs for a convenient and personalized experience. When you purchase paddy from us, you can expect a yield of 60-65% rice for every kilogram of paddy after milling. The remaining 35-40% consists of by-products such as husk, bran, and other materials that are naturally separated during the milling process.",
    "Choose the Quantity of Rice": "Details about quantity selection.",
    "Buy Your Chosen Paddy": "Details about the buying process.",
    "Experience the Milling Process": "Details about visiting the mill.",
    "Take Home Your Rice": "Information about receiving your rice.",
  };

  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="header">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <nav className="navbar">
            <button
              className="hamburger"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              ☰
            </button>
            <ul className={`nav-links ${isNavOpen ? "open" : ""}`}>
              <li>
                <Link to="/#">Home</Link>
              </li>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#visit-us">Visit Us</a>
              </li>
              <li>
                <a href="#Process">Process</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Image Slider */}
                <div className="image-slider">
                  <div className="slides">
                    {[img1, img2, img3].map((img, index) => (
                      <div
                        key={index}
                        className={`slide ${
                          currentIndex === index ? "active" : ""
                        }`}
                        style={{
                          backgroundImage: `url(${img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="slide-content">
                          <h1 className="animated-text">
                            Varun Ganesh Traders and Rice Mill
                          </h1>
                          <h3 className="animated-text1">
                            Experience the journey from paddy to plate as we
                            transform freshly harvested grains into
                            premium-quality rice.
                          </h3>
                          <div className="button-container">
                            <button
                              className="slider-button"
                              onClick={() =>
                                alert("Navigating to About Us page!")
                              }
                            >
                              About Us
                            </button>
                            <button
                              className="slider-button"
                              onClick={() =>
                                alert("Navigating to Products page!")
                              }
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
                      className="control-button"
                      onClick={() =>
                        setCurrentIndex((currentIndex - 1 + 3) % 3)
                      }
                    >
                      &#10094;
                    </button>
                    <button
                      className="control-button"
                      onClick={() => setCurrentIndex((currentIndex + 1) % 3)}
                    >
                      &#10095;
                    </button>
                  </div>

                  {/* Navigation Dots */}
                  <div className="slider-dots">
                    {[img1, img2, img3].map((_, index) => (
                      <span
                        key={index}
                        className={`dot ${
                          currentIndex === index ? "active" : ""
                        }`}
                        onClick={() => setCurrentIndex(index)}
                      />
                    ))}
                  </div>
                </div>
                {/* Sticky Icons */}
        <div className="sticky-icons">
          <div
            className="sticky-icon"
            onClick={() => window.open("https://wa.me/+918792894345", "_blank")}
          >
            <img src={whatsappIcon} alt="WhatsApp" />
          </div>
          <div
            className="sticky-icon"
            onClick={() => (window.location.href = "tel:+8792894345")}
          >
            <img src={callIcon} alt="Call" />
          </div>
          <div
            className="sticky-icon"
            onClick={() =>
              window.open(
                "https://www.instagram.com/varunganeshricemill/",
                "_blank"
              )
            }
          >
            <img src={instagramIcon} alt="Instagram" />
          </div>
        </div>

               {/* About Us Section */}
        <section id="about-us" className="about-us">
          <h2>About Us</h2>
          <div className="about-us-container">
            <div className="about-block">
              <h3>Who are we?</h3>
              <p>
                Welcome to our rice mill, where we bridge the gap between
                tradition and quality. Many living in metro cities may not
                realize the journey of rice from field to table.
              </p>
              <button>Know More</button>
            </div>
            <div className="about-block">
              <h3>Understanding Rice Production</h3>
              <p>
                Paddy, the unhusked rice grain, is the foundation of your
                favorite staple. Did you know that older paddy often results in
                superior rice? Our process ensures you understand exactly what
                you’re buying.
              </p>
            </div>
            <div className="about-block">
              <h3>Explore Milling</h3>
              <p>
                If you visit us in person, you’ll get an up-close look at the
                entire milling process, learning about polished vs. unpolished
                rice, rice bran, and broken grains. If a visit isn’t possible,
                you can still purchase high-quality rice directly from us.
              </p>
            </div>
          </div>
        </section>

                {/* Visit Us Section */}
                <section id="visit-us" className="visit-us">
                  <h2>Visit Us</h2>
                  <div className="visit-container">
                    <div className="left-panel">
                      {Object.keys(infoContent).map((key) => (
                        <div
                          key={key}
                          className={`content-button ${
                            selectedInfo === key ? "active" : ""
                          }`}
                          onClick={() => setSelectedInfo(key)}
                        >
                          {key}
                        </div>
                      ))}
                    </div>
                    <div className="right-panel" id="right-panel-content">
                      <div className="info-box">
                        {selectedInfo ? (
                          <p>{infoContent[selectedInfo]}</p>
                        ) : (
                          <p>Click on an option on the left to see details.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Rice Milling Process Section */}
                <section id="Process" className="process">
                  <h1 className="section-title">Rice Milling Process</h1>
                  <div className="process-image-container">
                    <img
                      className="process-image"
                      src={millingProcessImage}
                      alt="Rice Milling Process"
                    />
                  </div>
                </section>
              </>
            }
          />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>

         {/* Footer Section */}
      
         <footer class="footer-section">
  <div class="footer-left">
    <div class="footer-logo">
    <img src={logo} alt="Logo"  /> 
      <h1>Varun Ganesh Traders and Rice Mill</h1>
    </div>
    <p>
      We take pride in building lasting relationships with our customers by
      delivering more than just products. With a focus on superior quality, timely
      delivery, and competitive pricing, we ensure an experience that sets us apart.
    </p>
  </div>
  <div class="footer-right">
    <div class="footer-content">
     
      <div class="footer-location">
        <h5>Our Location</h5>
        <p>
          <a 
            href="https://maps.app.goo.gl/6zAXEYKrzEssu7PDA" 
            target="_blank" 
            class="location-link"
          >
            Gantamvarapalli Panchayat Bagepalli, taluk, Chikkaballapur District, Karnataka 561207
          </a>
        </p>
      </div>
      
      <ul class="footer-links">
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
     
      <div class="footer-socials">
  <a href="https://facebook.com" target="_blank">
    <img src={whatsappIcon} alt="Facebook" class="social-icon" />
  </a>
  <a href="https://twitter.com" target="_blank">
    <img src={instagramIcon} alt="Instagram" class="social-icon" />
  </a>
  <a href="https://linkedin.com" target="_blank">
    <img src={callIcon} alt="LinkedIn" class="social-icon" />
  </a>
</div>
    </div>
  </div>
</footer>
      </div>
    </Router>
  );
}

export default App;
