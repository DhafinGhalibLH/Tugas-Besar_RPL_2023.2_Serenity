import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9EE56E',
        primary2: '#2C9378',
        secondary: '#FFFFFF',
        secondary2: '#FBF5E5',
        success: '#63CCA2',
        danger: '#F88C91',
        monochrome: '#0B0A0A',
        monochrome_light: '#BFBFBF',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        heading1: ['48px', {
          lineHeight: 'auto',
          fontWeight: '700',
        }],
        heading2: ['36px', {
          lineHeight: 'auto',
          fontWeight: '700',
        }],
        heading3: ['24px', {
          lineHeight: 'auto',
          fontWeight: '700',
        }],
        subtitle1: ['18px',{
          lineHeight: 'auto',
          fontWeight: '700',
        }],
        subtitle2: ['14px',{
          lineHeight: 'auto',
          fontWeight: '700',
        }],
        body1: ['16px',{
          lineHeight: 'auto',
          fontWeight: '400',
        }],
        body2: ['14px',{
          lineHeight: 'auto',
          fontWeight: '400',
        }],
        button: ['14px',{
          lineHeight: 'auto',
          fontWeight: '700',
        }],
        tag: ['10px',{
          lineHeight: 'auto',
          fontWeight: '400',
        }],
        label: ['8px',{
          lineHeight: 'auto',
          fontWeight: '400',
        }],
      },
      container: {
        center: true,
        padding: '[0px]',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'bg-login': "url('/images/bg-login.png')"
      },
    },
  },
  plugins: [],
}
export default config
