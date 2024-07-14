import type {Metadata} from 'next'
import localFont from 'next/font/local'
import './globals.css'
import {GlobalStateProvider} from '@/components/providers/global-state-provider'
import {ThemeProvider} from 'next-themes'
import {BackgroundProvider} from '@/components/providers/background-provider'
import {defaultUrl, portfolio} from '@/lib/constants'
import {Toaster} from '@/components/ui/sonner'
import ProgressBarProvider from '@/components/providers/progress-bar-provider'
import {AssistantModal} from '@/components/ui/assistant-ui/assistant-modal'
import AiRuntimeProvider from '@/components/providers/ai-runtime-provider'
import {AI} from '@/app/actions'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
})

const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
})

export const metadata: Metadata = {
	metadataBase: new URL(defaultUrl),
	keywords: [
		'watpad', 'word association test', 'wat', 'practice', 'app', 'ssb', 'ssb wat', 'ssb wat practice',
		'ssb interview', 'ssb wat practice app', 'word association test practice', 'wat practice app',
		'word association test practice app', 'wat practice', 'word association test practice',
	],
	generator: 'Next.js',
	manifest: '/manifest.webmanifest',
	icons: [
		{ rel: 'apple-touch-icon', url: 'logo.png' },
		{ rel: 'icon', url: 'logo.png' },
	],
	authors: [{ name: 'Subhajit Kundu', url: portfolio }]
}

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<ProgressBarProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						disableTransitionOnChange
					>
						<GlobalStateProvider>
							<BackgroundProvider>
								<AI>
									<AiRuntimeProvider>
										<div vaul-drawer-wrapper="" className="bg-background">
											{children}

											<AssistantModal />
											<Toaster/>
										</div>
									</AiRuntimeProvider>
								</AI>
							</BackgroundProvider>
						</GlobalStateProvider>
					</ThemeProvider>
				</ProgressBarProvider>
			</body>
		</html>
	)
}
