// Gallery Page for Coffee Brain website

import React, { useState, useEffect } from 'react';
import { Photo } from '../types';
import { getPhotos } from '../api';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await getPhotos();
        setPhotos(response.data);
      } catch (error) {
        console.error('Failed to fetch photos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  if (loading) {
    return (
      <div className="gallery-page">
        <div className="container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading gallery...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-page">
      <div className="container">
        {/* Header */}
        <div className="gallery-header text-center">
          <h1>Gallery</h1>
          <p className="gallery-description">
            Take a visual journey through Coffee Brain. Explore our elegant interior, 
            artisanal coffee creations, and the warm atmosphere that makes us special.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`gallery-item fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(photo)}
            >
              <div className="gallery-image-container">
                <img 
                  src={photo.url} 
                  alt={photo.description}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>{photo.description}</h3>
                    <span className="view-text">Click to view</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPhoto && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.description}
                className="modal-image"
              />
              <div className="modal-info">
                <h3>{selectedPhoto.description}</h3>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="gallery-cta text-center">
          <h2>Visit Us Today</h2>
          <p>
            Experience the atmosphere in person. We'd love to welcome you to Coffee Brain.
          </p>
          <div className="cta-buttons">
            <a href="/menu" className="btn btn-primary">
              View Menu
            </a>
            <a href="/contact" className="btn btn-ghost">
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;