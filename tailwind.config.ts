import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#42124F',
          'purple-dark': '#2D0B36',
          'purple-light': '#5A1B6B',
          charcoal: '#111015',
          'charcoal-card': '#18161D',
          'charcoal-border': '#26232D',
          ivory: '#F7F4EE',
          'ivory-muted': '#EBE6DC',
          champagne: '#C7A45B',
          'champagne-light': '#DBC07E',
          body: '#242127',
          muted: '#6E6B74',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'DM Serif Display', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'Manrope', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'subtle-pulse': 'subtlePulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
