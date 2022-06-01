import { createStitches, globalCss } from "@stitches/react";

export const { styled } = createStitches({
	theme: {
		colors: {
			black: "rgba(0, 0, 0)",
			white: "rgba(236, 237, 238)",
			hover: "#666",
			selected: "#444",
		},
		fonts: {
			sans: "Inter, sans-serif",
		},
		fontSizes: {
			1: "12px",
			2: "14px",
			3: "16px",
			4: "20px",
			5: "24px",
			6: "32px",
		},
		space: {
			1: "10px",
			2: "20px",
			3: "40px",
		},
		sizes: {
			1: "4px",
			2: "8px",
			3: "16px",
			4: "32px",
			5: "64px",
			6: "128px",
		},
		radii: {
			1: "2px",
			2: "4px",
			3: "8px",
			round: "9999px",
		},
		fontWeights: {},
		lineHeights: {},
		letterSpacings: {},
		borderWidths: {},
		borderStyles: {},
		shadows: {},
		zIndices: {},
		transitions: {},
	},
});

export const globalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		border: 0,
		fontFamily: "Inter, sans-serif",
		xborder: "1px solid gold",
	},
	body: { backgroundColor: "$black", color: "$white" },
	"@import": ["url('https://rsms.me/inter/inter.css')"],
});