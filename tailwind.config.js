

const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#00CBEC',
        secondary: '#003A56',
        tertiary1: '#9D4400',
        tertiary2: '#E6F4F1',
      },
      screens: {
        'xs': { 'min': '0px', 'max': '640px' },
        'sm': { 'min': '640px', 'max': '767px' },
        'md': { 'min': '768px', 'max': '1023px' },
        'lg': { 'min': '1024px' },
      },
    },
  },
  plugins: [],
}
export default config
