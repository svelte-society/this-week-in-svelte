/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	await parent()
	return { globalStyles: false }
}
