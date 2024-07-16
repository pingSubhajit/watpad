import Image from 'next/image'
import PPTUploaderDialog from '@/components/dialogs/PPTUploaderDialog'
import {Cookie, Info, Scale} from 'lucide-react'
import Link from 'next/link'
import {Metadata} from 'next'
import EndlessModeDialog from '@/components/dialogs/EndlessModeDialog'
import {AssistantModal} from '@/components/ui/assistant-ui/assistant-modal'
import Pill from '@/components/Pill'
import CustomWordsDialog from '@/components/dialogs/CustomWordsDialog'

export const metadata: Metadata = {
	title: 'Watpad - Word Association Test Practice',
	description: 'Watpad is a mobile-first, Word Association Test practice app. Designed for WAT preparation, ' +
		'it is free, open-source, and cloud-synced. Practice long duration tests with ease.',
}

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<Pill href="/about" title="Introducing AI" />
				<Image
					className=""
					src="/logo.svg"
					alt="Watpad logo"
					width={180}
					height={38}
					priority
				/>
				<ol className="font-mono list-inside list-decimal text-sm text-center sm:text-left">
					<li className="mb-2">
                        Get started selecting a mode
					</li>
					<li>Set your timer and start</li>
				</ol>

				<div>
					<div className="flex gap-4 items-center flex-col sm:flex-row">
						<EndlessModeDialog />
						<PPTUploaderDialog />
					</div>

					<CustomWordsDialog />
				</div>

				<AssistantModal/>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<Link
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="/about"
				>
					<Info className="w-4 h-4 stroke-primary/50"/>
					About
				</Link>
				<Link
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="/privacy"
				>
					<Cookie className="w-4 h-4 stroke-primary/50"/>
					Privacy
				</Link>
				<Link
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="/terms"
				>
					<Scale className="w-4 h-4 stroke-primary/50" />
                    Terms of use
				</Link>
			</footer>
		</div>
	)
}
