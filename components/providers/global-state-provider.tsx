'use client'

import {createContext, useContext, useMemo, useState} from 'react'

type GlobalContextValueType = {
	words: string[],
}

export type GlobalContextType = [GlobalContextValueType, {
	setWords: (words: string[]) => void,
}]

const defaultGlobalContext: GlobalContextValueType = {
	words: []
}

const GlobalContext = createContext(
	[
		defaultGlobalContext,
		{
			setWords: () => {}
		}
	] as GlobalContextType
)

export const GlobalStateProvider = ({children}: {children: React.ReactNode}) => {
	const [dialogContext, setDialogContext] = useState<GlobalContextValueType>(defaultGlobalContext)

	const setWordsUnMemoized = (words: string[]) => {
		setDialogContext({...dialogContext, words: words})
	}

	const setWords = useMemo(() => setWordsUnMemoized, [dialogContext.words])

	return (
		<GlobalContext.Provider value={
			[dialogContext, {
				setWords,
			}]
		}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useWords = () => {
	const context = useContext(GlobalContext)

	if (!context) {
		throw new Error('useWords must be used within a GlobalStateProvider')
	}

	return {words: context[0].words, setWords: context[1].setWords}
}
