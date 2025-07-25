// Navigation Bar for Coffee Brain website

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './NavBar.css';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

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
              Home
            </Link>
            <Link 
              to="/gallery" 
              className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
            >
              Gallery
            </Link>
            <Link 
              to="/menu" 
              className={`nav-link ${isActive('/menu') ? 'active' : ''}`}
            >
              Menu
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
            
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
              Home
            </Link>
            <Link 
              to="/gallery" 
              className={`mobile-nav-link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Gallery
            </Link>
            <Link 
              to="/menu" 
              className={`mobile-nav-link ${isActive('/menu') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Menu
            </Link>
            <Link 
              to="/contact" 
              className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
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