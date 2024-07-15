import Link from 'next/link'
import {cn} from '@/lib/utils'
import {Button} from '@/components/ui/button'
import {ChevronLeft} from 'lucide-react'

const NavBar = () => {
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
