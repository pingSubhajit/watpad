'use client'

import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import SlidesUploader from '@/components/providers/SlidesUploader'
import {useWords} from '@/components/providers/GlobalStateProvider'
import {Button} from '@/components/ui/button'
import Link from 'next/link'

const PPTUploaderDialog = () => {
	const {words} = useWords()

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
					<p className="text-sm text-muted-foreground text-center">
						<span className="text-primary">{words.length}</span> words found in the presentation file.
					</p>
					<Link href="/cycle">
						<Button size="sm" className="w-full mt-3">Start practice</Button>
					</Link>
				</div>
			)}
		</DialogContent>
	)
}

export default PPTUploaderDialog
