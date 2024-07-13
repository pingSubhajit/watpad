import {cn} from '@/lib/utils'

const RemainingTime = ({ time, className }: { time: number, className?: string }) => {
	return <div className={cn('text-2xl font-semibold', className)}>
		{time}
	</div>
}

export default RemainingTime
