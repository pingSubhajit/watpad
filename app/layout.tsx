import type {Metadata} from 'next'
import localFont from 'next/font/local'
import './globals.css'
import {GlobalStateProvider} from '@/components/providers/global-state-provider'
import {ThemeProvider} from 'next-themes'
import {defaultUrl, portfolio} from '@/lib/constants'
import {Toaster} from '@/components/ui/sonner'
import ProgressBarProvider from '@/components/providers/progress-bar-provider'
import WatpadPostHogProvider from '@/components/providers/posthog-provider'
import {SpeedInsights} from '@vercel/speed-insights/next'

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
			<WatpadPostHogProvider>
				<body className={`${geistSans.variable} ${geistMono.variable}`}>
					<ProgressBarProvider>
						<ThemeProvider
							attribute="class"
							defaultTheme="dark"
							disableTransitionOnChange
						>
							<GlobalStateProvider>
								<div vaul-drawer-wrapper="" className="bg-background">
									{children}
									<Toaster/>
									<SpeedInsights/>
								</div>
							</GlobalStateProvider>
						</ThemeProvider>
					</ProgressBarProvider>
				</body>
			</WatpadPostHogProvider>
		</html>
	)
}
