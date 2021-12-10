import test from 'ava'
import colorish from 'colorish'
import {variants, roles} from '../source/index.js'

test('main', (t) => {
	t.deepEqual(roles.base, {
		main: {
			hex: '#191724',
			rgb: 'rgb(25, 23, 36)',
			hsl: 'hsl(249, 22%, 12%)',
		},
		moon: {
			hex: '#232136',
			rgb: 'rgb(35, 33, 54)',
			hsl: 'hsl(246, 24%, 17%)',
		},
		dawn: {
			hex: '#faf4ed',
			rgb: 'rgb(250, 244, 237)',
			hsl: 'hsl(32, 57%, 95%)',
		},
	})

	t.deepEqual(variants.dawn.highlights, {
		low: {
			hex: '#f4ede8',
			rgb: 'rgb(244, 237, 232)',
			hsl: 'hsl(25, 35%, 93%)',
			hexa: colorish('#6e6a86', 0.05),
			rgba: 'rgba(110, 106, 134, 0.05)',
			hsla: 'hsla(249, 12%, 47%, 0.05)',
		},
		med: {
			hex: '#dfdad9',
			rgb: 'rgb(223, 218, 217)',
			hsl: 'hsl(10, 9%, 86%)',
			hexa: colorish('#6e6a86', 0.08),
			rgba: 'rgba(110, 106, 134, 0.08)',
			hsla: 'hsla(249, 12%, 47%, 0.08)',
		},
		high: {
			hex: '#cecacd',
			rgb: 'rgb(206, 202, 205)',
			hsl: 'hsl(315, 4%, 80%)',
			hexa: colorish('#6e6a86', 0.15),
			rgba: 'rgba(110, 106, 134, 0.15)',
			hsla: 'hsla(249, 12%, 47%, 0.15)',
		},
	})
})
