import Link from 'next/link'
import {cn} from '@/lib/utils'
import {Separator} from '@/components/ui/separator'
import {ChevronRight} from 'lucide-react'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'

const Pill = ({ href, title }: { href: string; title: string }) => {
	return (
		<Link href={href}>
			<AnimatedGradientText>
				<div
					className={cn(
						'absolute inset-0 block size-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]',
						'p-px ![mask-composite:subtract]',
					)}
				/>
				🎉 <Separator className="mx-2 h-4" orientation="vertical" />
				<span
					className={cn(
						'animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent',
						'inline',
					)}
				>
					{title}
				</span>
				<ChevronRight className="ml-1 size-4 text-gray-500" />
			</AnimatedGradientText>
		</Link>
	)
}

export default Pill
