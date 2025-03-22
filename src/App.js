import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

// CSS styles without Tailwind
const styles = {
  // Layout
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
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
  
  // Text
  text2xl: {
    fontSize: '1.5rem',
    fontWeight: 300,
  },
  text3xl: {
    fontSize: '1.875rem',
    fontWeight: 300,
  },
  text4xl: {
    fontSize: '2.25rem',
    fontWeight: 300,
  },
  textSm: {
    fontSize: '0.875rem',
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  fontBold: {
    fontWeight: 700,
  },
  fontMedium: {
    fontWeight: 500,
  },
  textCenter: {
    textAlign: 'center',
  },
  
  // Colors
  bgWhite: {
    backgroundColor: '#ffffff',
  },
  bgGray50: {
    backgroundColor: '#f9fafb',
  },
  bgGray100: {
    backgroundColor: '#f3f4f6',
  },
  bgGray900: {
    backgroundColor: '#111827',
  },
  textGray500: {
    color: '#6b7280',
  },
  textGray600: {
    color: '#4b5563',
  },
  textGray700: {
    color: '#374151',
  },
  textGray900: {
    color: '#111827',
  },
  textWhite: {
    color: '#ffffff',
  },
  
  // Spacing
  my2: {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
  my4: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  my8: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  my12: {
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  my16: {
    marginTop: '4rem',
    marginBottom: '4rem',
  },
  mb2: {
    marginBottom: '0.5rem',
  },
  mb4: {
    marginBottom: '1rem',
  },
  mb8: {
    marginBottom: '2rem',
  },
  mb12: {
    marginBottom: '3rem',
  },
  mt2: {
    marginTop: '0.5rem',
  },
  mt4: {
    marginTop: '1rem',
  },
  p2: {
    padding: '0.5rem',
  },
  p4: {
    padding: '1rem',
  },
  p6: {
    padding: '1.5rem',
  },
  p8: {
    padding: '2rem',
  },
  py2: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
  py4: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  py8: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  py12: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },
  py16: {
    paddingTop: '4rem',
    paddingBottom: '4rem',
  },
  px2: {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },
  px4: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  px6: {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
  px8: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },
  
  // Border and Shadow
  shadow: {
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  },
  shadowMd: {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  borderGray100: {
    border: '1px solid #f3f4f6',
  },
  borderGray300: {
    border: '1px solid #d1d5db',
  },
  rounded: {
    borderRadius: '0.25rem',
  },
  roundedFull: {
    borderRadius: '9999px',
  },
  
  // Components
  button: {
    padding: '0.75rem 1.5rem',
    borderRadius: '0.25rem',
    fontWeight: 500,
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s',
  },
  buttonPrimary: {
    backgroundColor: '#111827',
    color: '#ffffff',
  },
  buttonSecondary: {
    backgroundColor: '#f3f4f6',
    color: '#111827',
  },
  form: {
    width: '100%',
  },
  formInput: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    marginBottom: '1rem',
    outlineColor: '#9ca3af',
  },
  
  // Header and Navigation
  header: {
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1rem 0',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
  },
  navItem: {
    padding: '0.5rem',
    cursor: 'pointer',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: '#6b7280',
    fontWeight: 400,
    transition: 'color 0.3s',
  },
  navItemActive: {
    color: '#111827',
    fontWeight: 500,
  },
  mobileNav: {
    position: 'fixed',
    top: '64px',
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTop: '1px solid #f3f4f6',
    padding: '1rem',
    zIndex: 50,
  },
  mobileNavItem: {
    padding: '0.75rem 0',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    cursor: 'pointer',
  },
  
  // Grid
  grid: {
    display: 'grid',
    gap: '2rem',
  },
  gridCols1: {
    gridTemplateColumns: '1fr',
  },
  gridCols2: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  gridCols3: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  
  // Image
  objectCover: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  
  // Hero Section
  hero: {
    position: 'relative',
    height: '80vh',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  
  // Portfolio Item
  portfolioItem: {
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    height: '250px',
  },
  portfolioOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    opacity: 0,
    transition: 'opacity 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Lightbox
  lightbox: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightboxControls: {
    position: 'absolute',
    color: '#ffffff',
    cursor: 'pointer',
    zIndex: 101,
  },
  
  // Testimonial
  testimonial: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  },
  
  // Footer
  footer: {
    backgroundColor: '#111827',
    color: '#ffffff',
    padding: '3rem 0',
  },
  footerLink: {
    color: '#9ca3af',
    transition: 'color 0.3s',
  },
  
  // Responsive (to be applied with media queries in the component)
  hidden: {
    display: 'none',
  },
  block: {
    display: 'block',
  },
  flex: {
    display: 'flex',
  },
};

// Media query function
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

// Safe window width function
const getWindowWidth = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth;
  }
  return 1200; // Default fallback
};

const PhotographyWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  
  // Enhanced responsive breakpoints
  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 767px)');
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const isLargeDesktop = useMediaQuery('(min-width: 1024px)');
  
  // Sample photography portfolio data
  const portfolioCategories = [
    {
      id: 'nature',
      title: 'Nature',
      description: 'Capturing the beauty of landscapes and wildlife',
      featured: true
    },
    {
      id: 'portrait',
      title: 'Portraits',
      description: 'Expressive human portraits in natural settings',
      featured: true
    },
    {
      id: 'architecture',
      title: 'Architecture',
      description: 'Modern and classical architectural photography',
      featured: false
    },
    {
      id: 'street',
      title: 'Street',
      description: 'Authentic moments from urban environments',
      featured: true
    }
  ];
  
  // Sample gallery images (using placeholders)
  const galleryImages = [
    { src: '/api/placeholder/800/600', alt: 'Mountain landscape at sunset', category: 'nature' },
    { src: '/api/placeholder/800/600', alt: 'Portrait of woman in natural light', category: 'portrait' },
    { src: '/api/placeholder/800/600', alt: 'Modern skyscraper from below', category: 'architecture' },
    { src: '/api/placeholder/800/600', alt: 'Street scene in rain', category: 'street' },
    { src: '/api/placeholder/800/600', alt: 'Ocean waves at dawn', category: 'nature' },
    { src: '/api/placeholder/800/600', alt: 'Elderly man portrait', category: 'portrait' },
    { src: '/api/placeholder/800/600', alt: 'Historical building facade', category: 'architecture' },
    { src: '/api/placeholder/800/600', alt: 'City market scene', category: 'street' }
  ];
  
  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      text: 'The photographs captured for our campaign exceeded our expectations. Professional, timely, and incredibly creative.'
    },
    {
      name: 'Michael Chen',
      role: 'Magazine Editor',
      text: 'We\'ve worked together on multiple shoots and the quality is consistently outstanding. A true professional with an artistic eye.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Wedding Client',
      text: 'Our wedding photos are absolute treasures. Every important moment was captured beautifully and naturally.'
    }
  ];
  
  // Function to handle image navigation in the lightbox
  const navigateGallery = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => 
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentImageIndex((prev) => 
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    }
  };
  
  // Close mobile menu when a section is selected
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activeSection]);
  
  // Handle orientation changes and window resizes
  useEffect(() => {
    const handleResize = () => {
      // Force re-render on orientation change
      setMobileMenuOpen(false);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div style={{ ...styles.bgGray50, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header/Navigation */}
      <header style={styles.header}>
        <div style={{ ...styles.container, ...styles.flexBetween }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Camera style={{ width: '2rem', height: '2rem', color: '#111827' }} />
            <span style={styles.text2xl}>LENS<span style={styles.fontBold}>CRAFT</span></span>
          </div>
          
          {/* Desktop Navigation */}
          <nav style={{ ...styles.nav, display: isDesktop ? 'flex' : 'none' }}>
            {['home', 'portfolio', 'about', 'services', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                style={{
                  ...styles.navItem,
                  ...(activeSection === section ? styles.navItemActive : {})
                }}
              >
                {section}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            style={{ background: 'none', border: 'none', padding: '0.5rem', cursor: 'pointer', display: isDesktop ? 'none' : 'block' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && !isDesktop && (
          <div style={styles.mobileNav}>
            <div style={{ ...styles.container, ...styles.flexColumn }}>
              {['home', 'portfolio', 'about', 'services', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  style={{
                    ...styles.mobileNavItem,
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    color: activeSection === section ? '#111827' : '#6b7280',
                    fontWeight: activeSection === section ? 500 : 400,
                  }}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
      
      {/* Main Content Area */}
      <main>
        {/* Home Section with Hero Image */}
        {activeSection === 'home' && (
          <section>
            <div style={{
              ...styles.hero,
              height: isMobile ? '60vh' : '80vh',  // Shorter height on mobile
            }}>
              <img 
                        src={require('../src/pic.png')}  
                alt="Beautiful landscape photograph" 
                style={styles.objectCover}
              />
              <div style={styles.heroOverlay}>
                <div style={{ padding: '0 1rem', maxWidth: '100%' }}>
                  <h1 style={{ 
                    ...styles.text4xl, 
                    ...styles.textWhite, 
                    marginBottom: '1rem',
                    fontSize: isMobile ? '1.75rem' : (isDesktop ? '3.75rem' : '2.25rem')
                  }}>
                    CAPTURING <span style={styles.fontBold}>MOMENTS</span>
                  </h1>
                  <p style={{ 
                    color: '#f3f4f6', 
                    fontSize: isMobile ? '1rem' : (isDesktop ? '1.25rem' : '1.125rem'),
                    maxWidth: '36rem',
                    margin: '0 auto 2rem auto'
                  }}>
                    Professional photography that tells your unique story through a creative lens
                  </p>
                  <button 
                    onClick={() => setActiveSection('portfolio')}
                    style={{
                      ...styles.button,
                      backgroundColor: '#ffffff',
                      color: '#111827',
                      padding: isMobile ? '0.5rem 1.25rem' : '0.75rem 1.5rem', // Smaller on mobile
                    }}
                  >
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
            
            {/* Featured Categories */}
            <div style={{ 
              ...styles.container, 
              paddingTop: isMobile ? '2.5rem' : '4rem',
              paddingBottom: isMobile ? '2.5rem' : '4rem',
            }}>
              <h2 style={{ 
                ...styles.text3xl, 
                ...styles.textCenter, 
                marginBottom: isMobile ? '2rem' : '3rem',
                fontSize: isMobile ? '1.5rem' : '1.875rem'
              }}>
                Featured <span style={styles.fontBold}>Work</span>
              </h2>
              <div style={{ 
                ...styles.grid, 
                gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : '1fr',
                gap: isMobile ? '1.5rem' : '2rem'
              }}>
                {portfolioCategories.filter(cat => cat.featured).map(category => (
                  <div 
                    key={category.id}
                    style={{
                      ...styles.portfolioItem,
                      height: isMobile ? '200px' : '250px'
                    }}
                    onClick={() => setActiveSection('portfolio')}
                  >
                    <img 
                             src={require('../src/pic.png')} 
                      alt={category.title} 
                      style={{
                        ...styles.objectCover,
                        transition: 'transform 0.5s',
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div 
                      style={{
                        ...styles.portfolioOverlay,
                        opacity: isMobile ? 0.3 : 0, // Always slightly visible on mobile
                      }}
                      onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                      onMouseOut={(e) => e.currentTarget.style.opacity = isMobile ? 0.3 : 0}
                    >
                      <div style={styles.textCenter}>
                        <h3 style={{ 
                          color: 'white', 
                          fontSize: isMobile ? '1.125rem' : '1.25rem', 
                          fontWeight: 500 
                        }}>
                          {category.title}
                        </h3>
                        <p style={{ 
                          color: '#e5e7eb', 
                          fontSize: '0.875rem', 
                          marginTop: '0.5rem',
                          opacity: isMobile ? 1 : 0,
                          transition: 'opacity 0.3s',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                        >
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Testimonials */}
            <div style={{ 
              ...styles.bgGray100, 
              paddingTop: isMobile ? '2.5rem' : '4rem',
              paddingBottom: isMobile ? '2.5rem' : '4rem',
            }}>
              <div style={styles.container}>
                <h2 style={{ 
                  ...styles.text3xl, 
                  ...styles.textCenter, 
                  marginBottom: isMobile ? '2rem' : '3rem',
                  fontSize: isMobile ? '1.5rem' : '1.875rem'
                }}>
                  Client <span style={styles.fontBold}>Testimonials</span>
                </h2>
                <div style={{ 
                  ...styles.grid, 
                  gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : '1fr',
                  gap: isMobile ? '1.5rem' : '2rem',
                }}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} style={styles.testimonial}>
                      <p style={{ ...styles.textGray700, fontStyle: 'italic', marginBottom: '1rem' }}>"{testimonial.text}"</p>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ 
                          width: '2.5rem', 
                          height: '2.5rem', 
                          backgroundColor: '#d1d5db', 
                          borderRadius: '50%', 
                          marginRight: '0.75rem' 
                        }}></div>
                        <div>
                          <p style={{ ...styles.textGray900, fontWeight: 500 }}>{testimonial.name}</p>
                          <p style={{ ...styles.textGray500, fontSize: '0.875rem' }}>{testimonial.role}</p>
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
            ...styles.container, 
            paddingTop: isMobile ? '2.5rem' : '4rem',
            paddingBottom: isMobile ? '2.5rem' : '4rem',
          }}>
            <h1 style={{ 
              ...styles.text4xl, 
              ...styles.textCenter, 
              marginBottom: isMobile ? '2rem' : '3rem',
              fontSize: isMobile ? '2rem' : '2.25rem'
            }}>
              My <span style={styles.fontBold}>Portfolio</span>
            </h1>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              marginBottom: isMobile ? '1.5rem' : '2rem' 
            }}>
              <button style={{ 
                margin: '0.5rem', 
                padding: isMobile ? '0.375rem 0.75rem' : '0.5rem 1rem', 
                backgroundColor: '#111827', 
                color: 'white', 
                borderRadius: '0.25rem',
                fontSize: '0.875rem',
                border: 'none',
                cursor: 'pointer',
              }}>All</button>
              {portfolioCategories.map(cat => (
                <button key={cat.id} style={{ 
                  margin: '0.5rem', 
                  padding: isMobile ? '0.375rem 0.75rem' : '0.5rem 1rem', 
                  backgroundColor: '#f3f4f6', 
                  color: '#111827', 
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                >
                  {cat.title}
                </button>
              ))}
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile 
                ? '1fr' 
                : (isTablet 
                  ? 'repeat(2, 1fr)' 
                  : (isLargeDesktop 
                    ? 'repeat(4, 1fr)' 
                    : 'repeat(3, 1fr)'
                  )
                ), 
              gap: isMobile ? '0.75rem' : '1rem'
            }}>
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  style={{ 
                    position: 'relative', 
                    overflow: 'hidden', 
                    cursor: 'pointer',
                    height: isMobile ? '12rem' : '16rem',
                  }}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                            src={require('../src/pic.png')} 
                    alt={image.alt} 
                    style={styles.objectCover}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'black',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = 0.5}
                  onMouseOut={(e) => e.currentTarget.style.opacity = 0}
                  >
                    <div style={{
                      transform: 'translateY(1rem)',
                      transition: 'transform 0.3s',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <p style={{ color: 'white', textAlign: 'center', padding: '0 1rem' }}>{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Simple lightbox with touch support */}
            {currentImageIndex !== null && (
              <div 
                style={styles.lightbox}
                onTouchStart={(e) => {
                  const touchStartX = e.touches[0].clientX;
                  e.currentTarget.dataset.touchStartX = touchStartX;
                }}
                onTouchEnd={(e) => {
                  const touchEndX = e.changedTouches[0].clientX;
                  const touchStartX = parseInt(e.currentTarget.dataset.touchStartX || '0');
                  const difference = touchEndX - touchStartX;
                  
                  // If swipe distance is significant enough (more than 50px)
                  if (Math.abs(difference) > 50) {
                    if (difference > 0) {
                      // Swiped right, go to previous image
                      navigateGallery('prev');
                    } else {
                      // Swiped left, go to next image
                      navigateGallery('next');
                    }
                  }
                }}
              >
                <button 
                  style={{ 
                    ...styles.lightboxControls, 
                    top: isMobile ? '0.5rem' : '1rem', 
                    right: isMobile ? '0.5rem' : '1rem',
                  }}
                  onClick={() => setCurrentImageIndex(null)}
                >
                  <X size={isMobile ? 24 : 32} />
                </button>
                <button 
                  style={{ 
                    ...styles.lightboxControls, 
                    left: isMobile ? '0.5rem' : '1rem',
                    display: isMobile ? 'none' : 'block', // Hide on mobile, use swipe instead
                  }}
                  onClick={() => navigateGallery('prev')}
                >
                  <ChevronLeft size={isMobile ? 32 : 48} />
                </button>
                <img 
                            src={require('../src/pic.png')} 
                  alt={galleryImages[currentImageIndex].alt} 
                  style={{ maxHeight: '90vh', maxWidth: '90%' }}
                />
                <button 
                  style={{ 
                    ...styles.lightboxControls, 
                    right: isMobile ? '0.5rem' : '1rem',
                    display: isMobile ? 'none' : 'block', // Hide on mobile, use swipe instead
                  }}
                  onClick={() => navigateGallery('next')}
                >
                  <ChevronRight size={isMobile ? 32 : 48} />
                </button>
                <p style={{ 
                  position: 'absolute', 
                  bottom: isMobile ? '0.5rem' : '1rem', 
                  color: 'white', 
                  textAlign: 'center', 
                  width: '100%',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                }}>
                  {galleryImages[currentImageIndex].alt}
                </p>
                {isMobile && (
                  <div style={{
                    position: 'absolute',
                    bottom: '3rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.75rem',
                  }}>
                    Swipe left or right to navigate
                  </div>
                )}
              </div>
            )}
          </section>
        )}
        
        {/* About Section */}
        {activeSection === 'about' && (
          <section style={{ 
            ...styles.container, 
            paddingTop: isMobile ? '2.5rem' : '4rem',
            paddingBottom: isMobile ? '2.5rem' : '4rem',
          }}>
            <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
              <h1 style={{ 
                ...styles.text4xl, 
                ...styles.textCenter, 
                marginBottom: isMobile ? '2rem' : '3rem',
                fontSize: isMobile ? '2rem' : '2.25rem'
              }}>
                About <span style={styles.fontBold}>Me</span>
              </h1>
              
              <div style={{ 
                display: 'flex', 
                flexDirection: isDesktop ? 'row' : 'column',
                alignItems: isDesktop ? 'flex-start' : 'center',
                gap: isMobile ? '1.5rem' : '2rem',
                marginBottom: isMobile ? '2.5rem' : '4rem'
              }}>
                <img 
                   src={require('../src/pic.png')} 
                  alt="Photographer portrait" 
                  style={{ 
                    width: isMobile ? '12rem' : '16rem', 
                    height: isMobile ? '15rem' : '20rem', 
                    objectFit: 'cover' 
                  }}
                />
                <div>
                  <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>John Doe</h2>
                  <p style={{ ...styles.textGray700, marginBottom: '1rem', fontSize: isMobile ? '0.938rem' : '1rem' }}>
                    With over 15 years of experience as a professional photographer, I've had the privilege of
                    working with clients across various industries, from fashion and corporate to weddings and wildlife.
                  </p>
                  <p style={{ ...styles.textGray700, marginBottom: '1rem', fontSize: isMobile ? '0.938rem' : '1rem' }}>
                    My approach combines technical expertise with an artistic vision to capture authentic moments
                    and create compelling visual stories. I believe photography is about preserving emotions and
                    experiences that might otherwise be forgotten.
                  </p>
                  <p style={{ ...styles.textGray700, fontSize: isMobile ? '0.938rem' : '1rem' }}>
                    Based in New York City but available for travel worldwide, I bring passion and dedication to
                    every project, ensuring each client receives personalized attention and stunning results.
                  </p>
                </div>
              </div>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : (isTablet ? 'repeat(3, 1fr)' : '1fr'),
                gap: isMobile ? '1.5rem' : '2rem',
                marginBottom: isMobile ? '2.5rem' : '4rem'
              }}>
                <div style={styles.textCenter}>
                  <div style={{ fontSize: isMobile ? '1.875rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>15+</div>
                  <p style={{ ...styles.textGray600, fontSize: isMobile ? '0.875rem' : '1rem' }}>Years Experience</p>
                </div>
                <div style={styles.textCenter}>
                  <div style={{ fontSize: isMobile ? '1.875rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>500+</div>
                  <p style={{ ...styles.textGray600, fontSize: isMobile ? '0.875rem' : '1rem' }}>Happy Clients</p>
                </div>
                <div style={styles.textCenter}>
                  <div style={{ fontSize: isMobile ? '1.875rem' : '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>20K+</div>
                  <p style={{ ...styles.textGray600, fontSize: isMobile ? '0.875rem' : '1rem' }}>Photos Delivered</p>
                </div>
              </div>
              
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>My Equipment</h2>
              <p style={{ ...styles.textGray700, marginBottom: '1rem', fontSize: isMobile ? '0.938rem' : '1rem' }}>
                I use professional-grade equipment to ensure the highest quality results:
              </p>
              <ul style={{ 
                listStyleType: 'disc', 
                paddingLeft: isMobile ? '1.25rem' : '1.5rem', 
                color: '#374151',
                marginBottom: '2rem',
                fontSize: isMobile ? '0.938rem' : '1rem'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>Canon EOS R5 & Sony Alpha a7R IV Mirrorless Cameras</li>
                <li style={{ marginBottom: '0.5rem' }}>Selection of prime lenses (24mm, 35mm, 50mm, 85mm, 135mm)</li>
                <li style={{ marginBottom: '0.5rem' }}>Professional lighting equipment for studio and on-location shoots</li>
                <li>Latest editing software and calibrated displays for post-processing</li>
              </ul>
            </div>
          </section>
        )}
        
        {/* Services Section */}
        {activeSection === 'services' && (
          <section style={{ 
            ...styles.container, 
            paddingTop: isMobile ? '2.5rem' : '4rem',
            paddingBottom: isMobile ? '2.5rem' : '4rem',
          }}>
            <h1 style={{ 
              ...styles.text4xl, 
              ...styles.textCenter, 
              marginBottom: isMobile ? '2rem' : '3rem',
              fontSize: isMobile ? '2rem' : '2.25rem'
            }}>
              My <span style={styles.fontBold}>Services</span>
            </h1>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: isMobile 
                ? '1fr' 
                : (isTablet 
                  ? 'repeat(2, 1fr)' 
                  : (isLargeDesktop 
                    ? 'repeat(3, 1fr)' 
                    : 'repeat(2, 1fr)'
                  )
                ),
              gap: isMobile ? '1.25rem' : '2rem',
              maxWidth: '72rem',
              margin: '0 auto'
            }}>
              {[
                {
                  title: 'Portrait Photography',
                  description: 'Professional portraits for individuals, couples, and families that capture personality and emotion in natural or studio settings.',
                  price: 'Starting at $350'
                },
                {
                  title: 'Wedding Photography',
                  description: 'Comprehensive wedding day coverage with a blend of candid moments and artistic portraits to tell your complete love story.',
                  price: 'Starting at $2,500'
                },
                {
                  title: 'Commercial Photography',
                  description: 'High-quality product and brand imagery for businesses looking to elevate their marketing materials and online presence.',
                  price: 'Starting at $800'
                },
                {
                  title: 'Event Coverage',
                  description: 'Documentary-style photography for corporate events, conferences, parties, and other special occasions.',
                  price: 'Starting at $500'
                },
                {
                  title: 'Fine Art Photography',
                  description: 'Limited edition artistic prints for homes, offices, and galleries, focusing on landscapes, abstract, and conceptual work.',
                  price: 'Starting at $250'
                },
                {
                  title: 'Photo Editing & Retouching',
                  description: 'Professional editing and retouching services to enhance existing photographs or restore old family photos.',
                  price: 'Starting at $75/hr'
                }
              ].map((service, index) => (
                <div key={index} style={{ 
                  ...styles.bgWhite, 
                  ...styles.p6, 
                  ...(isMobile ? { padding: '1.25rem' } : {}),
                  ...styles.shadow, 
                  ...styles.borderGray100 
                }}>
                  <div style={{ 
                    width: isMobile ? '2.5rem' : '3rem', 
                    height: isMobile ? '2.5rem' : '3rem', 
                    backgroundColor: '#111827', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <Camera style={{ color: 'white', width: isMobile ? '1.25rem' : '1.5rem', height: isMobile ? '1.25rem' : '1.5rem' }} />
                  </div>
                  <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: 500, marginBottom: '0.5rem' }}>{service.title}</h3>
                  <p style={{ ...styles.textGray600, marginBottom: '1rem', fontSize: isMobile ? '0.875rem' : '1rem' }}>{service.description}</p>
                  <p style={{ ...styles.textGray900, fontWeight: 500, fontSize: isMobile ? '0.938rem' : '1rem' }}>{service.price}</p>
                </div>
              ))}
            </div>
            
            <div style={{ 
              maxWidth: '56rem', 
              margin: '4rem auto 0', 
              ...styles.bgGray100, 
              padding: isMobile ? '1.5rem' : '2rem'
            }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.25rem' : '1.5rem', 
                fontWeight: 500, 
                textAlign: 'center', 
                marginBottom: isMobile ? '1.25rem' : '1.5rem' 
              }}>
                The Process
              </h2>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : (isTablet ? 'repeat(3, 1fr)' : '1fr'),
                gap: isMobile ? '1.5rem' : '2rem'
              }}>
                {[
                  {
                    step: '01',
                    title: 'Consultation',
                    description: 'We discuss your vision, requirements, and expectations to plan the perfect photoshoot.'
                  },
                  {
                    step: '02',
                    title: 'Photography Session',
                    description: 'Professional photography session at the agreed location with state-of-the-art equipment.'
                  },
                  {
                    step: '03',
                    title: 'Editing & Delivery',
                    description: 'Careful selection and professional editing of the best images, delivered in your preferred format.'
                  }
                ].map((process, index) => (
                  <div key={index} style={styles.textCenter}>
                    <div style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#d1d5db', marginBottom: '0.5rem' }}>{process.step}</div>
                    <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: 500, marginBottom: '0.5rem' }}>{process.title}</h3>
                    <p style={{ ...styles.textGray600, fontSize: isMobile ? '0.875rem' : '1rem' }}>{process.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section style={{ 
            ...styles.container, 
            paddingTop: isMobile ? '2.5rem' : '4rem',
            paddingBottom: isMobile ? '2.5rem' : '4rem',
          }}>
            <h1 style={{ 
              ...styles.text4xl, 
              ...styles.textCenter, 
              marginBottom: isMobile ? '2rem' : '3rem',
              fontSize: isMobile ? '2rem' : '2.25rem'
            }}>
              Get In <span style={styles.fontBold}>Touch</span>
            </h1>
            
            <div style={{ 
              maxWidth: '56rem', 
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : '1fr',
              gap: isMobile ? '3rem' : '2rem'
            }}>
              <div>
                <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>Contact Information</h2>
                <p style={{ 
                  ...styles.textGray600, 
                  marginBottom: '1.5rem',
                  fontSize: isMobile ? '0.938rem' : '1rem'
                }}>
                  Have a project in mind or want to discuss a potential collaboration? Reach out through the form or using the contact details below.
                </p>
                
                <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <p style={{ fontWeight: 500, fontSize: isMobile ? '0.938rem' : '1rem' }}>Email</p>
                    <p style={{ ...styles.textGray600, fontSize: isMobile ? '0.938rem' : '1rem' }}>contact@lenscraftphotography.com</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 500, fontSize: isMobile ? '0.938rem' : '1rem' }}>Phone</p>
                    <p style={{ ...styles.textGray600, fontSize: isMobile ? '0.938rem' : '1rem' }}>+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 500, fontSize: isMobile ? '0.938rem' : '1rem' }}>Studio Address</p>
                    <p style={{ ...styles.textGray600, fontSize: isMobile ? '0.938rem' : '1rem' }}>123 Creative Lane, Suite 400<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: 500, marginBottom: '0.75rem' }}>Business Hours</h3>
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.5rem',
                  color: '#4b5563',
                  fontSize: isMobile ? '0.938rem' : '1rem'
                }}>
                  <div>Monday - Friday</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div>Saturday</div>
                  <div>10:00 AM - 4:00 PM</div>
                  <div>Sunday</div>
                  <div>Closed</div>
                </div>
              </div>
              
              <div>
                <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>Send a Message</h2>
                <form style={styles.form}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label 
                      htmlFor="name" 
                      style={{ 
                        display: 'block', 
                        color: '#374151', 
                        marginBottom: '0.25rem',
                        fontSize: isMobile ? '0.938rem' : '1rem'
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      style={{
                        ...styles.formInput,
                        fontSize: isMobile ? '16px' : 'inherit', // Prevents zoom on iOS
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label 
                      htmlFor="email" 
                      style={{ 
                        display: 'block', 
                        color: '#374151', 
                        marginBottom: '0.25rem',
                        fontSize: isMobile ? '0.938rem' : '1rem'
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      style={{
                        ...styles.formInput,
                        fontSize: isMobile ? '16px' : 'inherit', // Prevents zoom on iOS
                      }}
                      placeholder="Your email"
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label 
                      htmlFor="subject" 
                      style={{ 
                        display: 'block', 
                        color: '#374151', 
                        marginBottom: '0.25rem',
                        fontSize: isMobile ? '0.938rem' : '1rem'
                      }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      style={{
                        ...styles.formInput,
                        fontSize: isMobile ? '16px' : 'inherit', // Prevents zoom on iOS
                      }}
                      placeholder="Subject"
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label 
                      htmlFor="message" 
                      style={{ 
                        display: 'block', 
                        color: '#374151', 
                        marginBottom: '0.25rem',
                        fontSize: isMobile ? '0.938rem' : '1rem'
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={isMobile ? "4" : "5"}
                      style={{
                        ...styles.formInput,
                        fontSize: isMobile ? '16px' : 'inherit', // Prevents zoom on iOS
                      }}
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#111827',
                      color: 'white',
                      padding: isMobile ? '0.625rem 1.25rem' : '0.75rem 1.5rem',
                      fontWeight: 500,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                      borderRadius: '0.25rem',
                      fontSize: isMobile ? '0.938rem' : '1rem'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#111827'}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>
      
      {/* Footer */}
      <footer style={{
        ...styles.footer,
        padding: isMobile ? '2rem 0' : '3rem 0',
      }}>
        <div style={styles.container}>
          <div style={{ 
            display: 'flex', 
            flexDirection: isDesktop ? 'row' : 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: isMobile ? '1.5rem' : '2rem'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              marginBottom: isDesktop ? 0 : '1rem'
            }}>
              <Camera style={{ width: '2rem', height: '2rem', color: 'white' }} />
              <span style={{ ...styles.text2xl, color: 'white' }}>
                LENS<span style={styles.fontBold}>CRAFT</span>
              </span>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: isMobile ? '0.75rem' : '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {['Facebook', 'Instagram', 'Twitter', 'Pinterest'].map(social => (
                <a 
                  key={social} 
                  href="#" 
                  style={{ 
                    ...styles.footerLink,
                    fontSize: isMobile ? '0.875rem' : '1rem'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <hr style={{ borderColor: '#1f2937', marginBottom: isMobile ? '1.5rem' : '2rem' }} />
          
          <div style={{ 
            display: 'flex', 
            flexDirection: isDesktop ? 'row' : 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <p style={{ 
              color: '#9ca3af',
              marginBottom: isDesktop ? 0 : '1rem',
              fontSize: isMobile ? '0.875rem' : '1rem',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              © {new Date().getFullYear()} LENSCRAFT Photography. All rights reserved.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: isMobile ? '1rem' : '1.5rem',
              flexWrap: isMobile ? 'wrap' : 'nowrap',
              justifyContent: 'center'
            }}>
              <a 
                href="#" 
                style={{ 
                  ...styles.footerLink,
                  fontSize: '0.875rem'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                style={{ 
                  ...styles.footerLink,
                  fontSize: '0.875rem'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                style={{ 
                  ...styles.footerLink,
                  fontSize: '0.875rem'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhotographyWebsite;