'use client'

import {useWords} from '@/components/providers/GlobalStateProvider'
import {useEffect, useState} from 'react'
import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import {Input} from '@/components/ui/input'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {Loader2} from 'lucide-react'
import {fetchRandomWords} from '@/lib/data'

const EndlessModeDialog = () => {
	const {setWords} = useWords()
	const [timer, setTimer] = useState(15)
	const [loading, setLoading] = useState(true)

	const handleTimerChange = (timer: number) => {
		setTimer(timer)
	}

	useEffect(() => {
		(async () => {
			try {
				const words = await fetchRandomWords(100)
				setWords(words)
				setLoading(false)
				console.log(words)
			} catch (error) {
				console.error(error)
			}
		})()
	}, [])

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

			<div className="mt-4 flex items-stretch justify-between gap-2">
				<Input
					className="w-24" placeholder="Timer" type="number" value={timer}
					onChange={event => handleTimerChange(Number(event.target.value))}
				/>
				<Link href={`/cycle?timer=${timer}`} className="w-full">
					<Button size="sm" className="w-full border border-primary" disabled={loading}>
						{loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
						Start practice
					</Button>
				</Link>
			</div>
		</DialogContent>
	)
}

export default EndlessModeDialog