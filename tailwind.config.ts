import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#162D4C",
        light: "#272F43",
        lighter: "#515868",
      },
      brand: {
        red: "#E20010",
        blue: "#0075FF",
        yellow: "#FFC10E",
      },
      accent: {
        orange: {
          DEFAULT: "#F16522",
          light: "#F6921E",
        },
        red: "#D71920",
        yellow: {
          DEFAULT: "#DCAA10",
          dark: "#DFAC0F",
          light: "#E4B935",
        },
      },
      white: "#FFFFFF",
      black: "#000000",
      neutral: {
        50: "#F8F7F7",
        100: "#DBDBDC",
        200: "#C0C3C9",
        300: "#B4B5B8",
        400: "#A3A3A3",
        500: "#9E9C9C",
        600: "#7A7D86",
        700: "#58595B",
        800: "#171717",
      },
      transparent: "transparent",
    },

    fontSize: {
      h1: "var(--font-size-h1)",
      h2: "var(--font-size-h2)",
      h3: "var(--font-size-h3)",
      subtitle: "var(--font-size-subtitle)",
      body: "var(--font-size-body)",
      "body-lg": "var(--font-size-body-lg)",
      "body-sm": "var(--font-size-body-sm)",
      "body-xs": "var(--font-size-body-xs)",
      "button-lg": "var(--font-size-button-lg)",
    },
    fontFamily: {
      "sans-primary": "var(--font-sans-primary)",
      "sans-secondary": "var(--font-sans-secondary)",
      serif: "var(--font-serif)",
    },
    extend: {
      backgroundImage: {
        "gradient-1": "var(--gradient-1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
