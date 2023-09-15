import type { Actions } from '@sveltejs/kit'

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData()

		console.log(data.get('pizza'))

		return { success: true }
	}
}
