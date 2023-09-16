import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          800: "#AAA",
          700: "#A7B5C1",
          650: "#6D6D6D",
          600: "#F3F3F3",
          400: "#FBFBFB",
        },
        dark: {
          900: "#000F1E",
        },
        blue: {
          600: "#1573FF",
          200: "#D8E7FF",
          placeholder: {
            600: "#002445",
          },
        },
        red: {
          500: "#FF1515",
        },
        green: {
          800: "#249607",
          300: "#D5FFCB",
        },
        yellow:{
          800: "#F2A102",
          300: "#FFFACB"
        }
      },
      fontSize: {
        xxs: ".625rem",
        "2xxs": "9px",
        xxxs: ".5rem",
        xxxxs: ".375rem",
        xxxxxs: ".25rem",
      },
    },
    data: {
      true: 'true="true"',
      details: 'details="true"',
    },
  },
  plugins: [],
} satisfies Config;
