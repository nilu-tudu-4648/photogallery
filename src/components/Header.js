import React from 'react';
import { Camera, Menu, X } from 'lucide-react';
import { styles } from '../styles/styles';
import { designTokens } from '../styles/designTokens';
import { navItems } from '../data/data';

export const Header = ({
  activeSection,
  setActiveSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  isDesktop,
}) => {
  return (
    <header style={styles.header}>
      <div style={{ ...styles.container, ...styles.flexBetween }}>
        {/* Logo */}
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
  );
};
