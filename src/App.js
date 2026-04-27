import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, ChevronLeft, ChevronRight, Instagram, Facebook, Twitter, MapPin, Mail, Phone, ArrowRight, Star, Aperture, Image as ImageIcon, Calendar } from 'lucide-react';

// Modern Design System - 2024 Aesthetic
const designTokens = {
  colors: {
    // Primary - Deep Slate/Navy for sophistication
    primary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },
    // Accent - Warm coral/orange for energy
    accent: {
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
    },
    // Neutral
    white: '#ffffff',
    black: '#000000',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    glow: '0 0 40px -10px rgb(228 40 81 / 0.3)',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  transitions: {
    fast: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  gradients: {
    hero: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    card: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(15,23,42,0.8) 100%)',
    glow: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
    subtle: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
  },
};

// Modern CSS-in-JS Styles
const styles = {
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

  // Portfolio Grid - Masonry-style
  portfolioGrid: {
    display: 'grid',
    gap: '1.5rem',
  },
  portfolioItem: {
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: designTokens.borderRadius.lg,
    aspectRatio: '4/3',
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

// Media query hook
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

const PhotographyWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [portfolioFilter, setPortfolioFilter] = useState('all');

  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 767px)');
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const isLargeDesktop = useMediaQuery('(min-width: 1024px)');

  const portfolioCategories = [
    { id: 'nature', title: 'Nature', description: 'Capturing the raw beauty of landscapes and wildlife', featured: true },
    { id: 'portrait', title: 'Portraits', description: 'Expressive human portraits in natural settings', featured: true },
    { id: 'architecture', title: 'Architecture', description: 'Modern and classical architectural photography', featured: false },
    { id: 'street', title: 'Street', description: 'Authentic moments from urban environments', featured: true },
    { id: 'wedding', title: 'Weddings', description: 'Timeless moments from your special day', featured: false },
    { id: 'commercial', title: 'Commercial', description: 'Professional product and brand imagery', featured: false },
  ];

  const galleryImages = [
    // Nature
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Mountain landscape at golden hour', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80', alt: 'Waterfall in lush forest', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', alt: 'Sunrise over mountains', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80', alt: 'Misty mountain valley', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80', alt: 'Lake reflection at sunset', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80', alt: 'Sunlight through forest', category: 'nature' },

    // Portrait
    { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', alt: 'Intimate portrait in soft light', category: 'portrait' },
    { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80', alt: 'Professional headshot', category: 'portrait' },
    { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80', alt: 'Fashion portrait', category: 'portrait' },
    { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80', alt: 'Character portrait', category: 'portrait' },
    { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80', alt: 'Natural light portrait', category: 'portrait' },
    { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80', alt: 'Studio portrait', category: 'portrait' },

    // Architecture
    { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', alt: 'Modern architectural masterpiece', category: 'architecture' },
    { src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80', alt: 'Historic building details', category: 'architecture' },
    { src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80', alt: 'Contemporary glass building', category: 'architecture' },
    { src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80', alt: 'Abstract architecture', category: 'architecture' },
    { src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&q=80', alt: 'Modern building facade', category: 'architecture' },
    { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80', alt: 'Interior architecture', category: 'architecture' },

    // Street
    { src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80', alt: 'Urban street scene', category: 'street' },
    { src: 'https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&q=80', alt: 'City market vibrancy', category: 'street' },
    { src: 'https://images.unsplash.com/photo-1476973422084-e0fa66c5baf2?w=800&q=80', alt: 'Rainy night in Tokyo', category: 'street' },
    { src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80', alt: 'Busy city intersection', category: 'street' },
    { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80', alt: 'Urban skyline', category: 'street' },
    { src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80', alt: 'New York City street', category: 'street' },

    // Wedding
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', alt: 'Bride and groom embrace', category: 'wedding' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', alt: 'Wedding ceremony moment', category: 'wedding' },
    { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', alt: 'Wedding rings detail', category: 'wedding' },
    { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', alt: 'Wedding bouquet close-up', category: 'wedding' },
    { src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80', alt: 'First dance moment', category: 'wedding' },
    { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80', alt: 'Wedding venue decoration', category: 'wedding' },

    // Commercial
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80', alt: 'Product photography', category: 'commercial' },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80', alt: 'Headphones product shot', category: 'commercial' },
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80', alt: 'Red Nike shoe product', category: 'commercial' },
    { src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80', alt: 'Polaroid camera product', category: 'commercial' },
    { src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80', alt: 'Sunglasses product', category: 'commercial' },
    { src: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80', alt: 'Luxury watch product', category: 'commercial' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      text: 'Working with this photographer transformed our entire brand identity. The attention to detail and artistic vision exceeded all expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Editor-in-Chief',
      text: 'A true professional who brings both technical excellence and creative artistry. Every shoot delivers consistently stunning results.',
      rating: 5,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Bride',
      text: 'Our wedding photos are absolute treasures. Every emotion, every moment was captured with such beauty and authenticity.',
      rating: 5,
    },
  ];

  const services = [
    {
      icon: Aperture,
      title: 'Portrait Photography',
      description: 'Professional portraits that capture personality and essence. Perfect for individuals, couples, and families.',
      price: 'From $350',
      features: ['Studio or on-location', 'Professional retouching', 'Digital gallery included'],
    },
    {
      icon: Calendar,
      title: 'Wedding Photography',
      description: 'Comprehensive coverage of your special day with artistic storytelling and candid moments.',
      price: 'From $2,500',
      features: ['Full day coverage', 'Second photographer', 'Luxury album included'],
    },
    {
      icon: ImageIcon,
      title: 'Commercial Photography',
      description: 'High-impact product and brand imagery that elevates your marketing and drives engagement.',
      price: 'From $800',
      features: ['Product styling', 'Multiple angles', 'Commercial licensing'],
    },
    {
      icon: Camera,
      title: 'Event Coverage',
      description: 'Documentary-style photography for corporate events, conferences, and special occasions.',
      price: 'From $500',
      features: ['Real-time editing', 'Quick turnaround', 'Event highlights'],
    },
    {
      icon: Star,
      title: 'Fine Art Prints',
      description: 'Limited edition artistic prints for homes, offices, and galleries. Museum-quality materials.',
      price: 'From $250',
      features: ['Archival quality', 'Certificate of authenticity', 'Custom framing'],
    },
    {
      icon: ArrowRight,
      title: 'Photo Editing',
      description: 'Professional retouching and editing services to enhance your existing photographs.',
      price: '$75/hr',
      features: ['Color correction', 'Advanced retouching', 'Format conversion'],
    },
  ];

  const getFilteredImages = () => galleryImages.filter((image) => portfolioFilter === 'all' || image.category === portfolioFilter);

  const navigateGallery = (direction) => {
    const filtered = getFilteredImages();
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentImageIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setPortfolioFilter('all');
  }, [activeSection]);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setCurrentImageIndex(null);
      if (currentImageIndex !== null) {
        if (e.key === 'ArrowRight') navigateGallery('next');
        if (e.key === 'ArrowLeft') navigateGallery('prev');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentImageIndex]);

  const navItems = ['home', 'portfolio', 'about', 'services', 'contact'];

  return (
    <div style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', backgroundColor: designTokens.colors.primary[50] }}>
      {/* Modern Header with Glass Effect */}
      <header style={styles.header}>
        <div style={{ ...styles.container, ...styles.flexBetween }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
            <span style={{ ...styles.textXl, ...styles.fontSemibold, color: designTokens.colors.primary[900] }}>
              Lens<span style={{ color: designTokens.colors.accent[500] }}>Craft</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav style={{ ...styles.flexCenter, gap: '0.5rem', display: isDesktop ? 'flex' : 'none' }}>
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                style={{
                  ...styles.navItem,
                  ...(activeSection === section ? styles.navItemActive : {}),
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== section) {
                    e.currentTarget.style.backgroundColor = designTokens.colors.primary[100];
                    e.currentTarget.style.color = designTokens.colors.primary[800];
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== section) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = designTokens.colors.primary[500];
                  }
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <div style={{ width: '1px', height: '24px', backgroundColor: designTokens.colors.primary[200], margin: '0 0.5rem' }} />
            <button
              style={{
                ...styles.button,
                ...styles.buttonPrimary,
                padding: '0.625rem 1.5rem',
              }}
              onClick={() => setActiveSection('contact')}
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            style={{
              background: 'none',
              border: 'none',
              padding: '0.5rem',
              cursor: 'pointer',
              display: isDesktop ? 'none' : 'block',
              borderRadius: designTokens.borderRadius.md,
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && !isDesktop && (
          <div style={styles.mobileNav}>
            <div style={{ ...styles.container, ...styles.flexColumn, gap: '0.25rem' }}>
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  style={{
                    padding: '0.75rem 1rem',
                    fontSize: '1rem',
                    fontWeight: activeSection === section ? 600 : 500,
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    borderRadius: designTokens.borderRadius.md,
                    cursor: 'pointer',
                    color: activeSection === section ? designTokens.colors.accent[500] : designTokens.colors.primary[600],
                    backgroundColor: activeSection === section ? `${designTokens.colors.accent[500]}12` : 'transparent',
                    transition: designTokens.transitions.base,
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <div style={{ height: '1px', backgroundColor: designTokens.colors.primary[100], margin: '0.5rem 0' }} />
              <button
                style={{
                  ...styles.button,
                  ...styles.buttonPrimary,
                  marginTop: '0.25rem',
                  justifyContent: 'center',
                }}
                onClick={() => setActiveSection('contact')}
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Home Section - Modern Hero */}
        {activeSection === 'home' && (
          <section>
            {/* Hero with Gradient Background */}
            <div style={styles.hero}>
              {/* Background Pattern */}
              <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.03,
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
                    {[
                      { value: '15+', label: 'Years' },
                      { value: '500+', label: 'Clients' },
                      { value: '20K+', label: 'Photos' },
                      { value: '50+', label: 'Awards' },
                    ].map((stat, idx) => (
                      <div key={idx} style={{ textAlign: 'center' }}>
                        <div style={{ ...styles.textWhite, ...styles.fontBold, fontSize: isMobile ? '1.5rem' : '2rem' }}>{stat.value}</div>
                        <div style={{ color: designTokens.colors.primary[400], fontSize: isMobile ? '0.75rem' : '0.875rem' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Work Section */}
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
                  {portfolioCategories.filter((cat) => cat.featured).map((category, idx) => (
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

            {/* Testimonials Section */}
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
          </section>
        )}

        {/* Portfolio Section */}
        {activeSection === 'portfolio' && (
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

              {/* Gallery Grid - Masonry Style */}
              {(() => {
                const filteredImages = galleryImages.filter((image) => portfolioFilter === 'all' || image.category === portfolioFilter);
                return (
                  <>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                      gap: '1.5rem',
                    }}>
                      {filteredImages.map((image, index) => (
                        <div
                          key={image.src}
                          style={{
                            ...styles.portfolioItem,
                            aspectRatio: index % 3 === 0 ? '3/4' : '4/3',
                            height: 'auto',
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

                    {/* Lightbox - Uses filtered images */}
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
                  </>
                );
              })()}
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
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
                  <div style={{
                    flex: 1,
                    position: 'relative',
                  }}>
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
                      {['Portrait', 'Landscape', 'Street', 'Wedding'].map((tag) => (
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
                  {[
                    { value: '15+', label: 'Years Experience', description: 'Professional photography' },
                    { value: '500+', label: 'Happy Clients', description: 'Worldwide' },
                    { value: '20K+', label: 'Photos Delivered', description: 'High resolution' },
                    { value: '50+', label: 'Awards Won', description: 'International recognition' },
                  ].map((stat, idx) => (
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
                <div style={{
                  ...styles.card,
                  padding: '2rem',
                }}>
                  <h3 style={{ ...styles.textXl, ...styles.fontBold, color: designTokens.colors.primary[900], marginBottom: '1.5rem' }}>
                    My Equipment
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : '1fr',
                    gap: '1rem',
                  }}>
                    {[
                      'Canon EOS R5 & Sony Alpha a7R IV Mirrorless Cameras',
                      'Prime lenses (24mm, 35mm, 50mm, 85mm, 135mm)',
                      'Professional lighting for studio and location',
                      'Latest editing software & calibrated displays',
                    ].map((item, idx) => (
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
        )}

        {/* Services Section */}
        {activeSection === 'services' && (
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
                  {[
                    { step: '01', title: 'Consultation', description: 'We discuss your vision, requirements, and expectations to plan the perfect photoshoot.' },
                    { step: '02', title: 'Photography Session', description: 'Professional photography session at the agreed location with state-of-the-art equipment.' },
                    { step: '03', title: 'Editing & Delivery', description: 'Careful selection and professional editing of the best images, delivered in your preferred format.' },
                  ].map((process, index) => (
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
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
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
                  <div style={{ ...styles.card, padding: '1.5rem', marginBottom: '1rem' }}>
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
                        <Mail size={20} color={designTokens.colors.accent[500]} />
                      </div>
                      <div>
                        <h4 style={{ fontWeight: 600, color: designTokens.colors.primary[900], marginBottom: '0.25rem' }}>Email</h4>
                        <p style={{ color: designTokens.colors.primary[600], fontSize: '0.9375rem' }}>contact@lenscraft.studio</p>
                      </div>
                    </div>
                  </div>

                  <div style={{ ...styles.card, padding: '1.5rem', marginBottom: '1rem' }}>
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
                        <Phone size={20} color={designTokens.colors.accent[500]} />
                      </div>
                      <div>
                        <h4 style={{ fontWeight: 600, color: designTokens.colors.primary[900], marginBottom: '0.25rem' }}>Phone</h4>
                        <p style={{ color: designTokens.colors.primary[600], fontSize: '0.9375rem' }}>+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>

                  <div style={{ ...styles.card, padding: '1.5rem' }}>
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
                        <MapPin size={20} color={designTokens.colors.accent[500]} />
                      </div>
                      <div>
                        <h4 style={{ fontWeight: 600, color: designTokens.colors.primary[900], marginBottom: '0.25rem' }}>Studio</h4>
                        <p style={{ color: designTokens.colors.primary[600], fontSize: '0.9375rem' }}>
                          123 Creative Lane, Suite 400<br />New York, NY 10001
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div style={{ ...styles.card, padding: '1.5rem', marginTop: '1rem' }}>
                    <h4 style={{ fontWeight: 600, color: designTokens.colors.primary[900], marginBottom: '1rem' }}>Business Hours</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.9375rem' }}>
                      <span style={{ color: designTokens.colors.primary[600] }}>Mon - Fri</span>
                      <span style={{ color: designTokens.colors.primary[900] }}>9:00 AM - 6:00 PM</span>
                      <span style={{ color: designTokens.colors.primary[600] }}>Saturday</span>
                      <span style={{ color: designTokens.colors.primary[900] }}>10:00 AM - 4:00 PM</span>
                      <span style={{ color: designTokens.colors.primary[600] }}>Sunday</span>
                      <span style={{ color: designTokens.colors.primary[400] }}>Closed</span>
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
        )}
      </main>

      {/* Modern Footer */}
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
                  {['Home', 'Portfolio', 'About', 'Services'].map((link) => (
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
                  {['Portraits', 'Weddings', 'Commercial', 'Events'].map((service) => (
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
              {['Privacy Policy', 'Terms of Service'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{ color: designTokens.colors.primary[500], fontSize: '0.875rem', textDecoration: 'none', transition: designTokens.transitions.base }}
                  onMouseEnter={(e) => e.currentTarget.style.color = designTokens.colors.white}
                  onMouseLeave={(e) => e.currentTarget.style.color = designTokens.colors.primary[500]}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhotographyWebsite;
