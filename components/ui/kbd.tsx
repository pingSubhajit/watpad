import {ReactNode} from 'react'
import {cn} from '@/lib/utils'

const Kbd = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
		<kbd className={cn(
			'pointer-events-none hidden h-5 select-none items-center gap-1 rounded ' +
			'border border-neutral-300 dark:border-neutral-700 ' +
			'bg-neutral-300 dark:bg-neutral-800 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex',
			className
		)}>
			{children}
		</kbd>
	)
}

export default Kbd