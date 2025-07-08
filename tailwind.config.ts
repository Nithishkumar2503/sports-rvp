// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#f3f4f6",
        text: "#1e293b",
        background: "#f8fafc",
      },
      borderRadius: {
        custom: "10px",
      },
    },
  },
  plugins: [],
};
