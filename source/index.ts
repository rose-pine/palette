const colorsByRole = {
	base: {
		core: '#191724',
		moon: '#232136',
		dawn: '#faf4ed',
	},
	surface: {
		core: '#1f1d2e',
		moon: '#2a273f',
		dawn: '#fffaf3',
	},
	overlay: {
		core: '#26233a',
		moon: '#393552',
		dawn: '#f2e9de',
	},
	inactive: {
		core: '#555169',
		moon: '#59546d',
		dawn: '#9893a5',
	},
	subtle: {
		core: '#6e6a86',
		moon: '#817c9c',
		dawn: '#6e6a86',
	},
	text: {
		core: '#e0def4',
		moon: '#e0def4',
		dawn: '#575279',
	},
	love: {
		core: '#eb6f92',
		moon: '#eb6f92',
		dawn: '#b4637a',
	},
	gold: {
		core: '#f6c177',
		moon: '#f6c177',
		dawn: '#ea9d34',
	},
	rose: {
		core: '#ebbcba',
		moon: '#ea9a97',
		dawn: '#d7827e',
	},
	pine: {
		core: '#31748f',
		moon: '#3e8fb0',
		dawn: '#286983',
	},
	foam: {
		core: '#9ccfd8',
		moon: '#9ccfd8',
		dawn: '#56949f',
	},
	iris: {
		core: '#c4a7e7',
		moon: '#c4a7e7',
		dawn: '#907aa9',
	},
	highlight: {
		core: '#2a2837',
		moon: '#312f44',
		dawn: '#eee9e6',
	},
	highlightInactive: {
		core: '#211f2d',
		moon: '#2a283d',
		dawn: '#f2ede9',
	},
	highlightOverlay: {
		core: '#3a384a',
		moon: '#3f3c53',
		dawn: '#e4dfde',
	},
}

const colorsByVariant = {
	core: {
		base: '#191724',
		surface: '#1f1d2e',
		overlay: '#26233a',
		inactive: '#555169',
		subtle: '#6e6a86',
		text: '#e0def4',
		love: '#eb6f92',
		gold: '#f6c177',
		rose: '#ebbcba',
		pine: '#31748f',
		foam: '#9ccfd8',
		iris: '#c4a7e7',
		highlight: '#2a2837',
		highlightInactive: '#211f2d',
		highlightOverlay: '#3a384a',
	},

	moon: {
		base: '#232136',
		surface: '#2a273f',
		overlay: '#393552',
		inactive: '#59546d',
		subtle: '#817c9c',
		text: '#e0def4',
		love: '#eb6f92',
		gold: '#f6c177',
		rose: '#ea9a97',
		pine: '#3e8fb0',
		foam: '#9ccfd8',
		iris: '#c4a7e7',
		highlight: '#312f44',
		highlightInactive: '#2a283d',
		highlightOverlay: '#3f3c53',
	},

	dawn: {
		base: '#faf4ed',
		surface: '#fffaf3',
		overlay: '#f2e9de',
		inactive: '#9893a5',
		subtle: '#6e6a86',
		text: '#575279',
		love: '#b4637a',
		gold: '#ea9d34',
		rose: '#d7827e',
		pine: '#286983',
		foam: '#56949f',
		iris: '#907aa9',
		highlight: '#eee9e6',
		highlightInactive: '#f2ede9',
		highlightOverlay: '#e4dfde',
	},
}

const palette = {
	...colorsByRole,
	...colorsByVariant,
}

export default palette
export { palette }
