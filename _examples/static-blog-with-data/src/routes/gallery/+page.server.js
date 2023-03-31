import fs from 'node:fs'
import path from 'node:path'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const images = fs.readdirSync(path.resolve('./static'))

	console.log({ images })

	return { images }
}
