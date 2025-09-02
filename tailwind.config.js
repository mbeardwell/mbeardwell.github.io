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
                sans: ["Geist", "sans-serif"],
                serif: ["IBMPlexSans", "serif"],
            },
            colors,
            backgroundImage: {
                radial: "radial-gradient(var(--tw-gradient-stops))"
            },
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
}
