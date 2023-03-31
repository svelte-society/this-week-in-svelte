import { dev } from '$app/environment'
import { env } from '$env/dynamic/private'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const endpoint = `https://${env.PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${env.DATASET}?query=`

	const res = await fetch(endpoint + '*[_type == "post"]')

	const data = await res.json()
	if (dev) {
		console.log({ data: data.result })
		console.log({ slug: data.result[0].slug })
	}

	return {
		posts: data.result
	}
}
