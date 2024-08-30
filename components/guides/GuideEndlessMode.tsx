'use client'

import {PopoverContent} from '@/components/ui/popover'
import {Button} from '@/components/ui/button'
import {FeatureContentProps} from 'rioko'

const GuideEndlessMode = ({contentRef, closePopover}: FeatureContentProps) => (
	<PopoverContent className="p-2 rounded-xl" ref={contentRef}>
		<video autoPlay loop muted playsInline className="rounded-md">
			<source src="https://app.betterstacks.com/extension_showcase.mp4" type="video/mp4"/>
		</video>
		<div className="space-y-1 p-2">
			<h3 className="font-medium">Practice using random words with Endless mode</h3>
			<p className="text-sm text-muted-foreground">
				Endless mode gives you random words to practice with. You don't need to have a list of words or PPT
				files to practice and hone your WAT skills. Just get started and keep practicing.
			</p>
		</div>
		<div className="p-2">
			<Button
				size="sm"
				className="w-full"
				variant="secondary"
				onClick={closePopover}
			>Understood</Button>
		</div>
	</PopoverContent>
)

export default GuideEndlessMode
