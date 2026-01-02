module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "wix-display": ['"Wix Madefor Display"', "sans-serif"],
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "radial-red-1":
          "radial-gradient(ellipse 50% 40% at 50% 25%, rgba(220, 50, 40, 0.85) 0%, rgba(180, 30, 25, 0.65) 15%, transparent 75%)",
        "radial-red-2":
          "radial-gradient(ellipse 45% 35% at 50% 20%, rgba(200, 40, 40, 0.8) 0%, rgba(140, 20, 20, 0.5) 20%, transparent 70%)",
        "radial-red-3":
          "radial-gradient(ellipse 40% 30% at 50% 15%, rgba(180, 30, 30, 0.7) 0%, rgba(120, 15, 15, 0.4) 25%, transparent 65%)",
      },
    },
  },
  plugins: [],
};
