'use client'

import SlideView from '@/components/SlideView'
import {useWords} from '@/components/providers/GlobalStateProvider'
import React, {useEffect, useState} from 'react'
import {notFound} from 'next/navigation'
import RemainingTime from '@/components/RemainingTime'

const SlideCycler = ({timer=15}: {timer?: number}) => {
	const {words} = useWords()

	if (words.length === 0) {
		notFound()
	}

	const [selectedSlide, setSelectedSlide] = useState<number>(0)
	const [timeRemaining, setTimeRemaining] = useState<number>(timer)

	useEffect(() => {
		const interval = setInterval(() => {
			setSelectedSlide((selectedSlide + 1) % words.length)
			setTimeRemaining(timer)
		}, timer * 1000)

		return () => clearInterval(interval)
	}, [selectedSlide])

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeRemaining(timeRemaining - 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [timeRemaining])

	return (
		<>
			<SlideView slideContent={words[selectedSlide]}/>
			<RemainingTime time={timeRemaining} className="absolute z-10 bottom-8 right-8" />
		</>

	)
}

export default SlideCycler