module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: { light: "#3C4C61", DEAFAULT: "#0E0E20", darker: "#2A2A2A" },
        gray: { light: "#E9ECF3", DEAFAULT: "#DCDEE0" },
        loggi: "#00BAFF",
        prisma: "#38A169",
        twitter: "#1FA1F2",
      },
      minWidth: {
        button: 200,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "disabled"],
      textColor: ["active", "disabled"],
      boxShadow: ["disabled"],
      borderWidth: ["focus"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
