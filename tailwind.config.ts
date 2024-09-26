import { Config } from 'tailwindcss';

const config: Config = {
  content: [ './app/**/*.{js,ts,jsx,tsx}',    // Include the app folder
  './pages/**/*.{js,ts,jsx,tsx}',  // Keep pages in case you're using both
  './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D0D0D',
        secondary: '#FF007F',
        accent: '#0ABAB5',
        neonYellow: '#FCEE09',
        gradientStart: '#1E1E3F',
        gradientEnd: '#0D0D46',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #1E1E3F, #0D0D46)',
      },
    },
  },
  plugins: [],
};

export default config;
