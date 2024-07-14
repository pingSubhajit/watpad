import Image from 'next/image'
import Link from 'next/link'
import {githubRepo, portfolio} from '@/lib/constants'
import {Metadata} from 'next'
import {Separator} from '@/components/ui/separator'

export const metadata: Metadata = {
	title: 'About Watpad - Motivation, Creator, and License',
	description: 'Learn about the motivation behind Watpad, a mobile-first, Word Association Test practice app. ' +
		'Discover the creator, the MIT license, and credits. Watpad is free, open-source, and designed for ' +
		'WAT preparation',
	keywords: [
		'watpad', 'about', 'motivation', 'creator', 'license', 'credits', 'open-source', 'ssb', 'wat',
		'practice', 'app', 'word association test', 'ssb interview', 'ssb wat', 'ssb wat practice',
	]
}

const AboutPage = () => {
	return (
		<main className="flex flex-col items-start justify-center gap-8 min-h-lvh w-full mx-auto max-w-[600px] px-8 py-16">
			<header className="flex justify-between items-center w-full">
				<Link href="/">
					<Image src="/logo.svg" alt="Watpad logo" width={180} height={38} className="w-24"/>
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
				<h2 className="text-lg text-neutral-200 font-medium">AI Feedback</h2>
				<p className="mt-2 text-[15px] font-medium text-neutral-400 font-sans leading-relaxed">
					We've integrated AI feedback to help you improve your responses. The AI feedback is based on the
					general factors that play out in the SSB Interview. The feedback is not guaranteed to be accurate.
					To use it, go to the <Link href="/" className="text-cyan-300 hover:text-cyan-400 transition">
					home page</Link> and click on the button in the bottom right-hand corner or simply
					press "A" on your keyboard
				</p>
			</div>

			<div>
				<h2 className="text-lg text-neutral-200 font-medium">Contribute</h2>
				<p className="mt-2 text-[15px] font-medium text-neutral-400 font-sans leading-relaxed">
					The product is free to use. However, no new features, bug fixes, or any meaningful support will be
					guaranteed. The project is open source and can be found
					on <a href={githubRepo} target="_blank"
					      className="text-cyan-300 hover:text-cyan-400 transition">
					GitHub
					</a>. Feel free to fork, modify and host your own version. No attribution required.
				</p>
			</div>

			<Separator/>

			<footer className="flex justify-between items-center w-full">
				<p className="mt-2 text-sm font-medium text-neutral-400 italic">v0.02</p>
				<a href={portfolio} target="_blank" className="text-cyan-300 hover:text-cyan-400 transition">
					<p className="mt-2 text-sm font-medium text-right">Subhajit</p>
				</a>
			</footer>
		</main>
	)
}

export default AboutPage