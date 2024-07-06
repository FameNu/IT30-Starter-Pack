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
      },
      colors: {
        'base-main': '#544022',
        sproutbara: '#2DEAB7',
        'sproutbara-sec': '#88F2BC',
        sunnybara: '#FEA655',
        'sunnybara-sec': '#F7DDB0',
        rainybara: '#7DA3EC',
        'rainybara-sec': '#82AFBA',
        russetbara: '#FBBD25',
        'russetbara-sec': '#FFE88E',
        cozybara: '#BA76EA',
        'cozybara-sec': '#E7CFFF'
      },
      backgroundColor: {
        sproutbara: '#2DEAB7',
        'sproutbara-sec': '#88F2BC',
        sunnybara: '#FEA655',
        'sunnybara-sec': '#F7DDB0',
        rainybara: '#7DA3EC',
        'rainybara-sec': '#82AFBA',
        russetbara: '#FBBD25',
        'russetbara-sec': '#FFE88E',
        cozybara: '#BA76EA',
        'cozybara-sec': '#E7CFFF'
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
          secondary: '#EFE69F'
        }
      }
    ]
  }
}

