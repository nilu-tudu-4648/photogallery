// Modern Design System - 2024 Aesthetic
export const designTokens = {
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
