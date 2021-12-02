const transparentHighlightsByRole = {
	highlight: {
		dark: '#6e6a8633',
		moon: '#817c9c26',
		dawn: '#6e6a8614',
	},
	highlightInactive: {
		dark: '#6e6a861a',
		moon: '#817c9c14',
		dawn: '#6e6a860d',
	},
	highlightOverlay: {
		dark: '#6e6a8666',
		moon: '#817c9c4d',
		dawn: '#6e6a8626',
	},
}

const transparentHighlightsByVariant = {
	dark: {
		highlight: '#6e6a8633',
		highlightInactive: '#6e6a861a',
		highlightOverlay: '#6e6a8666',
	},
	moon: {
		highlight: '#817c9c26',
		highlightInactive: '#817c9c14',
		highlightOverlay: '#817c9c4d',
	},
	dawn: {
		highlight: '#6e6a8614',
		highlightInactive: '#6e6a860d',
		highlightOverlay: '#6e6a8626',
	},
}

const colorsByRole = {
	base: {
		dark: '#191724',
		moon: '#232136',
		dawn: '#faf4ed',
	},
	surface: {
		dark: '#1f1d2e',
		moon: '#2a273f',
		dawn: '#fffaf3',
	},
	overlay: {
		dark: '#26233a',
		moon: '#393552',
		dawn: '#f2e9de',
	},
	inactive: {
		dark: '#6e6a86',
		moon: '#6e6a86',
		dawn: '#9893a5',
	},
	subtle: {
		dark: '#908caa',
		moon: '#908caa',
		dawn: '#6e6a86',
	},
	text: {
		dark: '#e0def4',
		moon: '#e0def4',
		dawn: '#575279',
	},
	love: {
		dark: '#eb6f92',
		moon: '#eb6f92',
		dawn: '#b4637a',
	},
	gold: {
		dark: '#f6c177',
		moon: '#f6c177',
		dawn: '#ea9d34',
	},
	rose: {
		dark: '#ebbcba',
		moon: '#ea9a97',
		dawn: '#d7827e',
	},
	pine: {
		dark: '#31748f',
		moon: '#3e8fb0',
		dawn: '#286983',
	},
	foam: {
		dark: '#9ccfd8',
		moon: '#9ccfd8',
		dawn: '#56949f',
	},
	iris: {
		dark: '#c4a7e7',
		moon: '#c4a7e7',
		dawn: '#907aa9',
	},
	highlight: {
		dark: '#403d52',
		moon: '#44415a',
		dawn: '#dfdad9',
	},
	highlightInactive: {
		dark: '#21202e',
		moon: '#2a283e',
		dawn: '#f4ede8',
	},
	highlightOverlay: {
		dark: '#524f67',
		moon: '#56526e',
		dawn: '#cecacd',
	},
}

const colorsByVariant = {
	dark: {
		base: '#191724',
		surface: '#1f1d2e',
		overlay: '#26233a',
		inactive: '#6e6a86',
		subtle: '#908caa',
		text: '#e0def4',
		love: '#eb6f92',
		gold: '#f6c177',
		rose: '#ebbcba',
		pine: '#31748f',
		foam: '#9ccfd8',
		iris: '#c4a7e7',
		highlight: '#403d52',
		highlightInactive: '#21202e',
		highlightOverlay: '#524f67',
	},

	moon: {
		base: '#232136',
		surface: '#2a273f',
		overlay: '#393552',
		inactive: '#6e6a86',
		subtle: '#908caa',
		text: '#e0def4',
		love: '#eb6f92',
		gold: '#f6c177',
		rose: '#ea9a97',
		pine: '#3e8fb0',
		foam: '#9ccfd8',
		iris: '#c4a7e7',
		highlight: '#44415a',
		highlightInactive: '#2a283e',
		highlightOverlay: '#56526e',
	},

	dawn: {
		base: '#faf4ed',
		surface: '#fffaf3',
		overlay: '#f2e9de',
		inactive: '#9893a5',
		subtle: '#797593',
		text: '#575279',
		love: '#b4637a',
		gold: '#ea9d34',
		rose: '#d7827e',
		pine: '#286983',
		foam: '#56949f',
		iris: '#907aa9',
		highlight: '#dfdad9',
		highlightInactive: '#f4ede8',
		highlightOverlay: '#cecacd',
	},
}

const palette = {
	...colorsByRole,
	...colorsByVariant,
}

export default palette
export {
	palette,
	colorsByRole,
	colorsByVariant,
	transparentHighlightsByRole,
	transparentHighlightsByVariant,
}
