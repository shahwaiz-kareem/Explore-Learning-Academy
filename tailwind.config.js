/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx, html,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx, html,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx, html,mdx}",
    "./src/app/(group-name)/**/*.{js,ts, html,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      animation: {
        updown: "updown 1s ease-in-out infinite",
      },
      keyframes: {
        updown: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
