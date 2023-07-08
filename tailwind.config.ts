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
        },
        red: {
          500: '#FF1515',
        }
      },
      fontSize: {
        'xxs': '.625rem',
        '2xxs': '9px',
        'xxxs': '.5rem',
        'xxxxs': '.375rem',
        'xxxxxs': '.25rem',
      },
    },
    data: {
      true: 'true="true"',
    },
  },
  plugins: [],
} satisfies Config;
