import {paramCase} from 'param-case'

export function colorExtractor(source, visitedPath = '') {
	if (typeof source === 'string') {
		return {color: source, path: visitedPath}
	}

	let colorMap = []

	for (const key of Object.keys(source)) {
		let pathKey = paramCase(visitedPath)
		if (key !== 'hex') {
			pathKey += '-' + paramCase(key)
		}

		const value = colorExtractor(source[key], pathKey)
		colorMap = Array.isArray(value)
			? [...colorMap, ...value]
			: [...colorMap, value]
	}

	return colorMap
}
