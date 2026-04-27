import { designTokens } from './designTokens';

// Modern CSS-in-JS Styles
export const styles = {
  // Layout
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  minHeightScreen: {
    minHeight: '100vh',
  },

  // Flexbox
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },

  // Typography - Modern Scale
  textXs: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
  },
  textSm: {
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
  },
  textBase: {
    fontSize: '1rem',
    lineHeight: '1.75rem',
  },
  textLg: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
  },
  textXl: {
    fontSize: '1.25rem',
    lineHeight: '2rem',
  },
  text2xl: {
    fontSize: '1.5rem',
    lineHeight: '2.25rem',
  },
  text3xl: {
    fontSize: '1.875rem',
    lineHeight: '2.5rem',
  },
  text4xl: {
    fontSize: '2.25rem',
    lineHeight: '3rem',
  },
  text5xl: {
    fontSize: '3rem',
    lineHeight: '1.1',
  },
  text6xl: {
    fontSize: '3.75rem',
    lineHeight: '1.1',
  },
  fontLight: { fontWeight: 300 },
  fontNormal: { fontWeight: 400 },
  fontMedium: { fontWeight: 500 },
  fontSemibold: { fontWeight: 600 },
  fontBold: { fontWeight: 700 },
  textCenter: { textAlign: 'center' },
  letterWide: { letterSpacing: '0.025em' },
  letterWider: { letterSpacing: '0.05em' },

  // Colors
  textPrimary: { color: designTokens.colors.primary[900] },
  textSecondary: { color: designTokens.colors.primary[600] },
  textMuted: { color: designTokens.colors.primary[400] },
  textWhite: { color: designTokens.colors.white },
  textAccent: { color: designTokens.colors.accent[500] },

  // Spacing - Generous modern whitespace
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
    '4xl': '8rem',
  },

  // Modern Components
  button: {
    padding: '0.875rem 2rem',
    borderRadius: designTokens.borderRadius.full,
    fontWeight: 500,
    cursor: 'pointer',
    border: 'none',
    transition: designTokens.transitions.base,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9375rem',
    letterSpacing: '0.01em',
  },
  buttonPrimary: {
    background: designTokens.gradients.glow,
    color: designTokens.colors.white,
    boxShadow: designTokens.shadows.md,
  },
  buttonSecondary: {
    backgroundColor: designTokens.colors.white,
    color: designTokens.colors.primary[900],
    border: `1px solid ${designTokens.colors.primary[200]}`,
    boxShadow: designTokens.shadows.sm,
  },
  buttonGhost: {
    backgroundColor: 'transparent',
    color: designTokens.colors.primary[700],
  },

  // Modern Card
  card: {
    backgroundColor: designTokens.colors.white,
    borderRadius: designTokens.borderRadius.lg,
    boxShadow: designTokens.shadows.md,
    transition: designTokens.transitions.base,
    overflow: 'hidden',
  },
  cardHover: {
    boxShadow: designTokens.shadows.xl,
  },

  // Glass Card (Glassmorphism)
  glassCard: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(12px)',
    borderRadius: designTokens.borderRadius.lg,
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(15, 23, 42, 0.08)',
  },

  // Modern Form
  formInput: {
    width: '100%',
    padding: '0.875rem 1rem',
    border: `1px solid ${designTokens.colors.primary[200]}`,
    borderRadius: designTokens.borderRadius.md,
    fontSize: '0.9375rem',
    outline: 'none',
    transition: designTokens.transitions.base,
    backgroundColor: designTokens.colors.white,
    color: designTokens.colors.primary[900],
  },
  formInputFocus: {
    borderColor: designTokens.colors.accent[500],
    boxShadow: `0 0 0 3px ${designTokens.colors.accent[400]}20`,
  },

  // Navigation
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderBottom: `1px solid ${designTokens.colors.primary[100]}`,
    padding: '0.75rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  navItem: {
    padding: '0.625rem 1.25rem',
    cursor: 'pointer',
    fontSize: '0.9375rem',
    fontWeight: 500,
    color: designTokens.colors.primary[500],
    borderRadius: designTokens.borderRadius.full,
    transition: designTokens.transitions.base,
    border: 'none',
    background: 'transparent',
    letterSpacing: '0.01em',
  },
  navItemActive: {
    color: designTokens.colors.accent[500],
    backgroundColor: `${designTokens.colors.accent[500]}15`,
    fontWeight: 600,
  },
  mobileNav: {
    position: 'fixed',
    top: '64px',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(20px)',
    borderTop: `1px solid ${designTokens.colors.primary[100]}`,
    padding: '1rem',
    zIndex: 50,
  },

  // Hero - Modern gradient background
  hero: {
    position: 'relative',
    minHeight: '90vh',
    overflow: 'hidden',
    background: designTokens.gradients.hero,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '90vh',
    padding: '4rem 1.5rem',
  },

  // Portfolio Grid
  portfolioGrid: {
    display: 'grid',
    gap: '1.5rem',
  },
  portfolioItem: {
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: designTokens.borderRadius.lg,
    height: '280px',
  },

  // Testimonial Card
  testimonialCard: {
    padding: '2rem',
    backgroundColor: designTokens.colors.white,
    borderRadius: designTokens.borderRadius.lg,
    boxShadow: designTokens.shadows.md,
  },

  // Footer
  footer: {
    backgroundColor: designTokens.colors.primary[950],
    color: designTokens.colors.primary[300],
    padding: '4rem 0 2rem',
  },

  // Lightbox
  lightbox: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(2, 6, 23, 0.98)',
    backdropFilter: 'blur(8px)',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Service Card
  serviceCard: {
    padding: '2rem',
    backgroundColor: designTokens.colors.white,
    borderRadius: designTokens.borderRadius.lg,
    boxShadow: designTokens.shadows.md,
    transition: designTokens.transitions.base,
    position: 'relative',
    overflow: 'hidden',
  },

  // Badge
  badge: {
    padding: '0.375rem 0.875rem',
    borderRadius: designTokens.borderRadius.full,
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },

  // Stats Counter
  statNumber: {
    fontSize: '3rem',
    fontWeight: 700,
    color: designTokens.colors.accent[500],
    lineHeight: 1,
  },

  // Section divider
  sectionDivider: {
    width: '60px',
    height: '4px',
    background: designTokens.gradients.glow,
    borderRadius: '2px',
    margin: '1rem 0 2rem',
  },
};
