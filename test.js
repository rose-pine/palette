import test from 'ava'
import {variants, roles} from './index.js'

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

	t.deepEqual(variants.dawn.highlightLow, {
		hex: '#f4ede8',
		rgb: 'rgb(244, 237, 232)',
		hsl: 'hsl(25, 35%, 93%)',
		alpha: {
			hex: '#6e6a860d',
			rgb: 'rgba(110, 106, 134, 0.05)',
			hsl: 'hsla(249, 12%, 47%, 0.05)',
		},
	})
})

test.todo('css')
