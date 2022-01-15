import {mkdirSync, writeFileSync} from 'node:fs'
import {join} from 'node:path'
import prettier from 'prettier'
import {minify} from 'csso'
import {variants} from '../../index.js'
import {colorExtractor} from './color-extractor.js'

const OUT_DIR = './css'
const TEMPLATE_KEY = '{{template}}'
const STYLE_VARIABLE_PREFIX = 'rose-'
const styleSheetTemplate = `
    :root{
        ${TEMPLATE_KEY}
    }
`

let styleSheet = ``

// ANSI Color defs
const bold = (s) => '\u001B[1m' + s
const yellow = (s) => '\u001B[33m' + s
const green = (s) => '\u001B[32m' + s
const white = (s) => '\u001B[37m' + s
const reset = (s) => '\u001B[0m' + s + '\u001B[0m'

const pathToCSSVariable = (path) => {
	return `--${path}`
}

const varToStyleString = (variable, value) => {
	return `${variable}:${value};`
}

const appendToStylesheet = (cssString) => {
	if (!styleSheet) {
		styleSheet = styleSheetTemplate
	}

	return styleSheet.replace(
		new RegExp(TEMPLATE_KEY),
		`${cssString}\n{{template}}`
	)
}

const purgeTemplate = (template) => {
	return template.replace(new RegExp(TEMPLATE_KEY), '')
}

function build() {
	const _variants = colorExtractor(variants)
	for (const variant of _variants) {
		const colorPath = `${STYLE_VARIABLE_PREFIX}${variant.path}`
		const cssVarName = pathToCSSVariable(colorPath)
		const cssVarString = varToStyleString(cssVarName, variant.color)
		styleSheet = appendToStylesheet(cssVarString)
	}

	styleSheet = purgeTemplate(styleSheet)
	const cleanedStyles = prettier.format(styleSheet, {parser: 'css'})

	mkdirSync(OUT_DIR, {recursive: true})
	writeFileSync(join(OUT_DIR, 'rose-pine.css'), cleanedStyles)
	writeFileSync(join(OUT_DIR, 'rose-pine.min.css'), minify(cleanedStyles).css)

	const odt = reset(bold(white(OUT_DIR)))
	const prmt = yellow('>>')
	const message = green('CSS files fenerated to the dir')
	console.log(`${prmt} ${message} ${odt}`)
}

build()
