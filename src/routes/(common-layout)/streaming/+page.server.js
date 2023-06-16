/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, isDataRequest }) {
	let animals;
	let req = fetch('./streaming', {
		headers: {
			accept: 'application/json'
		}
	});

	if (isDataRequest) {
		animals = req.then(async (val) => val.json());
	} else {
		const res = await req;
		animals = await res.json();
	}

	console.log('stream', animals);

	return {
		streams: {
			animals
		}
	};
}
