/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B4FA8',
        background: '#F5EFE6',
        dark: '#0a0a0a',
        darkCard: '#1a1a1a',
        darkBorder: '#2a2a2a',
        accent: '#F8EDDD',
      },
      borderRadius: {
        card: '20px',
      },
      boxShadow: {
        card: '0 8px 32px rgba(0, 0, 0, 0.5)',
        glow: '0 0 40px rgba(59, 79, 168, 0.3)',
      },
      fontFamily: {
        genty: ['var(--font-genty)', 'cursive'],
      },
    },
  },
  plugins: [],
}
