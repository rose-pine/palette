import {minify} from 'csso'
import palette from '../source/index.js'
import {writeFile, summaryLog} from './utilities.js'

const variants = Object.keys(palette.variants)
const roles = Object.keys(palette.roles)

const colors = {
	hex: {main: '', moon: '', dawn: ''},
	rgb: {main: '', moon: '', dawn: ''},
	hsl: {main: '', moon: '', dawn: ''},
}

const prefixedColors = {
	hex: {main: '', moon: '', dawn: ''},
	rgb: {main: '', moon: '', dawn: ''},
	hsl: {main: '', moon: '', dawn: ''},
}

const tailwindColors = {main: '', moon: '', dawn: ''}
const tailwindPreset = {theme: {colors: {}}}
const tailwindMediaPreset = {theme: {colors: {}}}

// eslint-disable-next-line array-callback-return
variants.map((variant) => {
	const namespace = variant === 'main' ? '' : `-${variant}`
	tailwindPreset.theme.colors[`rp${namespace}`] = {}

	// eslint-disable-next-line array-callback-return
	roles.map((role) => {
		const currentColor = palette.variants[variant][role]
		const label = role.startsWith('highlight')
			? role.split('highlight').join('highlight-').toLowerCase()
			: role

		const hex = `#${currentColor.hex}`
		const [r, g, b] = currentColor.rgb.map(String)
		const [h, s, l] = currentColor.hsl.map(String)
		const rgb = `rgb(${r}, ${g}, ${b})`
		const hsl = `hsl(${h}deg, ${s}%, ${l}%)`

		colors.hex[variant] += `\t--rp-${label}: ${hex};\n`
		colors.rgb[variant] += `\t--rp-${label}: ${rgb};\n`
		colors.hsl[variant] += `\t--rp-${label}: ${hsl};\n`

		prefixedColors.hex[variant] += `\t--rp${namespace}-${label}: ${hex};\n`
		prefixedColors.rgb[variant] += `\t--rp${namespace}-${label}: ${rgb};\n`
		prefixedColors.hsl[variant] += `\t--rp${namespace}-${label}: ${hsl};\n`

		tailwindColors[variant] += `\t--rp-${label}: ${h} ${s} ${l};\n`
		tailwindPreset.theme.colors[`rp${namespace}`][label] = hex

		if (variant === 'main') {
			tailwindMediaPreset.theme.colors[
				`rp-${label}`
			] = `hsl(--rp-${label} / <alpha-value>)`
		}
	})
})

const templates = {
	root: ({main, moon, dawn}) => `:root {\n${main}\n${moon}\n${dawn}}`,
	class: ({main, moon, dawn}) =>
		`.theme-rp {\n${main}}\n\n.theme-rp-moon {\n${moon}}\n\n.theme-rp-dawn {\n${dawn}}`,
	media: ({main, moon, dawn}) =>
		`:root {\n\t/* Rosé Pine Dawn */\n${dawn}}\n\n@media (prefers-color-scheme: dark) {\n\t:root {\n\t\t/* Rosé Pine */\n${main
			.split('\n')
			.map((v) => `\t${v}`)
			.join('\n')}\n\t\t/* Rosé Pine Moon */\n${moon
			.split('\n')
			.map((v) => (v ? `\t\t/* ${v.replace('\t', '')} */` : ''))
			.join('\n')}\t}\n}`,
	tailwindConfig: (data) =>
		`export default ${JSON.stringify(data, null, '\t')}`,
}

let cssFileCount = 0

/**
 * @param filename string
 * @param data string
 */
function writeCss(filename, data) {
	console.log(`[CSS] Writing dist/css/${filename}.css`)
	writeFile('dist/css', `${filename}.css`, data)

	console.log(`[CSS] Writing dist/css/${filename}.min.css`)
	writeFile('dist/css/min', `${filename}.min.css`, minify(data).css)

	cssFileCount += 2
}

let tailwindFileCount = 0

/**
 * @param filename string
 * @param data string
 */
function writeTailwind(filename, data) {
	console.log(`[TW] Writing dist/tailwind/${filename}.js`)
	writeFile('dist/tailwindcss', `${filename}.js`, data)

	tailwindFileCount += 1
}

const cssStartTime = Date.now()

writeCss('rose-pine', templates.root(prefixedColors.hex))
writeCss('rose-pine-rgb', templates.root(prefixedColors.rgb))
writeCss('rose-pine-hsl', templates.root(prefixedColors.hsl))
writeCss('rose-pine-class', templates.class(colors.hex))
writeCss('rose-pine-class-rgb', templates.class(colors.rgb))
writeCss('rose-pine-class-hsl', templates.class(colors.hsl))
writeCss('rose-pine-media', templates.media(colors.hex))
writeCss('rose-pine-media-rgb', templates.media(colors.rgb))
writeCss('rose-pine-media-hsl', templates.media(colors.hsl))
writeCss('rose-pine-media-tailwind', templates.media(tailwindColors))

summaryLog(`[CSS] Wrote ${cssFileCount} files`, cssStartTime)

const tailwindStartTime = Date.now()

writeTailwind('rose-pine', templates.tailwindConfig(tailwindPreset))
writeTailwind('rose-pine-media', templates.tailwindConfig(tailwindMediaPreset))

summaryLog(`[TW] Wrote ${tailwindFileCount} files`, tailwindStartTime)
