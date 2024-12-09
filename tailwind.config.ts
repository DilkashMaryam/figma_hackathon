import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      screens: {
        sm: '420px',
        md: '768px',
        lg: '1024px',
        xl: '1366px',
      },
    extend: {
      colors: {
        topNav: "#F5F5F5",
        myBlack: "#111111",
        background: "#FFFFFF",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
