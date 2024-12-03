/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  safelist: [
    {
      pattern: /bg-(indigo|yellow|blue|green|red|pink)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /text-(indigo|yellow|blue|green|red|pink)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /border-(indigo|yellow|blue|green|red|pink)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};