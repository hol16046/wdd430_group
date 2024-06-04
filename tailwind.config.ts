import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updated theme colors for contrast
        "theme-orange": "#F58B00",
        "theme-rust": "#B84000",
        "theme-white": "#F6F6F3",
        "theme-teal": "#2CB5AC",
        "theme-dark-teal": "#13534C" 

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'playfair': ['var(--font-playfair)', "serif"],
        'red-hat': ['var(--font-red-hat)', "sans-serif"],
      },
      animation: {
        'squish': 'squish 200ms ease-in-out',
      },
      keyframes: {
        squish: {
          '50%': {scale: '1.4 0.6'},
        }
      }

    },
  },
  plugins: [],
};
export default config;
