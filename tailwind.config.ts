import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,svelte}", "./index.html"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slideIn: "slideIn 0.6s ease-out forwards",
      },
      colors: {
        primary: "#0000FF", // Blue
        // You can also add more like:
        // secondary: '#FF0000',
        // accent: '#00FF00',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Optional font extension
      },
    },
  },
  plugins: [
    // You can add Tailwind plugins here
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          textShadow: "2px 2px 2px rgba(0,0,0,0.3)",
        },
      });
    }),
  ],
};

export default config;
