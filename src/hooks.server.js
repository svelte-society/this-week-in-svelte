import { error } from '@sveltejs/kit'

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// throw error(400, 'Fake fatal error!')

	const response = await resolve(event)

	return response
}

/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError({ error }) {
	console.error('Demo unhandled error!', error)

	return {
		message: 'Whoops!'
	}
}
