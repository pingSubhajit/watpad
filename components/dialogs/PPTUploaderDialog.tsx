'use client'

import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import SlidesUploader from '@/components/providers/SlidesUploader'
import {useWords} from '@/components/providers/GlobalStateProvider'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import {Input} from '@/components/ui/input'
import {useState} from 'react'

const PPTUploaderDialog = () => {
	const {words} = useWords()
	const [timer, setTimer] = useState(15)

	const handleTimerChange = (timer: number) => {
		setTimer(timer)
	}

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Upload a presentation file</DialogTitle>
				<DialogDescription>
					For best result, use a presentation file that has only one word per slide and no additional content.
					AI features are not implemented yet and it might be difficult for the app to extract words from
					complex slides.
				</DialogDescription>
			</DialogHeader>

			<SlidesUploader className="mt-4" />

			{words.length > 0 && (
				<div className="mt-4">
					<p className="text-sm text-muted-foreground">
						<span className="text-primary">{words.length}</span> words found in the presentation file.
					</p>

					<div className="mt-3 flex items-stretch justify-between gap-2">
						<Input className="w-24" placeholder="Timer" type="number" value={timer} onChange={event => handleTimerChange(Number(event.target.value))} />
						<Link href={`/cycle?timer=${timer}`} className="w-full">
							<Button size="sm" className="w-full border border-primary">Start practice</Button>
						</Link>
					</div>
				</div>
			)}
		</DialogContent>
	)
}

export default PPTUploaderDialog
