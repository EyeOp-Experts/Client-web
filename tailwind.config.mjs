/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #1e3a8a, #2563eb)", // Custom dark blue to light blue
      },
    },
  },
  safelist: [
    "bg-gradient-to-r",
    "from-blue-900",
    "to-blue-700",
  ], // ✅ Prevents Tailwind from purging gradient classes
  plugins: [],
};
