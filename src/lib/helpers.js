export const uniqueId = (prefix = 'id') => {
	return prefix + Math.floor(Math.random() * 100) + Date.now()
}
