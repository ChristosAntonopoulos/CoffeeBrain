// Navigation Bar for Coffee Brain website

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useI18n } from './I18nContext';
import './NavBar.css';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const { language, setLanguage, t } = useI18n();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <h1 className="brand-text">Coffee Brain</h1>
            <span className="brand-subtitle">Filiatra</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-nav desktop-nav">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              {t('home') || 'Home'}
            </Link>
            <Link 
              to="/gallery" 
              className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
            >
              {t('gallery') || 'Gallery'}
            </Link>
            <Link 
              to="/menu" 
              className={`nav-link ${isActive('/menu') ? 'active' : ''}`}
            >
              {t('menu') || 'Menu'}
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              {t('contactUs') || 'Contact'}
            </Link>
            {/* Social Links */}
            <a href="https://web.facebook.com/profile.php?id=100063554229766" className="nav-link social-link" target="_blank" rel="noopener noreferrer">{t('facebook') || 'Facebook'}</a>
            <a href="https://www.instagram.com/_coffee_brain/" className="nav-link social-link" target="_blank" rel="noopener noreferrer">{t('instagram') || 'Instagram'}</a>
            {/* Language Switcher */}
            <div className="lang-switcher-wrapper" style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem' }}>
              <select value={language} onChange={e => setLanguage(e.target.value as 'el' | 'en')} className="lang-switcher" aria-label="Select language">
                <option value="el">Ελληνικά</option>
                <option value="en">English</option>
              </select>
            </div>
            
            {/* Admin Section */}
            {isAuthenticated && user?.isAdmin ? (
              <div className="admin-nav">
                <Link 
                  to="/admin" 
                  className={`nav-link admin-link ${isActive('/admin') ? 'active' : ''}`}
                >
                  Admin
                </Link>
                <button onClick={handleLogout} className="btn btn-ghost btn-sm">
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/admin/login" 
                className="nav-link admin-login"
                title="Admin Login"
              >
                ⚙️
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <Link 
              to="/" 
              className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {t('home') || 'Home'}
            </Link>
            <Link 
              to="/gallery" 
              className={`mobile-nav-link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {t('gallery') || 'Gallery'}
            </Link>
            <Link 
              to="/menu" 
              className={`mobile-nav-link ${isActive('/menu') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {t('menu') || 'Menu'}
            </Link>
            <Link 
              to="/contact" 
              className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {t('contactUs') || 'Contact'}
            </Link>
            
            {/* Mobile Admin Section */}
            {isAuthenticated && user?.isAdmin ? (
              <>
                <Link 
                  to="/admin" 
                  className={`mobile-nav-link admin-link ${isActive('/admin') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Admin Dashboard
                </Link>
                <button onClick={handleLogout} className="mobile-logout-btn">
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/admin/login" 
                className="mobile-nav-link admin-login"
                onClick={closeMenu}
              >
                Admin Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;