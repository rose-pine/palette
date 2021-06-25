import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

function lib() {
	console.log(`${__dirname}\nCiao bella`)
}

export default lib
export { lib }
