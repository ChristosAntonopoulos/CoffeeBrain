// Contact Page for Coffee Brain website

import React from 'react';
import './Contact.css';
import { useI18n } from '../components/I18nContext';

const Contact: React.FC = () => {
  const { t } = useI18n();
  return (
    <div className="contact-page">
      <div className="container">
        {/* Header */}
        <div className="contact-header text-center">
          <h1>{t('contactUs')}</h1>
          <p className="contact-description">
            {t('contactDescription')}
          </p>
        </div>

        {/* Contact Info */}
        <div className="contact-content grid grid-2">
          <div className="contact-info">
            <h2>{t('visit')}</h2>
            
            <div className="info-section">
              <h3>📍 {t('address')}</h3>
              <p>Filiatra, Messinia<br />Greece</p>
            </div>
            
            <div className="info-section">
              <h3>🕒 {t('hours')}</h3>
              <div className="hours">
                <div className="hour-item">
                  <span>{t('weekday')}</span>
                  <span>{t('weekdayHours')}</span>
                </div>
                <div className="hour-item">
                  <span>{t('weekend')}</span>
                  <span>{t('weekendHours')}</span>
                </div>
              </div>
            </div>
            
            <div className="info-section">
              <h3>📞 {t('contactInfo')}</h3>
              <p>{t('phone')}: +30 694 993 5364 / +30 27610 33040<br />
                 {t('email')}: info@coffeebrain.gr</p>
            </div>
            
            <div className="info-section">
              <h3>🌐 {t('followUs')}</h3>
              <div className="social-links">
                <a href="https://web.facebook.com/profile.php?id=100063554229766" className="social-link" target="_blank" rel="noopener noreferrer">{t('facebook')}</a>
                <a href="https://www.instagram.com/_coffee_brain/" className="social-link" target="_blank" rel="noopener noreferrer">{t('instagram')}</a>
              </div>
            </div>
          </div>
          
          <div className="location-map">
            <div className="map-placeholder">
              <h3>{t('findUs')}</h3>
              <p>{t('findUsDesc')}</p>
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
          <h2>{t('ready')}</h2>
          <p>
            {t('readyDesc')}
          </p>
          <div className="cta-buttons">
            <a href="/menu" className="btn btn-primary">
              {t('viewMenu')}
            </a>
            <a href="/gallery" className="btn btn-ghost">
              {t('seeGallery')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;