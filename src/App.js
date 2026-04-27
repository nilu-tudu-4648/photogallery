import React, { useState, useEffect, useCallback } from 'react';
import { designTokens } from './styles/designTokens';
import { useMediaQuery } from './hooks/useMediaQuery';
import { galleryImages } from './data/data';

// Components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { Testimonials } from './components/Testimonials';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const PhotographyWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [portfolioFilter, setPortfolioFilter] = useState('all');

  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 767px)');
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const navigateGallery = useCallback(
    (direction) => {
      const filtered = galleryImages.filter((image) => portfolioFilter === 'all' || image.category === portfolioFilter);
      if (direction === 'next') {
        setCurrentImageIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
      } else {
        setCurrentImageIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
      }
    },
    [portfolioFilter]
  );

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
  }, [currentImageIndex, navigateGallery]);

  return (
    <div
      style={{
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        backgroundColor: designTokens.colors.primary[50],
      }}
    >
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isDesktop={isDesktop}
      />

      <main>
        {activeSection === 'home' && (
          <section>
            <Hero isMobile={isMobile} isDesktop={isDesktop} setActiveSection={setActiveSection} />
            <FeaturedWork
              isMobile={isMobile}
              isDesktop={isDesktop}
              setActiveSection={setActiveSection}
            />
            <Testimonials isMobile={isMobile} isDesktop={isDesktop} />
          </section>
        )}

        {activeSection === 'portfolio' && (
          <Portfolio
            isMobile={isMobile}
            isTablet={isTablet}
            isDesktop={isDesktop}
            portfolioFilter={portfolioFilter}
            setPortfolioFilter={setPortfolioFilter}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            navigateGallery={navigateGallery}
          />
        )}

        {activeSection === 'about' && (
          <About isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
        )}

        {activeSection === 'services' && (
          <Services
            isMobile={isMobile}
            isTablet={isTablet}
            isDesktop={isDesktop}
            setActiveSection={setActiveSection}
          />
        )}

        {activeSection === 'contact' && <Contact isMobile={isMobile} isDesktop={isDesktop} />}
      </main>

      <Footer isMobile={isMobile} isDesktop={isDesktop} setActiveSection={setActiveSection} />
    </div>
  );
};

export default PhotographyWebsite;
