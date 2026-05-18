/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Bg layers — near-black with subtle tint, OLED-friendly
        ink: {
          950: '#070710',
          900: '#0b0b16',
          800: '#11111e',
          700: '#1a1a2a',
          600: '#272739',
          500: '#3a3a52',
          400: '#5a5a78',
          300: '#8a8aa8',
          200: '#bcbcd0',
          100: '#e6e6f0',
          50:  '#f6f6fb',
        },
        // Primary accent — confident, not corporate. Saturated cyan
        // with a slight aqua warmth. Used sparingly for CTAs + glows.
        accent: {
          50:  '#e7fbff',
          100: '#c9f5ff',
          200: '#94ecff',
          300: '#58dfff',
          400: '#1ccaff',
          500: '#00b3f0', // primary CTA
          600: '#0091cc',
          700: '#0075a8',
          800: '#005c87',
          900: '#003d5c',
        },
        // Warm secondary — used for badges, sparingly
        amber: {
          400: '#ffb74a',
          500: '#ff9d1c',
        },
        // Semantic
        success: '#22c55e',
        warning: '#f59e0b',
        danger:  '#ef4444',
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Display scale — fluid, clamp-based
        'display-2xl': ['clamp(3.5rem, 9vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-xl':  ['clamp(2.5rem, 6vw, 5rem)',  { lineHeight: '1.0',  letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg':  ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-md':  ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      maxWidth: {
        'page': '1280px',
        'prose-tight': '60ch',
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 8rem)',
        'section-sm': 'clamp(2.5rem, 6vw, 4rem)',
      },
      backgroundImage: {
        'mesh-hero': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,179,240,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(255,157,28,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 20% 70%, rgba(0,179,240,0.10), transparent 60%)',
        'grid-faint': 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-faint': '64px 64px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,179,240,0.15)' },
          '50%':       { boxShadow: '0 0 40px rgba(0,179,240,0.35)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-accent': '0 0 0 1px rgba(0,179,240,0.5), 0 0 40px rgba(0,179,240,0.25)',
        'glow-soft':   '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)',
        'inset-border': 'inset 0 0 0 1px rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
};
