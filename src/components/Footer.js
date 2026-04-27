import React from 'react';
import { Camera, Instagram, Facebook, Twitter } from 'lucide-react';
import { styles } from '../styles/styles';
import { designTokens } from '../styles/designTokens';

export const Footer = ({ isMobile, isDesktop, setActiveSection }) => {
  const quickLinks = ['Home', 'Portfolio', 'About', 'Services'];
  const servicesList = ['Portraits', 'Weddings', 'Commercial', 'Events'];
  const legalLinks = ['Privacy Policy', 'Terms of Service'];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={{
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          justifyContent: 'space-between',
          alignItems: isDesktop ? 'flex-start' : 'center',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          {/* Logo & Description */}
          <div style={{ maxWidth: '300px', textAlign: isDesktop ? 'left' : 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', justifyContent: isDesktop ? 'flex-start' : 'center' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: designTokens.borderRadius.md,
                background: designTokens.gradients.glow,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Camera style={{ width: '22px', height: '22px', color: designTokens.colors.white }} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 600, color: designTokens.colors.white }}>
                Lens<span style={{ color: designTokens.colors.accent[400] }}>Craft</span>
              </span>
            </div>
            <p style={{ color: designTokens.colors.primary[400], fontSize: '0.875rem', lineHeight: '1.6' }}>
              Professional photography services capturing life's most precious moments with artistic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div>
              <h4 style={{ color: designTokens.colors.white, fontWeight: 600, marginBottom: '1rem', fontSize: '0.875rem' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {quickLinks.map((link) => (
                  <li key={link} style={{ marginBottom: '0.5rem' }}>
                    <button
                      onClick={() => setActiveSection(link.toLowerCase())}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: designTokens.colors.primary[400],
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        transition: designTokens.transitions.base,
                        padding: 0,
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = designTokens.colors.white}
                      onMouseLeave={(e) => e.currentTarget.style.color = designTokens.colors.primary[400]}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: designTokens.colors.white, fontWeight: 600, marginBottom: '1rem', fontSize: '0.875rem' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {servicesList.map((service) => (
                  <li key={service} style={{ marginBottom: '0.5rem', color: designTokens.colors.primary[400], fontSize: '0.875rem' }}>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ textAlign: isDesktop ? 'right' : 'center' }}>
            <h4 style={{ color: designTokens.colors.white, fontWeight: 600, marginBottom: '1rem', fontSize: '0.875rem' }}>Follow Me</h4>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: isDesktop ? 'flex-end' : 'center' }}>
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: designTokens.borderRadius.full,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: designTokens.transitions.base,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = designTokens.colors.accent[500];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <Icon size={18} color={designTokens.colors.white} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: `1px solid ${designTokens.colors.primary[800]}`,
          paddingTop: '1.5rem',
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <p style={{ color: designTokens.colors.primary[500], fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} LensCraft Photography. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {legalLinks.map((link) => (
              <button
                key={link}
                style={{ color: designTokens.colors.primary[500], fontSize: '0.875rem', textDecoration: 'none', transition: designTokens.transitions.base, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                onMouseEnter={(e) => e.currentTarget.style.color = designTokens.colors.white}
                onMouseLeave={(e) => e.currentTarget.style.color = designTokens.colors.primary[500]}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
