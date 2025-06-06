// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',      // Deep Blue
        accent: '#3B82F6',       // Bright Blue
        bg: '#F0F4F8',           // Light Blue Gray background
        textMain: '#111827',     // Almost black text
        textMuted: '#6B7280',    // Gray text
        buttonHover: '#2563EB',  // Hover darker blue for buttons
      },
    },
  },
  plugins: [],
}
