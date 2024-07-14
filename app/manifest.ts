import {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Watpad - Word Association Test Practice',
		short_name: 'Watpad',
		description: 'Watpad is a mobile-first, Word Association Test practice app. Designed for WAT preparation. ' +
			'The app is designed to create an interactive environment from uploaded .ppt file of practice words to ' +
			'practice the test in similar environment as in SSB Interview.',
		start_url: '/',
		display: 'standalone',
		background_color: '#0a0a0a',
		theme_color: '#0a0a0a',
		icons: [
			{
				src: '/logo144.png',
				sizes: '144x144',
				type: 'image/png',
			},
			{
				src: '/logo512.png',
				sizes: '512x512',
				type: 'image/png'
			}
		],
		orientation: 'portrait',
	}
}