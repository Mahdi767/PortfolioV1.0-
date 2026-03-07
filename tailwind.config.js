/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './js/**/*.{js,ts}', './css/**/*.css'],
  theme: {
    extend: {
      colors: {
        'brand-bg': 'var(--color-bg)',
        'brand-card': 'var(--color-surface)',
        'brand-border': 'var(--color-border)',
        'brand-primary': 'var(--color-accent)',
        'brand-primary-hover': 'var(--color-accent-hover)',
        'brand-text': 'var(--color-text-main)',
        'brand-muted': 'var(--color-text-muted)',
      },
      boxShadow: {
        card: '0 18px 40px -24px rgba(1, 4, 9, 0.85)',
      },
    },
  },
  plugins: [],
};
