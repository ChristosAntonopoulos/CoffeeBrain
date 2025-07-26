// Gallery Page for Coffee Brain website

import React, { useState, useEffect } from 'react';
import { Photo } from '../types';
import { getPhotos } from '../api';
import './Gallery.css';
import { useI18n } from '../components/I18nContext';

const galleryImages = [
  'SnapInsta.to_311940543_1546470722450390_5313371374381523834_n.jpg',
  'SnapInsta.to_311926268_1529289117543169_8638489726523464406_n.jpg',
  'SnapInsta.to_285224903_784202092570923_3202818457505558312_n.jpg',
  'SnapInsta.to_283132169_424994539047427_8630780933111777388_n.jpg',
  'SnapInsta.to_280183541_505171484668182_2531911976832598105_n.jpg',
  'SnapInsta.to_279809295_588672622196452_7035299509230636688_n.jpg',
  'SnapInsta.to_278246130_3223717677863584_7219853074333732750_n.jpg',
  'SnapInsta.to_278359240_459140419342901_4760616477051259950_n.jpg',
  '497930233_1266354982159631_9002287888213507124_n.jpg',
  '494352994_1251034377025025_249038983388217234_n.jpg',
  '116401504_135688918214144_8461933756883007571_n.jpg',
  '116263924_135077868275249_777314005825685295_n.jpg',
  '110211937_130336815416021_7102193400793219717_n.jpg',
];

const Gallery: React.FC = () => {
  const { t } = useI18n();
  // Remove API and state logic for fetching images
  return (
    <div className="gallery-page">
      <div className="container">
        {/* Header */}
        <div className="gallery-header text-center">
          <h1>{t('gallery') || 'Gallery'}</h1>
          <p className="gallery-description">
            {t('galleryDesc') || 'Take a visual journey through Coffee Brain. Explore our elegant interior, artisanal coffee creations, and the warm atmosphere that makes us special.'}
          </p>
        </div>
        {/* Photo Grid */}
        <div className="gallery-grid">
          {galleryImages.map((filename, index) => (
            <div 
              key={filename} 
              className={`gallery-item fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gallery-image-container">
                <img 
                  src={`/images/${filename}`} 
                  alt={`Coffee Brain gallery ${index + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>{t('gallery') || 'Gallery'}</h3>
                    <span className="view-text">{t('clickToView') || 'Click to view'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;