/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			darkblue: "#252f38",
			paleblue: "#3a4a58",
			gray: "#979899",
			"faded-orange": "#6d5c34",
			"faded-yellow": "#cfc960",

			yellow: "#fefa09",
			orange: "#f4971d",
			green: "#55c64e",
			blue: "#00d7f4",
			red: "#bd2222",
		},
		extend: {
			fontFamily: {
				"game": "Bombardier, sans-serif"
			},
			borderWidth: {
				"1": "1px"
			}
		},
	},
	plugins: [],
}
