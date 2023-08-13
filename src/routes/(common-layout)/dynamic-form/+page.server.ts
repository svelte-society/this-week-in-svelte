import type { Actions } from './$types'

export const actions: Actions = {
	addPet: async ({ request }) => {
		const formItems = await request.formData()

		const items = [...formItems.entries()]

		/**
		 * The pets.
		 */
		let pets: string[] = Array.from(
			formItems.getAll('petname'),
			(el) => el.toString()
		)
		pets.push('')

		return { items, pets }
	},
	removePet: async ({ request, url }) => {
		const formItems = await request.formData()
		const pet =
			parseInt(String(url.searchParams.get('pet')), 10) || 0
		console.log({ pet })

		const items = [...formItems.entries()]
		const pets = [...formItems.getAll('petname')]

		pets.splice(pet, 1)

		console.log('After removal', { pets })

		return { items, pets }
	},
	submit: async ({ request }) => {
		console.log('submitted!')

		const formData = await request.formData()
		const items = [...formData.entries()]

		return { success: true, items }
	}
}
