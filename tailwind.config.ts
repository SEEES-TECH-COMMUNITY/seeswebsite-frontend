import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          700: '#A7B5C1',
          600: '#F3F3F3',
          400: '#FBFBFB',
        },
        blue: {
          600: '#1573FF',
          placeholder: {
            600: '#002445',
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
