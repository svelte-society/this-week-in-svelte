/** @type {import('./$types').Actions} */
export const actions = {
	addPet: async ({ request }) => {
		const formItems = await request.formData();
		console.log({ formItems });

		const items = [...formItems.entries()];

		/**
		 * The pets.
		 */
		const pets = [...formItems.getAll('petname[]'), ''];

		return { items, pets };
	},
	removePet: async ({ request, url }) => {
		const formItems = await request.formData();
		const pet = parseInt(String(url.searchParams.get('pet')), 10) || 0;
		console.log({ pet });

		const items = [...formItems.entries()];
		const pets = [...formItems.getAll('petname[]')];

		if (pet > 0) {
			pets.splice(pet, pet);
		}

		return { items, pets };
	},
	submit: async () => {
		console.log('submitted!');

		return { success: true };
	}
};
