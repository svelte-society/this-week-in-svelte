import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	// fake delay
	const animals = await new Promise((res) => {
		setTimeout(() => res(['Cats', 'Dogs', 'Birds']), 5000);
	});

	console.log({ animals });

	return json(animals);
}
