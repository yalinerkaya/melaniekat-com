const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./{app,pages}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 8s ease infinite',
      },
      backgroundImage: {
        'conic-rainbow':
          'conic-gradient(from 33deg, oklch(70.2% 0.192 234.1), oklch(66.3% 0.3018 359.7), oklch(64.33% 0.2908 26.26), oklch(81.2% 0.2579 130.7), oklch(70.2% 0.192 234.1))',
        'linear-blues':
          'linear-gradient(-45deg, oklch(66.3% 0.3018 359.7), oklch(70.2% 0.192 234.1))',
        'linear-greens':
          'linear-gradient(-45deg, oklch(70.2% 0.192 234.1), oklch(81.2% 0.2579 130.7))',
        'linear-reds':
          'linear-gradient(45deg, oklch(66.3% 0.3018 359.7), oklch(64.33% 0.2908 26.26))',
      },
      backgroundSize: {
        '2x': '200% 200%',
        '3x': '300% 300%',
      },
      boxShadow: {
        outer:
          'inset 0 0 5px oklch(0 0 0 / .2), 0 2px 10px oklch(0 0 0 / .1), 0 20px 25px -5px oklch(0 0 0 / .05), 0 8px 10px -5px oklch(60% 0 0 / .3)',
        inner:
          'inset 0 3px 1px 0 oklch(100% 0 0 / .8), inset 0 -10px 10px 0 oklch(0 0 0 / .1), 0 0 10px oklch(0 0 0 / .2)',
      },
      colors: {
        p3: {
          blue: 'oklch(70.2% 0.192 234.1)',
          green: 'oklch(81.2% 0.2579 130.7)',
          red: 'oklch(64.33% 0.2908 26.26)',
          pink: 'oklch(66.3% 0.3018 359.7)',
        },
      },
      textShadow: {
        blue: '0 0 10px oklch(70.2% 0.192 234.1 / .3)',
        green: '0 0 10px oklch(81.2% 0.2579 130.7 / .3)',
        red: '0 0 10px oklch(64.33% 0.2908 26.26 / .3)',
        pink: '0 0 10px oklch(66.3% 0.3018 359.7 / .3)',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: 'top left' },
          '25%': { backgroundPosition: 'bottom left' },
          '50%': { backgroundPosition: 'bottom right' },
          '75%': { backgroundPosition: 'top right' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': value => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
