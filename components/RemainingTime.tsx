import {cn} from '@/lib/utils'
import {Howl} from 'howler'

const RemainingTime = ({ time, className }: { time: number, className?: string }) => {
	const sound = new Howl({
		src: ['/sounds/tick.wav']
	})

	if (time <= 5) {
		sound.play()
	}

	return <div className={cn('text-2xl font-semibold', className)}>
		{time}
	</div>
}

export default RemainingTime
