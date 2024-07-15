'use client'

import {useWords} from '@/components/providers/global-state-provider'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {Loader2} from 'lucide-react'
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
import {Textarea} from '@/components/ui/textarea'
import {parseWordsFromInput} from '@/app/ai/parse'
import {Switch} from '@/components/ui/switch'
import {useState} from 'react'
import Kbd from '@/components/ui/kbd'
import {useHotkeys} from '@mantine/hooks'

const formSchema = z.object({
	input: z.string().min(1, 'Please enter some words to get started'),
	timer: z.coerce.number().min(5).max(60),
})

const CustomWordsDialog = () => {
	const [open, setOpen] = useState(false)
	const {setWords} = useWords()
	const router = useRouter()
	const [randomize, setRandomize] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			input: '',
			timer: 15,
		},
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const words = await parseWordsFromInput(values.input)
			setWords(words)
			router.push(`/cycle?timer=${values.timer}&randomize=${randomize}`)
		} catch (error) {
			toast.error('Failed to start practice. Please try again later.')
		}
	}

	useHotkeys([
		['o', () => setOpen(true)]
	])

	return (
		<Credenza open={open} onOpenChange={setOpen}>
			<CredenzaTrigger asChild>
				<Button variant="outline" className="rounded-full w-full mt-4" size="lg">
					Practice with your own words
					<Kbd className="text-xs ml-3">O</Kbd>
				</Button>
			</CredenzaTrigger>
			<CredenzaContent>
				<CredenzaHeader>
					<CredenzaTitle>Practice with your own words</CredenzaTitle>
					<CredenzaDescription>
					If you have a list of words instead of a .ppt file, you can paste them here and start practicing.
					The application doesn't require any specific format. Just paste the words in any format with any
					meaningful separation and start practicing.
					</CredenzaDescription>
				</CredenzaHeader>

				<CredenzaBody>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
							<FormField
								control={form.control}
								name="input"
								render={({field}) => (
									<FormItem>
										<FormControl>
											<Textarea
												className="w-full h-48 custom-scroll resize-none"
												placeholder="Paste your words here"
												{...field}
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>

							<div className="mt-3 flex justify-between items-center">
								<span className="text-sm text-muted-foreground">Randomize slides</span>
								<Switch checked={randomize} onCheckedChange={checked => setRandomize(checked)}/>
							</div>

							<div className="mt-3 flex items-stretch justify-between gap-2">
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
								>
									{form.formState.isSubmitting && <Loader2 className="w-4 h-4 animate-spin mr-2"/>}
								Start practice
								</Button>
							</div>
						</form>
					</Form>
				</CredenzaBody>
			</CredenzaContent>
		</Credenza>
	)
}

export default CustomWordsDialog