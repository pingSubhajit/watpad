'use client'

import SlidesUploader from '@/components/SlidesUploader'
import {useWords} from '@/components/providers/global-state-provider'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {useCallback, useEffect, useState} from 'react'
import {
	Credenza,
	CredenzaBody,
	CredenzaContent,
	CredenzaDescription,
	CredenzaHeader,
	CredenzaTitle,
	CredenzaTrigger
} from '@/components/ui/credenza'
import {Switch} from '@/components/ui/switch'
import Kbd from '@/components/ui/kbd'
import {useHotkeys} from '@mantine/hooks'
import {useRouter} from 'next-nprogress-bar'
import posthog from 'posthog-js'

const PPTUploaderDialog = () => {
	const [open, setOpen] = useState(false)
	const router = useRouter()
	const {words, setWords} = useWords()
	const [timer, setTimer] = useState(15)
	const [randomize, setRandomize] = useState(false)

	const resetWords = useCallback(() => {
		setWords([])
	}, [])

	useEffect(() => {
		if (open) {
			resetWords()
		}
	}, [open])

	const handleTimerChange = (timer: number) => {
		setTimer(timer)
	}

	useHotkeys([
		['p', () => setOpen(true)]
	])

	const onStartPractice = () => {
		posthog.capture('user_started_practice', {type: 'uploaded_ppt', words: words.length, randomize, timer})
		router.push(`/cycle?timer=${timer}&randomize=${randomize}`)
	}

	return (
		<Credenza open={open} onOpenChange={setOpen}>
			<CredenzaTrigger asChild>
				<Button variant="outline" className="rounded-full" size="lg">
					Upload .ppt file
					<Kbd className="text-xs ml-3">P</Kbd>
				</Button>
			</CredenzaTrigger>
			<CredenzaContent>
				<CredenzaHeader>
					<CredenzaTitle>Upload a presentation file</CredenzaTitle>
					<CredenzaDescription>
					For best result, use a presentation file that has only one word per slide and no additional content.
					AI features are not implemented yet and it might be difficult for the app to extract words from
					complex slides.
					</CredenzaDescription>
				</CredenzaHeader>

				<CredenzaBody>
					<SlidesUploader className="mt-4" />

					{words.length > 0 && (
						<div className="mt-4">
							<p className="text-sm text-muted-foreground">
								<span className="text-primary">{words.length}</span> words found in the presentation file.
							</p>

							<div className="mt-2 flex justify-between items-center">
								<span className="text-sm text-muted-foreground">Randomize slides</span>
								<Switch checked={randomize} onCheckedChange={checked => setRandomize(checked)} />
							</div>

							<div className="mt-3 flex items-stretch justify-between gap-2">
								<Input
									className="w-24" placeholder="Timer" type="number" value={timer}
									onChange={event => handleTimerChange(Number(event.target.value))}
								/>
								<Button size="sm" className="w-full border border-primary" onClick={onStartPractice}>
									Start practice
								</Button>
							</div>
						</div>
					)}
				</CredenzaBody>
			</CredenzaContent>
		</Credenza>
	)
}

export default PPTUploaderDialog
