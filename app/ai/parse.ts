'use server'

import {generateObject} from 'ai'
import {google} from '@ai-sdk/google'
import {z} from 'zod'

const systemPrompt = `
You will be given a string of words. 
Your job is to parse the words from the string and return an object in which there will be a "words" field and that filed would be an array of those words. 
The words can be separated by any character, including spaces, commas, or any other punctuation marks. 
The words can also be in any case, including uppercase, lowercase, or a mix of both. 
The words can also contain special characters, numbers, or any other characters. 
The words can be in any language, including English, Spanish, French, German, or any other language. 
The words can also be in any format, including single words, phrases, sentences, or any other format. 
The words can also be in any order, including random order, alphabetical order, or any other order. 
The words can also be repeated, including duplicate words, similar words, or any other repeated words. If a word is repeated, it should be included in the array only once.
 The words can also be misspelled, including typos, errors, or any other misspelled words. If a word is misspelled, it should be included in the array as it is.
 The words can also be incomplete, including partial words, abbreviations, or any other incomplete words. If a word is incomplete, it should be included in the array as it is.
`

export const parseWordsFromInput = async (input: string): Promise<string[]> => {
	const models = [
		google('models/gemini-1.0-pro-latest'),
		google('models/gemini-1.5-flash-latest'),
		google('models/gemini-1.5-pro-latest')
	]

	let errors: Error[] = []
	let result: string[]

	for (let model of models) {
		try {
			const parsedResult = await generateObject({
				model,
				system: systemPrompt,
				prompt: input,
				schema: z.object({
					words: z.array(z.object({
						word: z.string().describe('One single word from the input string')
					})).describe('An array of words parsed from the input string')
				})
			})

			result = parsedResult.object.words.map(word => word.word)
			break
		} catch (error) {
			errors.push(error as Error)
		}
	}

	// @ts-ignore
	if (result) {
		return result
	} else {
		throw new Error('Failed to parse words from the input string')
	}
}
