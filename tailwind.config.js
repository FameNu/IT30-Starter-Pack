/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'bounce-from-base': {
          '0%, 100%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '50%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 1, 1)',
          },
        },
      },
      animation: {
        'bounce-base': 'bounce-from-base 900ms infinite',
      },
      backgroundImage: {
        'main-bg': "url('/bg/bg6.png')",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"]
  }
};

