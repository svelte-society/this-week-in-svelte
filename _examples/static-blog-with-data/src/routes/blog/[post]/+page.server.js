import { dev } from '$app/environment'
import { env } from '$env/dynamic/private'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const endpoint = `https://${env.PROJECT_ID}.api.sanity.\
		io/v2021-10-21/data/query/${env.DATASET}?query=`

	const res = await fetch(
		endpoint + `*[slug.current == "${params.post}"][0]`
	)

	const data = await res.json()
	if (dev) {
		console.log({
			data: data.result,
			body: JSON.stringify(data.result.body)
		})
	}

	return {
		post: data.result
	}
}
