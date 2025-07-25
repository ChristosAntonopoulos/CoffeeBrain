// Contact Page for Coffee Brain website

import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="container">
        {/* Header */}
        <div className="contact-header text-center">
          <h1>Contact Us</h1>
          <p className="contact-description">
            We'd love to hear from you. Visit us in Filiatra or get in touch to learn more 
            about Coffee Brain and our commitment to exceptional coffee experiences.
          </p>
        </div>

        {/* Contact Info */}
        <div className="contact-content grid grid-2">
          <div className="contact-info">
            <h2>Visit Coffee Brain</h2>
            
            <div className="info-section">
              <h3>📍 Address</h3>
              <p>Central Square<br />Filiatra, Messinia<br />Greece</p>
            </div>
            
            <div className="info-section">
              <h3>🕒 Opening Hours</h3>
              <div className="hours">
                <div className="hour-item">
                  <span>Monday - Friday</span>
                  <span>7:00 AM - 11:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Saturday - Sunday</span>
                  <span>8:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="info-section">
              <h3>📞 Contact Info</h3>
              <p>Phone: +30 27630 XXXXX<br />
                 Email: info@coffeebrain.gr</p>
            </div>
            
            <div className="info-section">
              <h3>🌐 Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="location-map">
            <div className="map-placeholder">
              <h3>Find Us in Filiatra</h3>
              <p>Located in the heart of Filiatra's central square, Coffee Brain is easily accessible and surrounded by the charming atmosphere of this historic Greek town.</p>
              <div className="map-image">
                <img 
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1261&q=80"
                  alt="Filiatra town view"
                  className="location-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="contact-cta text-center">
          <h2>Ready to Experience Coffee Brain?</h2>
          <p>
            Come and discover what makes our coffee shop special. We're looking forward to serving you!
          </p>
          <div className="cta-buttons">
            <a href="/menu" className="btn btn-primary">
              View Our Menu
            </a>
            <a href="/gallery" className="btn btn-ghost">
              See Our Gallery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;