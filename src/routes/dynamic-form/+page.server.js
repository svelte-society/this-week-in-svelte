/** @type {import('./$types').Actions} */
export const actions = {
    addPetName: async ({request}) => {
        const formItems = await request.formData()
        console.log({formItems})
        return { items: [...formItems.entries()]}
    }
};