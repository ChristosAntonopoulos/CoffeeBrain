// Home Page for Coffee Brain website

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in">
              Welcome to
              <span className="hero-brand">Coffee Brain</span>
            </h1>
            <p className="hero-subtitle fade-in">
              A refined coffeehouse experience in the heart of Filiatra
            </p>
            <p className="hero-description fade-in">
              Discover our sleek interior with grey and black tones enhanced by gold accents. 
              Enjoy premium coffee, artisanal pastries, and warm Greek hospitality.
            </p>
            <div className="hero-buttons fade-in">
              <Link to="/menu" className="btn btn-primary">
                View Our Menu
              </Link>
              <Link to="/gallery" className="btn btn-secondary">
                Explore Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Choose Coffee Brain</h2>
            <p className="section-description">
              Experience the perfect blend of modern elegance and traditional Greek hospitality
            </p>
          </div>
          
          <div className="features-grid grid grid-3">
            <div className="feature-card card">
              <div className="feature-icon">☕</div>
              <h3>Premium Coffee</h3>
              <p>
                From traditional Greek coffee to expertly crafted espresso drinks, 
                every cup is made with passion and precision.
              </p>
            </div>
            
            <div className="feature-card card">
              <div className="feature-icon">🏛️</div>
              <h3>Elegant Atmosphere</h3>
              <p>
                Relax in our thoughtfully designed space featuring sleek interiors 
                with sophisticated color palettes and luxurious gold accents.
              </p>
            </div>
            
            <div className="feature-card card">
              <div className="feature-icon">🥐</div>
              <h3>Fresh Pastries</h3>
              <p>
                Indulge in our selection of fresh pastries, from flaky croissants 
                to authentic Greek desserts made with local ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location section-sm">
        <div className="container">
          <div className="location-content grid grid-2">
            <div className="location-info">
              <h2>Visit Us in Filiatra</h2>
              <p>
                Located in the charming town of Filiatra, Coffee Brain offers a modern 
                sanctuary where you can enjoy exceptional coffee while soaking in the 
                authentic Greek atmosphere.
              </p>
              <div className="location-details">
                <div className="detail-item">
                  <strong>📍 Address:</strong>
                  <span>Central Square, Filiatra, Greece</span>
                </div>
                <div className="detail-item">
                  <strong>🕒 Hours:</strong>
                  <span>Mon-Sun: 7:00 AM - 11:00 PM</span>
                </div>
                <div className="detail-item">
                  <strong>📞 Phone:</strong>
                  <span>+30 27630 XXXXX</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-ghost mt-2">
                Get Directions
              </Link>
            </div>
            
            <div className="location-image">
              <img 
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1261&q=80"
                alt="Filiatra night view"
                className="location-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready for a Coffee Experience?</h2>
            <p>
              Join us at Coffee Brain and discover why we're Filiatra's favorite coffee destination.
            </p>
            <div className="cta-buttons">
              <Link to="/menu" className="btn btn-primary">
                Explore Menu
              </Link>
              <Link to="/gallery" className="btn btn-ghost">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;