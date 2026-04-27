import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { styles } from '../styles/styles';
import { designTokens } from '../styles/designTokens';

export const Contact = ({ isMobile, isDesktop }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

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

  // WhatsApp click-to-chat (100% free - no backend needed)
  const handleWhatsAppClick = () => {
    const phoneNumber = '919155186701'; // Replace with your WhatsApp number
    const message = `Hi! I'm ${formData.name || 'interested in your photography services'}. ${formData.message ? 'Message: ' + formData.message : ''}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  // Formspree integration (free 50 submissions/month)
  // Replace 'YOUR_FORM_ID' with your Formspree form ID after signing up at formspree.io
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Option 1: Formspree (easiest)
    try {
      const response = await fetch('https://formspree.io/f/mdayvzag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

            {/* WhatsApp Quick Contact */}
            <div
              style={{
                ...styles.card,
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                cursor: 'pointer',
                transition: designTokens.transitions.base,
              }}
              onClick={handleWhatsAppClick}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = designTokens.shadows.lg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = designTokens.shadows.md;
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: designTokens.borderRadius.md,
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <MessageCircle size={22} color={designTokens.colors.white} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, color: designTokens.colors.white, marginBottom: '0.25rem' }}>
                    Chat on WhatsApp
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem' }}>
                    Fastest response time
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div style={{ ...styles.card, padding: '1.5rem', marginTop: '1rem' }}>
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

            {isSent ? (
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                backgroundColor: `${designTokens.colors.accent[500]}10`,
                borderRadius: designTokens.borderRadius.lg,
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                <h4 style={{ color: designTokens.colors.primary[900], marginBottom: '0.5rem' }}>Message Sent!</h4>
                <p style={{ color: designTokens.colors.primary[600], fontSize: '0.875rem' }}>
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  style={{
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    background: 'none',
                    border: 'none',
                    color: designTokens.colors.accent[500],
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: designTokens.colors.primary[700], marginBottom: '0.5rem' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      style={{ ...styles.formInput, boxSizing: 'border-box' }}
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
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: designTokens.colors.primary[700], marginBottom: '0.5rem' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      style={{ ...styles.formInput, boxSizing: 'border-box' }}
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
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    style={{ ...styles.formInput, boxSizing: 'border-box' }}
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
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    style={{ ...styles.formInput, resize: 'vertical', minHeight: '120px', boxSizing: 'border-box' }}
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
                  disabled={isSubmitting}
                  style={{
                    ...styles.button,
                    ...styles.buttonPrimary,
                    width: '100%',
                    justifyContent: 'center',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = designTokens.shadows.glow;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = designTokens.shadows.md;
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight size={18} />}
                </button>

                <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: designTokens.colors.primary[400], textAlign: 'center' }}>
                  Or message me directly on WhatsApp for faster response
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
