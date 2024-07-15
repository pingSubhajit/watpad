'use client'

import {useWords} from '@/components/providers/global-state-provider'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {Loader2} from 'lucide-react'
import {fetchRandomWords} from '@/lib/data'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Form, FormControl, FormField, FormItem, FormMessage} from '@/components/ui/form'
import {
	Credenza,
	CredenzaBody,
	CredenzaContent,
	CredenzaDescription,
	CredenzaHeader,
	CredenzaTitle,
	CredenzaTrigger
} from '@/components/ui/credenza'
import {toast} from 'sonner'
import {useRouter} from 'next-nprogress-bar'
import Kbd from '@/components/ui/kbd'
import {useState} from 'react'
import {useHotkeys} from '@mantine/hooks'
import posthog from 'posthog-js'

const formSchema = z.object({
	timer: z.coerce.number().min(5).max(60),
})

const EndlessModeDialog = () => {
	const [open, setOpen] = useState(false)
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
			posthog.capture('user_started_practice', {type: 'endless_mode', timer: values.timer})
			router.push(`/cycle?timer=${values.timer}`)
		} catch (error) {
			toast.error('Failed to start practice. Please try again later.')
		}
	}

	useHotkeys([
		['e', () => setOpen(true)]
	])

	return (
		<Credenza open={open} onOpenChange={setOpen}>
			<CredenzaTrigger asChild>
				<Button className="rounded-full" size="lg">
					Endless mode
					<Kbd className="dark:border-neutral-400 dark:bg-neutral-300 text-xs ml-3">E</Kbd>
				</Button>
			</CredenzaTrigger>
			<CredenzaContent>
				<CredenzaHeader>
					<CredenzaTitle>Start endless mode</CredenzaTitle>
					<CredenzaDescription>
					You will be presented with a random word every given interval. You have to write down a sentence
					using that word. This will continue until you stop the practice.
					</CredenzaDescription>

					<CredenzaDescription>
					Please note that this feature is still in development and occasionally present a word that might be
					too esoteric or obscure. In those cases, you can skip the word and move on to the next one.
					</CredenzaDescription>
				</CredenzaHeader>

				<CredenzaBody>
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
								disabled={form.formState.isSubmitting}
								autoFocus={true}
							>
								{form.formState.isSubmitting && <Loader2 className="w-4 h-4 animate-spin mr-2"/>}
							Start practice
							</Button>
						</form>
					</Form>
				</CredenzaBody>
			</CredenzaContent>
		</Credenza>
	)
}

export default EndlessModeDialog