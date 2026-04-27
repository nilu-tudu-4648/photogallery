import React, { useState } from 'react';
import { styles } from '../styles/styles';
import { designTokens } from '../styles/designTokens';
import { services } from '../data/data';

export const Services = ({ isMobile, isTablet, isDesktop, setActiveSection }) => {
  const [hoveredService, setHoveredService] = useState(null);

  const processSteps = [
    { step: '01', title: 'Consultation', description: 'We discuss your vision, requirements, and expectations to plan the perfect photoshoot.' },
    { step: '02', title: 'Photography Session', description: 'Professional photography session at the agreed location with state-of-the-art equipment.' },
    { step: '03', title: 'Editing & Delivery', description: 'Careful selection and professional editing of the best images, delivered in your preferred format.' },
  ];

  return (
    <section style={{
      paddingTop: isMobile ? '2rem' : '3rem',
      paddingBottom: isMobile ? '3rem' : '4rem',
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
            Services
          </span>
          <h1 style={{
            ...styles.text3xl,
            ...styles.fontBold,
            color: designTokens.colors.primary[900],
            marginBottom: '0.75rem',
            fontSize: isMobile ? '1.75rem' : '2.5rem',
          }}>
            What I Offer
          </h1>
          <p style={{ color: designTokens.colors.primary[600], maxWidth: '500px', margin: '0 auto' }}>
            Professional photography services tailored to your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                ...styles.serviceCard,
                ...(hoveredService === index ? { boxShadow: designTokens.shadows.xl } : {}),
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: designTokens.borderRadius.md,
                background: designTokens.gradients.glow,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                <service.icon style={{ color: designTokens.colors.white, width: '28px', height: '28px' }} />
              </div>
              <h3 style={{ ...styles.textLg, ...styles.fontSemibold, color: designTokens.colors.primary[900], marginBottom: '0.75rem' }}>
                {service.title}
              </h3>
              <p style={{ color: designTokens.colors.primary[600], marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                {service.description}
              </p>
              <ul style={{ marginBottom: '1.25rem', padding: 0, listStyle: 'none' }}>
                {service.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: designTokens.colors.primary[500], fontSize: '0.875rem', marginBottom: '0.375rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: designTokens.colors.accent[500] }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <span style={{ ...styles.fontSemibold, color: designTokens.colors.primary[900], fontSize: '1.125rem' }}>
                  {service.price}
                </span>
                <button
                  onClick={() => setActiveSection('contact')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: designTokens.borderRadius.full,
                    backgroundColor: `${designTokens.colors.accent[500]}10`,
                    color: designTokens.colors.accent[500],
                    border: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: designTokens.transitions.base,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = designTokens.colors.accent[500];
                    e.currentTarget.style.color = designTokens.colors.white;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${designTokens.colors.accent[500]}10`;
                    e.currentTarget.style.color = designTokens.colors.accent[500];
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div style={{
          ...styles.card,
          padding: isMobile ? '1.5rem' : '2.5rem',
          background: designTokens.gradients.hero,
        }}>
          <h2 style={{
            ...styles.textXl,
            ...styles.fontBold,
            color: designTokens.colors.white,
            textAlign: 'center',
            marginBottom: '2rem',
          }}>
            The Process
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : '1fr',
            gap: '2rem',
          }}>
            {processSteps.map((process, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: designTokens.borderRadius.full,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}>
                  <span style={{ color: designTokens.colors.accent[400], fontSize: '1.25rem', fontWeight: 700 }}>{process.step}</span>
                </div>
                <h3 style={{ color: designTokens.colors.white, fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {process.title}
                </h3>
                <p style={{ color: designTokens.colors.primary[300], fontSize: '0.9375rem', lineHeight: '1.6' }}>
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
