
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

    },
  },
  plugins: [],
  theme: {
    extend: {
      animation: {
        spinSlow: 'spin 3s linear infinite', // Slower spin
        spinVerySlow: 'spin 18s linear infinite', // Even slower spin
      },
    },
  },
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        moveImage: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(100px, -100px) rotate(90deg)' },
          '50%': { transform: 'translate(0, -200px) rotate(180deg)' },
          '75%': { transform: 'translate(-100px, -100px) rotate(270deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
      },
      animation: {
        moveImage: 'moveImage 25s linear infinite', // Slow loop (10s duration)
      },
    },
  },
  plugins: [],
  
};
