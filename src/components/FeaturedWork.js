import React from 'react';
import { ArrowRight } from 'lucide-react';
import { styles } from '../styles/styles';
import { designTokens } from '../styles/designTokens';
import { portfolioCategories } from '../data/data';

export const FeaturedWork = ({ isMobile, isDesktop, setActiveSection }) => {
  return (
    <div style={{
      paddingTop: isMobile ? '4rem' : '6rem',
      paddingBottom: isMobile ? '4rem' : '6rem',
      backgroundColor: designTokens.colors.primary[50],
    }}>
      <div style={styles.container}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '3.5rem' }}>
          <span style={{
            ...styles.badge,
            backgroundColor: `${designTokens.colors.accent[500]}15`,
            color: designTokens.colors.accent[500],
            display: 'inline-block',
            marginBottom: '1rem',
          }}>
            Portfolio
          </span>
          <h2 style={{
            ...styles.text3xl,
            ...styles.fontBold,
            color: designTokens.colors.primary[900],
            marginBottom: '1rem',
            fontSize: isMobile ? '1.75rem' : '2.25rem',
          }}>
            Featured Work
          </h2>
          <p style={{ color: designTokens.colors.primary[600], maxWidth: '500px', margin: '0 auto' }}>
            A curated selection of my best work across different genres
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : '1fr',
          gap: '1.5rem',
        }}>
          {portfolioCategories.filter((cat) => cat.featured).map((category) => (
            <div
              key={category.id}
              style={{
                ...styles.portfolioItem,
                height: isMobile ? '280px' : '320px',
              }}
              onClick={() => setActiveSection('portfolio')}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('img');
                const overlay = e.currentTarget.querySelector('.overlay');
                if (img) img.style.transform = 'scale(1.08)';
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
                src={category.id === 'nature' ? 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80' :
                     category.id === 'portrait' ? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80' :
                     category.id === 'street' ? 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80' :
                     'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'}
                alt={category.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
              <div
                className="overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: designTokens.gradients.card,
                  opacity: isMobile ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                }}
              >
                <h3 style={{ color: designTokens.colors.white, fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {category.title}
                </h3>
                <p style={{ color: designTokens.colors.primary[300], fontSize: '0.875rem', opacity: isMobile ? 1 : 0, transition: 'opacity 0.3s' }}>
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button
            onClick={() => setActiveSection('portfolio')}
            style={{
              ...styles.button,
              ...styles.buttonSecondary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = designTokens.colors.accent[500];
              e.currentTarget.style.color = designTokens.colors.accent[500];
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = designTokens.colors.primary[200];
              e.currentTarget.style.color = designTokens.colors.primary[900];
            }}
          >
            View All Work
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
