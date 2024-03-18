/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			colors: {
				'background': '#21201f',
				'foreground': '#ad9c9a',
				'terminal': '#f5f062'
			}
		},
	},
  plugins: [],
}

