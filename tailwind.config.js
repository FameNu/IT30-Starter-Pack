/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'bounce-from-base': {
          '0%, 100%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '50%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 1, 1)'
          }
        }
      },
      animation: {
        'bounce-base': 'bounce-from-base 900ms infinite'
      },
      fontFamily: {
        caprasimo: ['Caprasimo', 'Noto Sans Thai', 'sans-serif'],
        notosansthai: ['Noto Sans Thai', 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#FFC872',
          secondary: '#EFE69F',
          primarySprout: '#2DEAB7',
          secondarySprout: '#88F2BC',
          primarySunny: '#FEA655',
          secondarySunny: '#F7DDB0',
          primaryRainy: '#7DA3EC',
          secondaryRainy: '#82AFBA',
          primaryRusset: '#FBBD25',
          secondaryRusset: '#FFE88E',
          primaryCozy: '#BA76EA',
          secondaryCozy: '#E7CFFF'
        }
      }
    ]
  }
}

