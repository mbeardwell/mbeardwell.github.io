import colors from "./src/styles/colors.json" assert { type: "json" };
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/styles/**/*.css",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["DM Sans", "system-ui", "sans-serif"],
				serif: ["DM Serif Display", "serif"],
			},
			colors: {
				...colors,
				surface: "var(--surface)",
				accent: "var(--ac)",
				content: "var(--content)",
			},
			backgroundImage: {
				radial: "radial-gradient(var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};
