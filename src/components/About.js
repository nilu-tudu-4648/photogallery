import React from 'react';
import { styles } from '../styles/styles';
import { designTokens } from '../styles/designTokens';

export const About = ({ isMobile, isTablet, isDesktop }) => {
  const aboutStats = [
    { value: '15+', label: 'Years Experience', description: 'Professional photography' },
    { value: '500+', label: 'Happy Clients', description: 'Worldwide' },
    { value: '20K+', label: 'Photos Delivered', description: 'High resolution' },
    { value: '50+', label: 'Awards Won', description: 'International recognition' },
  ];

  const equipment = [
    'Canon EOS R5 & Sony Alpha a7R IV Mirrorless Cameras',
    'Prime lenses (24mm, 35mm, 50mm, 85mm, 135mm)',
    'Professional lighting for studio and location',
    'Latest editing software & calibrated displays',
  ];

  const tags = ['Portrait', 'Landscape', 'Street', 'Wedding'];

  return (
    <section style={{
      paddingTop: isMobile ? '2rem' : '3rem',
      paddingBottom: isMobile ? '3rem' : '4rem',
      backgroundColor: designTokens.colors.primary[50],
    }}>
      <div style={styles.container}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '3.5rem' }}>
            <span style={{
              ...styles.badge,
              backgroundColor: `${designTokens.colors.accent[500]}15`,
              color: designTokens.colors.accent[500],
              display: 'inline-block',
              marginBottom: '1rem',
            }}>
              About Me
            </span>
            <h1 style={{
              ...styles.text3xl,
              ...styles.fontBold,
              color: designTokens.colors.primary[900],
              marginBottom: '0.75rem',
              fontSize: isMobile ? '1.75rem' : '2.5rem',
            }}>
              The Photographer Behind the Lens
            </h1>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '4rem',
          }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <div style={{
                width: isMobile ? '100%' : '400px',
                height: isMobile ? '400px' : '500px',
                borderRadius: designTokens.borderRadius.lg,
                overflow: 'hidden',
                boxShadow: designTokens.shadows.xl,
              }}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Photographer portrait"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-1rem',
                right: isDesktop ? '-1rem' : '-0.5rem',
                background: designTokens.gradients.glow,
                padding: '1.5rem',
                borderRadius: designTokens.borderRadius.lg,
                color: designTokens.colors.white,
                boxShadow: designTokens.shadows.lg,
              }}>
                <div style={{ ...styles.fontBold, fontSize: '2rem' }}>15+</div>
                <div style={{ fontSize: '0.875rem' }}>Years Experience</div>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <h2 style={{ ...styles.text2xl, ...styles.fontBold, color: designTokens.colors.primary[900], marginBottom: '1rem' }}>
                John Doe
              </h2>
              <p style={{ color: designTokens.colors.primary[600], marginBottom: '1rem', lineHeight: '1.8' }}>
                With over 15 years of experience as a professional photographer, I've had the privilege of working with clients across various industries, from fashion and corporate to weddings and wildlife.
              </p>
              <p style={{ color: designTokens.colors.primary[600], marginBottom: '1.5rem', lineHeight: '1.8' }}>
                My approach combines technical expertise with an artistic vision to capture authentic moments and create compelling visual stories. I believe photography is about preserving emotions and experiences that might otherwise be forgotten.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: designTokens.colors.white,
                      borderRadius: designTokens.borderRadius.full,
                      fontSize: '0.875rem',
                      color: designTokens.colors.primary[600],
                      border: `1px solid ${designTokens.colors.primary[200]}`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : isTablet ? 'repeat(2, 1fr)' : '1fr',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}>
            {aboutStats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.card,
                  padding: '1.5rem',
                  textAlign: 'center',
                }}
              >
                <div style={styles.statNumber}>{stat.value}</div>
                <div style={{ fontWeight: 600, color: designTokens.colors.primary[900], marginTop: '0.5rem' }}>{stat.label}</div>
                <div style={{ fontSize: '0.875rem', color: designTokens.colors.primary[500] }}>{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Equipment */}
          <div style={{ ...styles.card, padding: '2rem' }}>
            <h3 style={{ ...styles.textXl, ...styles.fontBold, color: designTokens.colors.primary[900], marginBottom: '1.5rem' }}>
              My Equipment
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : '1fr',
              gap: '1rem',
            }}>
              {equipment.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: designTokens.gradients.glow,
                  }} />
                  <span style={{ color: designTokens.colors.primary[700] }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
