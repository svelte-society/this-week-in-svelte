/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return { image: params.image }
}
