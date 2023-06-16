import { error } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function POST() {
	throw error(400, "Can't let you do that, Svelte Star.")
}
