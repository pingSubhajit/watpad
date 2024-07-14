'use server'

import {createAI, getMutableAIState, streamUI} from 'ai/rsc'
import {ReactNode} from 'react'
import {z} from 'zod'
import {nanoid} from 'nanoid'
import {google} from '@ai-sdk/google'

export interface ServerMessage {
	role: 'user' | 'assistant';
	content: string;
}

export interface ClientMessage {
	id: string;
	role: 'user' | 'assistant';
	display: ReactNode;
}

export async function continueConversation(
	input: string,
): Promise<ClientMessage> {
	'use server'

	const examples = [
		{
			role: 'user',
			parts: [
				{text: 'Word: Family\nSentence: One\'s family supports one at the lowest phase of life'},
			],
		},
		{
			role: 'model',
			parts: [
				{text: '**Rating:** 6/10\n\n**Feedback:**\n\n* **Positive:** The sentence is positive and reflects a good value. It conveys the importance of family support.\n* **Succinct:** It\'s concise and easy to understand.\n* **Room for Improvement:** It falls into the category of "preaching" a bit. The sentence uses a generalized statement ("one\'s family supports one..."). You could make it more personal and impactful.\n\n**Here\'s how you could improve it:**\n\n* **Option 1:**  "My family\'s strength helps me overcome challenges." (This is more personal and emphasizes your own experience.)\n* **Option 2:** "Families are the foundation of resilience in difficult times." (This is a slightly more abstract statement, but still emphasizes the positive impact of family.)\n\n**Remember:**  The WAT is about showcasing your personality and thought process. Aim for sentences that reflect your beliefs and values authentically. \n'},
			],
		},
		{
			role: 'user',
			parts: [
				{text: 'Word: Haven\nSentence: God lives in the haven'},
			],
		},
		{
			role: 'model',
			parts: [
				{text: 'Rating: 3/10\n\nFeedback:\n\n* **Negative:** This sentence is a bit too religious and lacks originality.  It uses a common idiom and doesn\'t reflect your own thinking.\n* **Unoriginal:**  "God lives in the haven" is a phrase often used in religious contexts and doesn\'t show your unique perspective.\n* **Not Feasible:**  It\'s a little too abstract for the time limit and might not be a thought that comes to mind quickly. \n\nHere are some alternative sentences that might be better: \n\n* **Option 1:** "A haven provides a safe space from the storm." (This uses the word in a more practical, descriptive way.)\n* **Option 2:** "Nature offers havens for those seeking tranquility." (This emphasizes a personal connection with nature and a sense of peace.) \n\nRemember: The WAT is about showing your ability to think on your feet and express your own unique thoughts. Aim for sentences that are fresh, relevant, and reflect your own values. \n'},
			],
		},
	]

	const history = getMutableAIState()

	const result = await streamUI({
		model: google('models/gemini-1.5-flash-latest'),
		system: 'You are an AI Assistant named Watpad and your job is to act as a coach to help SSB aspirants become better for their Word Association Test also known as WAT.\\n\\nSSB stands for Service Selection Board, an organization that assesses candidates for officer positions in the Indian Armed Forces. The SSB\'s goal is to identify candidates who have the potential and qualities to become officers. The selection process is overseen by officers from the Indian Army, Navy, and Air Force and lasts five days. \\n\\nThe Word Association Test (WAT) evaluates personality and cognitive ability. The test requires the candidate to write down a sentence that occurs to them  after being shown a word. The sentence must use the word shown to the candidate. Usually candidates get 15 seconds before the slide changes and the new words come up. So the candidates have to think, construct and write the sentence down on paper within that given time period.\\n\\nYou will be given a word and a sentence created with that word. Your job is to judge the sentence using the following parameters, rate it in a scale of 1 to 10 and give feedbacks to improve.\\n\\n1. The sentence has to thought of, constructed and written on paper all within 15 seconds of presenting the word\\n2. Idioms and phrases which lack originality of your thoughts and imagination should be avoided\\n3. Sentences that tend to preach should be avoided. For example, \\"Don’t fight\\", \\"One should not drink\\" are not encouraged\\n4. Use of ‘I’. \\"I love nature\\", \\"I am very friendly\\", \\"I love talking\\" etc. Frequent use of ‘I’ reflects selfishness and therefore should be avoided\\n5. Negative sentences and frequent references to celebrities or known figures should be avoided as well\\n6. Sentences that reflect your own beliefs and values is highly preferable. For example, \\"Helping is a virtue\\", \\"Obeying command is the duty of soldiers\\", \\"Friends are great company\\" etc.\\n7. Factual sentences based on recent happenings is also preferable. For example, \\"India is very careful in its dealings with China\\", or \\"The city of Mumbai faced several bomb blasts in the past\\". This reflects your awareness.\\n8. Positive sentences are also encouraged. \\n9. Sentences should be succint and feasible to be completed within the time period',
		messages: [
			// ...examples,
			...history.get(),
			{ role: 'user', content: input }
		],
		text: ({ content, done }) => {
			if (done) {
				history.done((messages: ServerMessage[]) => [
					...messages,
					{ role: 'assistant', content },
				])
			}

			return <div>{content}</div>
		},
		tools: {
			deploy: {
				description: 'Deploy repository to vercel',
				parameters: z.object({
					repositoryName: z
						.string()
						.describe('The name of the repository, example: vercel/ai-chatbot'),
				}),
				generate: async function* ({ repositoryName }) {
					yield <div>Cloning repository {repositoryName}...</div>
					await new Promise((resolve) => setTimeout(resolve, 3000))
					yield <div>Building repository {repositoryName}...</div>
					await new Promise((resolve) => setTimeout(resolve, 2000))
					return <div>{repositoryName} deployed!</div>
				},
			},
		},
	})

	return {
		id: nanoid(),
		role: 'assistant',
		display: result.value,
	}
}

export const AI = createAI<ServerMessage[], ClientMessage[]>({
	actions: {
		continueConversation,
	},
	initialAIState: [],
	initialUIState: [],
})