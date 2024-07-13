'use client'

import {createContext, useContext, useMemo, useState} from 'react'
import {getRandomNumber} from '@/lib/utils'

type BackgroundContextValueType = {
	backgroundIndex: number
}

export type BackgroundContextType = [BackgroundContextValueType, {
	randomizeBackground: () => void
}]

const defaultBackgroundContext: BackgroundContextValueType = {
	backgroundIndex: 4
}

const BackgroundContext = createContext(
	[
		defaultBackgroundContext,
		{
			randomizeBackground: () => {}
		}
	] as BackgroundContextType
)

export const BackgroundProvider = ({children}: {children: React.ReactNode}) => {
	const [dialogContext, setDialogContext] = useState<BackgroundContextValueType>(defaultBackgroundContext)

	const randomizeBackgroundUnMemoized = () => {
		setDialogContext({...dialogContext, backgroundIndex: getRandomNumber(0, 7)})
	}

	const randomizeBackground = useMemo(() => randomizeBackgroundUnMemoized, [dialogContext.backgroundIndex])

	return (
		<BackgroundContext.Provider value={
			[dialogContext, {
				randomizeBackground
			}]
		}>
			{children}
		</BackgroundContext.Provider>
	)
}

export const useBackground = () => {
	const context = useContext(BackgroundContext)

	if (!context) {
		throw new Error('useBackground must be used within a BackgroundProvider')
	}

	return {backgroundIndex: context[0].backgroundIndex, randomizeBackground: context[1].randomizeBackground}
}
