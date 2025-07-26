// Menu Page for Coffee Brain website

import React, { useState, useEffect } from 'react';
import { MenuItem } from '../types';
import { getMenuItems } from '../api';
import './Menu.css';
import { useI18n } from '../components/I18nContext';

const Menu: React.FC = () => {
  const { t } = useI18n();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await getMenuItems();
        setMenuItems(response.data);
        setFilteredItems(response.data);
      } catch (error) {
        console.error('Failed to fetch menu items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const filterByCategory = (category: string) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === category));
    }
  };

  const groupedItems = filteredItems.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {} as Record<string, MenuItem[]>);

  if (loading) {
    return (
      <div className="menu-page">
        <div className="container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>{t('loadingMenu') || 'Loading menu...'}</p>
          </div>
        </div>
      </div>
    );
  }

  const categoryNames = {
    'coffee': t('coffeeCat') || '☕ Coffee',
    'cold-drinks': t('coldDrinksCat') || '🧊 Cold Drinks',
    'pastry': t('pastriesCat') || '🥐 Pastries',
    'snacks': t('snacksCat') || '🥪 Snacks'
  };

  return (
    <div className="menu-page">
      <div className="container">
        {/* Header */}
        <div className="menu-header text-center">
          <h1>Our Menu</h1>
          <p className="menu-description">
            Discover our carefully curated selection of premium coffee, fresh pastries, 
            and delicious treats. Every item is crafted with passion and the finest ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => filterByCategory('all')}
          >
            All Items
          </button>
          {Object.entries(categoryNames).map(([key, name]) => (
            <button
              key={key}
              className={`filter-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => filterByCategory(key)}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="menu-content">
          {activeCategory === 'all' ? (
            // Show grouped by category when showing all
            Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} className="menu-category">
                <h2 className="category-title">
                  {categoryNames[category as keyof typeof categoryNames]}
                </h2>
                <div className="menu-items-grid">
                  {items.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="menu-item fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="menu-item-image">
                        <img 
                          src={item.image || 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'} 
                          alt={item.name}
                          loading="lazy"
                        />
                      </div>
                      <div className="menu-item-content">
                        <div className="menu-item-header">
                          <h3>{item.name}</h3>
                          <span className="price">€{item.price.toFixed(2)}</span>
                        </div>
                        <p className="menu-item-description">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Show single category
            <div className="menu-category">
              <h2 className="category-title">
                {categoryNames[activeCategory as keyof typeof categoryNames]}
              </h2>
              <div className="menu-items-grid">
                {filteredItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="menu-item fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="menu-item-image">
                      <img 
                        src={item.image || 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'} 
                        alt={item.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="menu-item-content">
                      <div className="menu-item-header">
                        <h3>{item.name}</h3>
                        <span className="price">€{item.price.toFixed(2)}</span>
                      </div>
                      <p className="menu-item-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Order CTA */}
        <div className="order-cta text-center">
          <h2>{t('orderReady') || 'Ready to Order?'}</h2>
          <p>
            {t('orderDesc') || 'Visit us at Coffee Brain to experience these delicious offerings in person. Our friendly staff is ready to craft your perfect coffee moment.'}
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">
              {t('visitUsToday') || 'Visit Us Today'}
            </a>
            <a href="/gallery" className="btn btn-ghost">
              {t('seeOurSpace') || 'See Our Space'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;