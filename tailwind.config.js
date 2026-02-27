// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // xm: fz 10px
      // sm: fz 11px, lh 16px
      // base: fz 13px, lh 19px
      // lg: fz 15px, lh 22px
      // xl: fz 20px, lh 30px
      opacity: {
        87: '0.87'
      },
      fontSize: {
        xs: '0.625rem',
        sm: [
          '0.6875rem',
          {
            lineHeight: '1rem'
          }
        ],
        base: [
          '0.8125rem',
          {
            lineHeight: '1.1875rem'
          }
        ],
        lg: [
          '0.9375rem',
          {
            lineHeight: '1.375rem'
          }
        ],
        xl: [
          '1.25rem',
          {
            lineHeight: '1.875rem',
            fontWeight: 700
          }
        ],
        '2xl': [
          '1.5rem',
          {
            lineHeight: '2rem',
            letterSpacing: '-0.01em',
            fontWeight: '500'
          }
        ],
        '3xl': [
          '1.875rem',
          {
            lineHeight: '3rem',
            letterSpacing: '-0.02em',
            fontWeight: '700'
          }
        ]
      },
      colors: {
        'site-background': 'var(--color-background-canvas)', // '#F2F2F2' || #0C1131,
        'system-white-50': 'rgba(255,255,255, 0.5)',
        'system-grey': '#8C8F95',
        'blue-50': '#E3E5F8',
        'blue-100': '#C6CBF0',
        'blue-200': '#8D97E2',
        'blue-300': '#5060D2',
        'blue-400': '#2D3CAF',
        'blue-500': '#1E2875',
        'blue-600': '#18205D',
        'blue-700': '#121845',
        'blue-800': '#0C1131',
        'blue-900': '#060818',

        'light-blue-50': '#F2F6FA',
        'light-blue-200': '#E8EFF7',
        'light-blue-300': '#AAC7E9',

        // status colors
        'status-green': '#229B81',
        'status-red': '#FF5050',
        'status-error': '#C81919',
        'status-done': '#66B245',

        'status-neutral': '#869297',
        'status-ongoing': '#0085BA',
        'status-warning': '#FF892C',
        'status-warning-black': '#000000',

        // steps green
        'green-200': '#A7D3C9',

        // old greys
        'grey-600': '#4B5563',
        'grey-700': '#374151',
        'grey-800': '#1F2937',
        'grey-900': '#111827',

        // pinia
        'pinia-200': '#BBD8D8',
        'pinia-300': '#74B2B2',
        'pinia-400': '#007373',
        'pinia-500': '#004949',

        // greys
        'grey-100': 'rgba(0, 0, 0, 0.05)',
        'grey-200': 'rgba(0, 0, 0, 0.16)',
        'grey-300': 'rgba(0, 0, 0, 0.26)',
        'grey-400': 'rgba(0, 0, 0, 0.54)',
        'grey-500': 'rgba(0, 0, 0, 0.87)',

        'brand-1': '#00A1DF', //cerulean
        'brand-2': '#0085BA', //bondi
        'brand-3': 'var(--color-cerulean-900)', //denim

        'card-bg': 'var(--card-unselected-default-background-color)',

        // This is messy - but the new grey-500 is not the same as the old one, and they aren't close. this is a temporary fix until designs are matched
        'old-grey-500': '#6B7280',

        //new colors
        //text interactions
        primary: 'var(--color-interaction-primary-background-default)', // '#0f78a5',
        'primary-dark': 'var(--color-interaction-primary-background-hover)', // '#daf3fd',
        'primary-darker': 'var(--color-interaction-primary-background-pressed)', // '#ace8ff',
        'primary-disabled': 'var(--color-interaction-primary-foreground-disabled)', // '#99a3a8',

        //buttons
        'btn-default': 'var(--button-primary-default-background-color)', // #00a1df;
        'btn-hover': 'var(--button-primary-hover-background-color)', // #0f78a5
        'btn-pressed': 'var(--button-primary-pressed-background-color)', // #155675

        //input
        'input-focus': 'var(--color-outline-focus)',

        'selection-dark': 'var(--color-selection-select-dark)',
        'selection-light': 'var(--color-selection-select-light)',
      },
      boxShadow: {
        lg: '0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06);',
        md: '0px 4px 8px rgba(50, 50, 71, 0.1), 0px 4px 59px rgba(50, 50, 71, 0.06);',
        xs: '0px 1px 2px rgba(50, 50, 71, 0.05);',
        card: '0px 1px 1px rgba(0, 0, 0, 0.09), 0px 1px 2px rgba(0, 0, 0, 0.24)',
        dropdown: '0px 1px 3px 0px #00000040, 0px 1px 7px 0px #00000040',
        new: '0px 1px 4px 0px #00000040, 0px 1px 1px 0px #00000040'
      },
      spacing: {
        25: '6.25rem',
        42: '10.5rem',
        59: '14.75rem',
        89: '22.25rem',
        240: '60rem'
      },
      flex: {
        '1/2': '0.5'
      }
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1800px'
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['var(--font-families-main)', ...defaultTheme.fontFamily.sans],
      body: ['var(--font-families-main)', ...defaultTheme.fontFamily.sans],
      heading: ['Decima Round', ...defaultTheme.fontFamily.sans]
    }
  },
  safelist: [
    'bg-black',
    'bg-green-500',
    'bg-gray-500',
    'bg-blue-300',
    'bg-status-error',
    'bg-status-done',
    'bg-status-neutral',
    'bg-status-ongoing'
  ]
  // plugins: [require('@tailwindcss/forms')],
};
