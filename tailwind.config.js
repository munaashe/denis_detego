

const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#643B47',
        tertiary1: '#FFF3FA',
        tertiary2: '#28161C',
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
