import test from 'ava'
import colorish from 'colorish'
import {variants, roles} from '../source/index.js'

test('main', (t) => {
	t.deepEqual(roles.base, {
		main: {
			hex: '#191724',
			rgba: 'rgba(25, 23, 36, 1)',
			hsla: 'hsla(249, 22%, 12%, 1)',
		},
		moon: {
			hex: '#232136',
			rgba: 'rgba(35, 33, 54, 1)',
			hsla: 'hsla(246, 24%, 17%, 1)',
		},
		dawn: {
			hex: '#faf4ed',
			rgba: 'rgba(250, 244, 237, 1)',
			hsla: 'hsla(32, 57%, 95%, 1)',
		},
	})

	t.deepEqual(variants.dawn.highlights.alpha, {
		low: {
			hex: colorish('#6e6a86', 0.05),
			rgba: 'rgba(110, 106, 134, 0.05)',
			hsla: 'hsla(249, 12%, 47%, 0.05)',
		},
		med: {
			hex: colorish('#6e6a86', 0.08),
			rgba: 'rgba(110, 106, 134, 0.08)',
			hsla: 'hsla(249, 12%, 47%, 0.08)',
		},
		high: {
			hex: colorish('#6e6a86', 0.15),
			rgba: 'rgba(110, 106, 134, 0.15)',
			hsla: 'hsla(249, 12%, 47%, 0.15)',
		},
	})
})
