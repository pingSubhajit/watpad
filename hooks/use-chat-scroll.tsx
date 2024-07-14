'use client'

import {useEffect, useRef} from 'react'

function useChatScroll<T>(dep: T): React.MutableRefObject<HTMLDivElement> {
	const ref = useRef<HTMLDivElement>()
	useEffect(() => {
		if (ref.current) {
			ref.current.scrollTop = ref.current.scrollHeight
		}
	}, [dep])
	return ref as React.MutableRefObject<HTMLDivElement>
}

export default useChatScroll