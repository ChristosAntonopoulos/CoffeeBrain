// Home Page for Coffee Brain website

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useI18n } from '../components/I18nContext';

const lameloiseDesc = {
  el: `Το Coffee Brain σερβίρει La Meloise Espresso, έναν καφέ που ενσαρκώνει το πάθος μας για καφέ υψηλής ποιότητας, προσιτό σε όλους.\n\nΗ επιλογή των καλύτερων κόκκων Arabica και η ανάμειξή τους με υψηλής ποιότητας κόκκους Robusta συνδυάζονται σε ένα εξαιρετικό χαρμάνι καφέ που παρασύρει σε μία δυνατή και γεμάτη γευστική εμπειρία.\n\nΤο χαρμάνι αυτό καβουρδίζεται προσεκτικά με τη μέθοδο slow-roasting, η οποία εξασφαλίζει κόκκους με έντονο αρωματικό χαρακτήρα, ιδανικούς για ένα φλυτζάνι espresso με πλούσια, ανεπτυγμένη γεύση και ήπια οξύτητα.`,
  en: `Coffee Brain proudly serves La Meloise Espresso, a coffee that embodies our passion for high-quality coffee, accessible to everyone.\n\nThe selection of the best Arabica beans and their blending with high-quality Robusta beans combine in an excellent coffee blend that leads to a strong and full-flavored experience.\n\nThis blend is carefully roasted using the slow-roasting method, which ensures beans with an intense aromatic character, ideal for an espresso cup with rich, developed flavor and mild acidity.`
};

const Home: React.FC = () => {
  const { t, language } = useI18n();
  return (
    <div className="home-page">
      <div className="container">
        <div className="home-header text-center">
          <img src="/images/icon.jpg" alt="Coffee Brain Banner" className="banner-image" style={{ maxWidth: '320px', borderRadius: '2rem', margin: '0 auto 1.5rem', boxShadow: '0 4px 32px rgba(0,0,0,0.12)' }} />
          <h1>{t('homeTitle') || 'Coffee Brain'}</h1>
          <p className="home-description">
            {t('homeDesc') || 'Your favorite coffee spot in Filiatra!'}
          </p>
        </div>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-background" style={{ backgroundImage: 'url(/images/Main.jpg)' }}></div>
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title fade-in">
                {t('welcomeTo')}
                <span className="hero-brand">{t('heroBrand')}</span>
              </h1>
              <p className="hero-subtitle fade-in">
                {t('heroSubtitle')}
              </p>
              <p className="hero-description fade-in">
                {t('heroDescription')}
              </p>
              <div className="hero-buttons fade-in">
                <Link to="/menu" className="btn btn-primary">
                  {t('viewMenu')}
                </Link>
                <Link to="/gallery" className="btn btn-secondary">
                  {t('exploreGallery')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features section">
          <div className="container">
            <div className="section-header text-center">
              <h2>{t('whyChooseCoffeeBrain')}</h2>
              <p className="section-description">
                {t('experienceDescription')}
              </p>
            </div>
            
            <div className="features-grid grid grid-3">
              <div className="feature-card card">
                <div className="feature-icon">☕</div>
                <h3>{t('premiumCoffee')}</h3>
                <p>
                  {t('premiumCoffeeDesc')}
                </p>
              </div>
              
              <div className="feature-card card">
                <div className="feature-icon">🏛️</div>
                <h3>{t('elegantAtmosphere')}</h3>
                <p>
                  {t('elegantAtmosphereDesc')}
                </p>
              </div>
              
              <div className="feature-card card">
                <div className="feature-icon">🥐</div>
                <h3>{t('freshPastries')}</h3>
                <p>
                  {t('freshPastriesDesc')}
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
                <h2>{t('visitUsInFiliatra')}</h2>
                <p>
                  {t('locationDescription')}
                </p>
                <div className="location-details">
                  <div className="detail-item">
                    <strong>{t('address')}:</strong>
                    <span>{t('addressDetails')}</span>
                  </div>
                  <div className="detail-item">
                    <strong>{t('hours')}:</strong>
                    <span>{t('hoursDetails')}</span>
                  </div>
                  <div className="detail-item">
                    <strong>{t('phone')}:</strong>
                    <span>{t('phoneDetails')}</span>
                  </div>
                </div>
                <Link to="/contact" className="btn btn-ghost mt-2">
                  {t('getDirections')}
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
              <h2>{t('readyForCoffeeExperience')}</h2>
              <p>
                {t('joinUsDescription')}
              </p>
              <div className="cta-buttons">
                <Link to="/menu" className="btn btn-primary">
                  {t('exploreMenu')}
                </Link>
                <Link to="/gallery" className="btn btn-ghost">
                  {t('viewGallery')}
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Lameloise Coffee Section - moved lower */}
        <section className="lameloise-section" style={{ background: 'linear-gradient(90deg, #222 60%, #bfa14a 100%)', color: '#fff', borderRadius: '2rem', margin: '2rem 0', padding: '2.5rem 1.5rem', boxShadow: '0 4px 32px rgba(191,161,74,0.08)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
            <img src="/images/icon.jpg" alt="Lameloise Coffee" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #bfa14a', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }} />
            <div style={{ flex: 1, minWidth: 220 }}>
              <h2 style={{ color: '#bfa14a', fontWeight: 700, fontSize: '2rem', marginBottom: '0.5rem', letterSpacing: '0.02em' }}>Lameloise Coffee</h2>
              <p style={{ whiteSpace: 'pre-line', fontSize: '1.1rem', color: '#fff', marginBottom: '1rem' }}>{lameloiseDesc[language]}</p>
              <a href="https://www.jacobsdouweegbertsprofessional.gr/brands/la-meloise/" target="_blank" rel="noopener noreferrer" style={{ color: '#bfa14a', fontWeight: 600, textDecoration: 'underline', fontSize: '1.05rem' }}>La Meloise &rarr;</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;