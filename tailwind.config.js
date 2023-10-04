/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        heading: "1.25rem",
        title: "1.25rem",
        subtitle: "1rem",
        label: "0.875rem",
        "section-head": "0.75rem",
        "small-light": "0.625rem",
        small: "0.625rem",
        content: "0.9375rem",
        "content-body": "0.75rem",
        code: "0.75rem",
      },
      fontWeight: {
        heading: "500", // Medium
        title: "400", // Regular
        subtitle: "400", // Regular
        label: "400", // Regular
        "section-head": "550", // SemiBold
        "small-light": "400", // Regular
        small: "400", // Regular
        content: "400", // Regular
        "content-body": "400", // Regular
        code: "400", // Regular
      },
      colors: {
        white: "#FFFFFF",
        primary: "#2E7CF6",
        "text-light": "#939393",
        light: "#F3F3F3",
        dark: "#000000",
        green:"#219653",
        lightgray:"#939393",
      },
      margin: {
        "m-5": "0.313rem",
        "m-10": "0.625rem",
        "m-15": "0.9375rem",
        "m-20": "1.25rem",
      },
      spacing: {
        "s-5": "0.313rem",
        "s-10": "0.625rem",
        "s-15": "0.9375rem",
        "s-20": "1.25rem",
        "s-17": "1.0625rem",
      },
      fontFamily: {
        lexend: ["lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
}

