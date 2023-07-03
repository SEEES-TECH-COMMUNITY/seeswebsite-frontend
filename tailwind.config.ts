import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
            400: '#FBFBFB',
            800: '#A7B5C1' 
        },
        blue: {
          600: '#1573FF'
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
