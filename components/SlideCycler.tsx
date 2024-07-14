'use client'

import SlideView from '@/components/SlideView'
import {useWords} from '@/components/providers/GlobalStateProvider'
import React, {useEffect, useState} from 'react'
import {notFound} from 'next/navigation'
import RemainingTime from '@/components/RemainingTime'
import {Howl} from 'howler'
import {Button} from '@/components/ui/button'
import Kbd from '@/components/ui/kbd'
import {useHotkeys} from '@mantine/hooks'

const SlideCycler = ({timer=15}: {timer?: number}) => {
	const {words} = useWords()

	if (words.length === 0) {
		notFound()
	}

	const sound = new Howl({
		src: ['/sounds/boop.mp3']
	})

	const [selectedSlide, setSelectedSlide] = useState<number>(0)
	const [timeRemaining, setTimeRemaining] = useState<number>(timer)

	useEffect(() => {
		const interval = setInterval(() => {
			setSelectedSlide((selectedSlide + 1) % words.length)
			setTimeRemaining(timer)
			sound.play()
		}, timer * 1000)

		return () => clearInterval(interval)
	}, [selectedSlide])

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeRemaining(timeRemaining - 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [timeRemaining])

	const nextSlide = () => {
		setSelectedSlide((selectedSlide + 1) % words.length)
		sound.play()
		setTimeRemaining(timer)
	}

	useHotkeys([
		['space', nextSlide]
	])

	return (
		<>
			<SlideView slideContent={words[selectedSlide]}/>
			<RemainingTime time={timeRemaining} className="absolute z-10 bottom-8 right-8" />

			<Button
				variant="outline"
				onClick={nextSlide}
				className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 p-4 rounded-full w-96 text-primary/80"
			>
				Skip word and go to next
				<Kbd className="ml-6">Space</Kbd>
			</Button>
		</>

	)
}

export default SlideCycler