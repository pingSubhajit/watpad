'use server'

export const fetchRandomWords = async (count: number) => {
	try {
		const response = await fetch(`https://random-word-form.herokuapp.com/random/noun?count=${count}`)
		return await response.json()
	} catch (error) {
		throw new Error('Failed to fetch random words')
	}
}