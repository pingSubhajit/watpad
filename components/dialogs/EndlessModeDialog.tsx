'use client'

import {useWords} from '@/components/providers/GlobalStateProvider'
import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {Loader2} from 'lucide-react'
import {fetchRandomWords} from '@/lib/data'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {useRouter} from 'next/navigation'
import {Form, FormControl, FormField, FormItem, FormMessage} from '@/components/ui/form'

const formSchema = z.object({
	timer: z.number().min(5).max(60),
})

const EndlessModeDialog = () => {
	const {setWords} = useWords()
	const router = useRouter()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			timer: 15,
		},
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const words = await fetchRandomWords(100)
			setWords(words)
			router.push(`/cycle?timer=${values.timer}`)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Start endless mode</DialogTitle>
				<DialogDescription>
					You will be presented with a random word every given interval. You have to write down a sentence
					using that word. This will continue until you stop the practice.
				</DialogDescription>

				<DialogDescription>
					Please note that this feature is still in development and occasionally present a word that might be
					too esoteric or obscure. In those cases, you can skip the word and move on to the next one.
				</DialogDescription>
			</DialogHeader>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 flex items-stretch justify-between gap-2">
					<FormField
						control={form.control}
						name="timer"
						render={({field}) => (
							<FormItem>
								<FormControl>
									<Input className="w-24" placeholder="Timer" type="number" {...field} />
								</FormControl>
								<FormMessage/>
							</FormItem>
						)}
					/>
					<Button
						size="sm"
						type="submit"
						className="w-full border border-primary"
						disabled={form.formState.isSubmitting || !form.formState.isValid}
						autoFocus={true}
					>
						{form.formState.isSubmitting && <Loader2 className="w-4 h-4 animate-spin mr-2"/>}
						Start practice
					</Button>
				</form>
			</Form>
		</DialogContent>
	)
}

export default EndlessModeDialog