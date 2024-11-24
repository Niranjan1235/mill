import React from "react";
import "./contactus.css"; 

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      

      <div className="contact-details">
        <h1 className="company-name">Varun Ganesh Traders & Rice Mill</h1>
        <div className="address-section">
          <div className="location-icon">📍</div>
          <div className="address-text">
            Gantamvarapalli Panchayat, Bagepalli Taluk, Chikkaballapur District,
            Karnataka 561207
          </div>
        </div>
        <div className="contact-info">
          <div className="phone">
            <a href="tel:+918123456789" className="contact-link">
              📞 +91 81234 56789
            </a>
          </div>
          <div className="email">
            <a href="varunganeshtraders@gmail.com" >
              📧 varunganeshtraders@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="map-section">
        <iframe
          title="Location Map"
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31022.55049101238!2d77.78059462399755!3d13.64326593331061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1f8651c8583b1%3A0x7eb5d89f6f819b55!2sBagepalli%2C%20Karnataka%20561207!5e0!3m2!1sen!2sin!4v1694783818291!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
