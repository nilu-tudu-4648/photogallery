import React from 'react';
import { ArrowRight } from 'lucide-react';
import { styles } from '../styles/styles';
import { designTokens } from '../styles/designTokens';
import { stats } from '../data/data';

export const Hero = ({ isMobile, isDesktop, setActiveSection }) => {
  return (
    <div style={{ ...styles.hero, position: 'relative' }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      {/* Dark Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(2, 6, 23, 0.85) 0%, rgba(15, 23, 42, 0.75) 50%, rgba(30, 41, 59, 0.65) 100%)',
      }} />

      {/* Subtle Pattern Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.02,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div style={styles.heroContent}>
        <div style={{ maxWidth: '900px' }}>
          {/* Badge */}
          <div style={{
            ...styles.badge,
            backgroundColor: `${designTokens.colors.accent[500]}20`,
            color: designTokens.colors.accent[400],
            display: 'inline-block',
            marginBottom: '1.5rem',
          }}>
            Professional Photography
          </div>

          <h1 style={{
            ...styles.textWhite,
            ...styles.fontBold,
            fontSize: isMobile ? '2.5rem' : isDesktop ? '4.5rem' : '3rem',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            Capturing Moments,{' '}
            <span style={{ color: designTokens.colors.accent[400] }}>Creating Art</span>
          </h1>

          <p style={{
            color: designTokens.colors.primary[300],
            fontSize: isMobile ? '1.125rem' : '1.25rem',
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            letterSpacing: '0.01em',
          }}>
            Award-winning photography that tells your unique story through a creative lens. Let's create something beautiful together.
          </p>

          <div style={{ ...styles.flexCenter, gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveSection('portfolio')}
              style={{ ...styles.button, ...styles.buttonPrimary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = designTokens.shadows.glow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = designTokens.shadows.md;
              }}
            >
              View Portfolio
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              style={{
                ...styles.button,
                backgroundColor: 'transparent',
                color: designTokens.colors.white,
                border: `1px solid ${designTokens.colors.primary[400]}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: isMobile ? '1.5rem' : '2rem',
        }}>
          <div style={{
            ...styles.container,
            display: 'flex',
            justifyContent: isMobile ? 'space-between' : 'center',
            gap: isMobile ? '0' : '4rem',
          }}>
            {stats.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ ...styles.textWhite, ...styles.fontBold, fontSize: isMobile ? '1.5rem' : '2rem' }}>{stat.value}</div>
                <div style={{ color: designTokens.colors.primary[400], fontSize: isMobile ? '0.75rem' : '0.875rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
