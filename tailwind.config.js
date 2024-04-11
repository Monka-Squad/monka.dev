const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				serif: ["var(--font-spectral)", ...defaultTheme.fontFamily.serif],
				display: [
					"var(--font-source-serif-4)",
					...defaultTheme.fontFamily.serif,
				],
				mono: ["var(--font-overpass-mono)", ...defaultTheme.fontFamily.mono],
			},
			colors: {
				primary: "#DC2626",
				...defaultTheme.colors,
			},
		},
	},
	plugins: [],
};
