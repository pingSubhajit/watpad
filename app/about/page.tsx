import Image from 'next/image'
import Link from 'next/link'
import {githubRepo, portfolio} from '@/lib/constants'
import {Metadata} from 'next'
import {Separator} from '@/components/ui/separator'

export const metadata: Metadata = {
	title: 'About Ticker - Motivation, Creator, License, and Credits',
	description: 'Learn about the motivation behind Ticker, a mobile-first, long-duration, cloud-synced stopwatch app. ' +
		'Discover the creator, the MIT license, and credits. Ticker is free, open-source, and designed for ' +
		'long-term time tracking.',
	keywords: ['Ticker', 'about Ticker', 'stopwatch motivation', 'Ticker creator', 'Ticker license', 'MIT license',
		'stopwatch credits', 'open source stopwatch', 'free stopwatch app', 'long duration stopwatch',
		'cloud-synced stopwatch'
	]
}

const AboutPage = () => {
	return (
		<main className="flex flex-col items-start justify-center gap-8 min-h-svh w-full mx-auto max-w-[600px]">
			<header className="flex justify-between items-center w-full">
				<Link href="/">
					<Image src="/logo.svg" alt="Ticker logo" width={180} height={38} className="w-24"/>
				</Link>
			</header>

			<div>
				<h2 className="text-lg text-neutral-200 font-medium">Watpad: Word Association Test Practice</h2>
				<p className="mt-2 text-[15px] font-medium text-neutral-400 font-sans leading-relaxed">
					A small app to practice the Word Association Test for SSB Interview. The app is designed to create
					an interactive environment from uploaded .ppt file of practice words to practice the test in similar
					environment as in SSB Interview.
				</p>
			</div>

			<div>
				<h2 className="text-lg text-neutral-200 font-medium">About</h2>
				<p className="mt-2 text-[15px] font-medium text-neutral-400 font-sans leading-relaxed">
					Built for personal usage, designed with personal preferences. The application is bare-featured with
					minimalistic design and functionality. Loads fast and animated appropriately. Mobile first design.
					No onboarding. No login. No tracking. No ads, ever.
				</p>
			</div>

			<div>
				<h2 className="text-lg text-neutral-200 font-medium">Contribute</h2>
				<p className="mt-2 text-[15px] font-medium text-neutral-400 font-sans leading-relaxed">
					The product is free to use. However, no new features, bug fixes, or any meaningful support will be
					guaranteed. The project is open source and can be found
					on <a href={githubRepo} target="_blank"
						className="text-yellow-400 hover:text-yellow-500 transition">
							GitHub
					</a>. Feel free to fork, modify and host your own version. No attribution required.
				</p>
			</div>

			<Separator />

			<footer className="flex justify-between items-center w-full">
				<p className="mt-2 text-sm font-medium text-neutral-400 italic">v0.01</p>
				<a href={portfolio} target="_blank" className="text-yellow-400 hover:text-yellow-500 transition">
					<p className="mt-2 text-sm font-medium text-right">Subhajit</p>
				</a>
			</footer>
		</main>
	)
}

export default AboutPage