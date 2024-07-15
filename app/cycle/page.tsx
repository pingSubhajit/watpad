import SlideCycler from '@/components/SlideCycler'
import NavBar from '@/components/NavBar'
import {Metadata} from 'next'

type Props = {
	searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata: Metadata = {
	title: 'Watpad - Word Association Test Practice',
	description: 'Watpad is a mobile-first, Word Association Test practice app. Designed for WAT preparation, ' +
		'it is free, open-source, and cloud-synced. Practice long duration tests with ease.',
}

const CyclePage = ({ searchParams }: Props) => {
	const timer = Number(searchParams.timer) || 15
	const randomize = searchParams.randomize ? searchParams.randomize === 'true' : false

	return (
		<div className="h-svh w-screen overflow-hidden">
			<NavBar />
			<SlideCycler timer={timer} randomize={randomize} />
		</div>
	)
}

export default CyclePage
