'use client'

import Link from 'next/link'
import {cn} from '@/lib/utils'
import {Button} from '@/components/ui/button'
import {ChevronLeft} from 'lucide-react'
import {useHotkeys} from '@mantine/hooks'
import {useRouter} from 'next-nprogress-bar'

const NavBar = () => {
	const router = useRouter()
	useHotkeys([
		['Escape', () => router.push('/')]
	])

	return (
		<nav className={cn(
			'absolute top-4 left-4 z-10',
		)}>
			<Link href="/">
				<Button variant="outline" size="icon" className="rounded-full">
					<ChevronLeft className="text-primary/80" />
				</Button>
			</Link>
		</nav>
	)
}

export default NavBar
