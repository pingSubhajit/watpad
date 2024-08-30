'use client'

import posthog from 'posthog-js'
import {PostHogProvider} from 'posthog-js/react'
import {ReactNode} from 'react'

if (typeof window !== 'undefined') {
	if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
		throw new Error('NEXT_PUBLIC_POSTHOG_KEY is not set')
	}
	posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
		api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
		person_profiles: 'always'
	})
}
const WatpadPostHogProvider = ({children}: {children: ReactNode}) => {
	return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

export default WatpadPostHogProvider
