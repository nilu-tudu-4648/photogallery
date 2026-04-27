import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { styles } from '../styles/styles';
import { designTokens } from '../styles/designTokens';

export const Contact = ({ isMobile, isDesktop }) => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@lenscraft.studio' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Studio', value: '123 Creative Lane, Suite 400\nNew York, NY 10001' },
  ];

  const businessHours = [
    { days: 'Mon - Fri', hours: '9:00 AM - 6:00 PM' },
    { days: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
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
            Contact
          </span>
          <h1 style={{
            ...styles.text3xl,
            ...styles.fontBold,
            color: designTokens.colors.primary[900],
            marginBottom: '0.75rem',
            fontSize: isMobile ? '1.75rem' : '2.5rem',
          }}>
            Get In Touch
          </h1>
          <p style={{ color: designTokens.colors.primary[600], maxWidth: '500px', margin: '0 auto' }}>
            Have a project in mind? Let's create something beautiful together.
          </p>
        </div>

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isDesktop ? '5fr 7fr' : '1fr',
          gap: '2rem',
        }}>
          {/* Contact Info */}
          <div>
            {contactInfo.map((info, index) => (
              <div key={index} style={{ ...styles.card, padding: '1.5rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: designTokens.borderRadius.md,
                    background: `${designTokens.colors.accent[500]}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <info.icon size={20} color={designTokens.colors.accent[500]} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: designTokens.colors.primary[900], marginBottom: '0.25rem' }}>{info.label}</h4>
                    <p style={{ color: designTokens.colors.primary[600], fontSize: '0.9375rem', whiteSpace: 'pre-line' }}>{info.value}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Business Hours */}
            <div style={{ ...styles.card, padding: '1.5rem' }}>
              <h4 style={{ fontWeight: 600, color: designTokens.colors.primary[900], marginBottom: '1rem' }}>Business Hours</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.9375rem' }}>
                {businessHours.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <span style={{ color: designTokens.colors.primary[600] }}>{item.days}</span>
                    <span style={{ color: item.hours === 'Closed' ? designTokens.colors.primary[400] : designTokens.colors.primary[900] }}>{item.hours}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ ...styles.card, padding: isMobile ? '1.5rem' : '2rem' }}>
            <h3 style={{ ...styles.textXl, ...styles.fontBold, color: designTokens.colors.primary[900], marginBottom: '1.5rem' }}>
              Send a Message
            </h3>
            <form>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: designTokens.colors.primary[700], marginBottom: '0.5rem' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    style={styles.formInput}
                    onFocus={(e) => {
                      e.target.style.borderColor = designTokens.colors.accent[500];
                      e.target.style.boxShadow = `0 0 0 3px ${designTokens.colors.accent[500]}20`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = designTokens.colors.primary[200];
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: designTokens.colors.primary[700], marginBottom: '0.5rem' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    style={styles.formInput}
                    onFocus={(e) => {
                      e.target.style.borderColor = designTokens.colors.accent[500];
                      e.target.style.boxShadow = `0 0 0 3px ${designTokens.colors.accent[500]}20`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = designTokens.colors.primary[200];
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: designTokens.colors.primary[700], marginBottom: '0.5rem' }}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  style={styles.formInput}
                  onFocus={(e) => {
                    e.target.style.borderColor = designTokens.colors.accent[500];
                    e.target.style.boxShadow = `0 0 0 3px ${designTokens.colors.accent[500]}20`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = designTokens.colors.primary[200];
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: designTokens.colors.primary[700], marginBottom: '0.5rem' }}>
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  style={{ ...styles.formInput, resize: 'vertical', minHeight: '120px' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = designTokens.colors.accent[500];
                    e.target.style.boxShadow = `0 0 0 3px ${designTokens.colors.accent[500]}20`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = designTokens.colors.primary[200];
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  ...styles.button,
                  ...styles.buttonPrimary,
                  width: '100%',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = designTokens.shadows.glow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = designTokens.shadows.md;
                }}
              >
                Send Message
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
