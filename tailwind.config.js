// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(-2deg)' },
          '25%': { transform: 'translate(3px, -4px) rotate(0deg)' },
          '50%': { transform: 'translate(-2px, -6px) rotate(2deg)' },
          '75%': { transform: 'translate(-4px, -2px) rotate(0deg)' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      colors: {
        'blue': {
          500: '#3B82F6',
          600: '#2563EB',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            a: {
              color: '#3B82F6',
              '&:hover': {
                color: '#2563EB',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
};