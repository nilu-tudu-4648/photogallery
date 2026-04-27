import React from 'react';
import { Star } from 'lucide-react';
import { styles } from '../styles/styles';
import { designTokens } from '../styles/designTokens';
import { testimonials } from '../data/data';

export const Testimonials = ({ isMobile, isDesktop }) => {
  return (
    <div style={{
      paddingTop: isMobile ? '4rem' : '6rem',
      paddingBottom: isMobile ? '4rem' : '6rem',
      backgroundColor: designTokens.colors.white,
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
            Testimonials
          </span>
          <h2 style={{
            ...styles.text3xl,
            ...styles.fontBold,
            color: designTokens.colors.primary[900],
            marginBottom: '1rem',
            fontSize: isMobile ? '1.75rem' : '2.25rem',
          }}>
            What Clients Say
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : '1fr',
          gap: '1.5rem',
        }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                ...styles.testimonialCard,
                transition: designTokens.transitions.base,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = designTokens.shadows.xl;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = designTokens.shadows.md;
              }}
            >
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill={designTokens.colors.accent[500]} color={designTokens.colors.accent[500]} />
                ))}
              </div>
              <p style={{ color: designTokens.colors.primary[700], marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1rem' }}>
                "{testimonial.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: designTokens.borderRadius.full,
                  background: designTokens.gradients.glow,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: designTokens.colors.white,
                  fontWeight: 600,
                  fontSize: '1rem',
                }}>
                  {testimonial.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: designTokens.colors.primary[900] }}>{testimonial.name}</p>
                  <p style={{ color: designTokens.colors.primary[500], fontSize: '0.875rem' }}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
