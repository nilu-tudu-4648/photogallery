import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { styles } from '../styles/styles';
import { designTokens } from '../styles/designTokens';
import { portfolioCategories, galleryImages } from '../data/data';

export const Portfolio = ({
  isMobile,
  isTablet,
  isDesktop,
  portfolioFilter,
  setPortfolioFilter,
  currentImageIndex,
  setCurrentImageIndex,
  navigateGallery,
}) => {
  const filteredImages = galleryImages.filter(
    (image) => portfolioFilter === 'all' || image.category === portfolioFilter
  );

  return (
    <section style={{
      paddingTop: isMobile ? '2rem' : '3rem',
      paddingBottom: isMobile ? '3rem' : '4rem',
      backgroundColor: designTokens.colors.primary[50],
    }}>
      <div style={styles.container}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3rem' }}>
          <span style={{
            ...styles.badge,
            backgroundColor: `${designTokens.colors.accent[500]}15`,
            color: designTokens.colors.accent[500],
            display: 'inline-block',
            marginBottom: '1rem',
          }}>
            Gallery
          </span>
          <h1 style={{
            ...styles.text3xl,
            ...styles.fontBold,
            color: designTokens.colors.primary[900],
            marginBottom: '0.75rem',
            fontSize: isMobile ? '1.75rem' : '2.5rem',
          }}>
            My Portfolio
          </h1>
          <p style={{ color: designTokens.colors.primary[600], maxWidth: '500px', margin: '0 auto' }}>
            Explore a collection of my finest work across various photography genres
          </p>
        </div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '2rem',
        }}>
          <button
            onClick={() => setPortfolioFilter('all')}
            style={{
              padding: '0.625rem 1.5rem',
              borderRadius: designTokens.borderRadius.full,
              background: portfolioFilter === 'all' ? designTokens.gradients.glow : designTokens.colors.primary[100],
              color: portfolioFilter === 'all' ? designTokens.colors.white : designTokens.colors.primary[600],
              border: 'none',
              fontWeight: portfolioFilter === 'all' ? 600 : 500,
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: designTokens.transitions.base,
            }}
            onMouseEnter={(e) => {
              if (portfolioFilter !== 'all') {
                e.currentTarget.style.backgroundColor = designTokens.colors.primary[200];
                e.currentTarget.style.color = designTokens.colors.primary[800];
              }
            }}
            onMouseLeave={(e) => {
              if (portfolioFilter !== 'all') {
                e.currentTarget.style.backgroundColor = designTokens.colors.primary[100];
                e.currentTarget.style.color = designTokens.colors.primary[600];
              }
            }}
          >
            All
          </button>
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setPortfolioFilter(cat.id)}
              style={{
                padding: '0.625rem 1.5rem',
                borderRadius: designTokens.borderRadius.full,
                background: portfolioFilter === cat.id ? designTokens.gradients.glow : designTokens.colors.primary[100],
                color: portfolioFilter === cat.id ? designTokens.colors.white : designTokens.colors.primary[600],
                border: 'none',
                fontWeight: portfolioFilter === cat.id ? 600 : 500,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: designTokens.transitions.base,
              }}
              onMouseEnter={(e) => {
                if (portfolioFilter !== cat.id) {
                  e.currentTarget.style.backgroundColor = designTokens.colors.primary[200];
                  e.currentTarget.style.color = designTokens.colors.primary[800];
                }
              }}
              onMouseLeave={(e) => {
                if (portfolioFilter !== cat.id) {
                  e.currentTarget.style.backgroundColor = designTokens.colors.primary[100];
                  e.currentTarget.style.color = designTokens.colors.primary[600];
                }
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          autoRows: 'minmax(280px, auto)',
          gap: '1.5rem',
        }}>
          {filteredImages.map((image, index) => (
            <div
              key={image.src}
              style={{
                ...styles.portfolioItem,
                height: '280px',
              }}
              onClick={() => setCurrentImageIndex(index)}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('img');
                const overlay = e.currentTarget.querySelector('.overlay');
                if (img) img.style.transform = 'scale(1.05)';
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('img');
                const overlay = e.currentTarget.querySelector('.overlay');
                if (img) img.style.transform = 'scale(1)';
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
              <div
                className="overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(15, 23, 42, 0.7)',
                  backdropFilter: 'blur(2px)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <p style={{ color: designTokens.colors.white, fontWeight: 500, padding: '0 1rem', textAlign: 'center' }}>
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <p style={{ color: designTokens.colors.primary[500], fontSize: '1.125rem' }}>
              No images found in this category.
            </p>
          </div>
        )}

        {/* Lightbox */}
        {currentImageIndex !== null && filteredImages[currentImageIndex] && (
          <div
            style={styles.lightbox}
            onClick={(e) => {
              if (e.target === e.currentTarget) setCurrentImageIndex(null);
            }}
          >
            <button
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: designTokens.borderRadius.full,
                padding: '0.75rem',
                cursor: 'pointer',
                color: designTokens.colors.white,
                transition: designTokens.transitions.base,
              }}
              onClick={() => setCurrentImageIndex(null)}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            >
              <X size={24} />
            </button>

            <button
              style={{
                position: 'absolute',
                left: isMobile ? '0.5rem' : '2rem',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: designTokens.borderRadius.full,
                padding: '1rem',
                cursor: 'pointer',
                color: designTokens.colors.white,
                display: isMobile ? 'none' : 'block',
              }}
              onClick={() => navigateGallery('prev')}
            >
              <ChevronLeft size={32} />
            </button>

            <img
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].alt}
              style={{
                maxHeight: '85vh',
                maxWidth: isMobile ? '95%' : '80%',
                borderRadius: designTokens.borderRadius.lg,
                objectFit: 'contain',
              }}
            />

            <button
              style={{
                position: 'absolute',
                right: isMobile ? '0.5rem' : '2rem',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: designTokens.borderRadius.full,
                padding: '1rem',
                cursor: 'pointer',
                color: designTokens.colors.white,
                display: isMobile ? 'none' : 'block',
              }}
              onClick={() => navigateGallery('next')}
            >
              <ChevronRight size={32} />
            </button>

            <p style={{
              position: 'absolute',
              bottom: '2rem',
              color: designTokens.colors.white,
              textAlign: 'center',
              fontSize: '1rem',
              maxWidth: '600px',
              padding: '0 1rem',
            }}>
              {filteredImages[currentImageIndex].alt}
            </p>

            <p style={{
              position: 'absolute',
              bottom: '1rem',
              color: designTokens.colors.primary[400],
              fontSize: '0.75rem',
            }}>
              {currentImageIndex + 1} / {filteredImages.length}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
