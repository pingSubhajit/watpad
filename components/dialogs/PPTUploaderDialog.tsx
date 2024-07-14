'use client'

import SlidesUploader from '@/components/SlidesUploader'
import {useWords} from '@/components/providers/global-state-provider'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import {Input} from '@/components/ui/input'
import {useState} from 'react'
import {
	CredenzaBody,
	CredenzaContent,
	CredenzaDescription,
	CredenzaHeader,
	CredenzaTitle
} from '@/components/ui/credenza'
import {Switch} from '@/components/ui/switch'

const PPTUploaderDialog = () => {
	const {words} = useWords()
	const [timer, setTimer] = useState(15)
	const [randomize, setRandomize] = useState(false)

	const handleTimerChange = (timer: number) => {
		setTimer(timer)
	}

	return (
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
							<Link
								href={{
									pathname: '/cycle',
									query: {timer, randomize}
								}}
								className="w-full">
								<Button size="sm" className="w-full border border-primary">Start practice</Button>
							</Link>
						</div>
					</div>
				)}
			</CredenzaBody>
		</CredenzaContent>
	)
}

export default PPTUploaderDialog
