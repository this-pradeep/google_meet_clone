/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				display: ["Lexend", "sans-serif"],
				sans: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
