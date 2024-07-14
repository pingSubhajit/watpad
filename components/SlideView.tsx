'use client'

import styles from '@/app/slide-view.module.scss'
import {cn} from '@/lib/utils'

const SlideView = ({slideContent}: { slideContent: string }) => {
	return (
		<div className="h-full w-full flex justify-center items-center">
			<div dangerouslySetInnerHTML={{__html: slideContent}} className={cn(
				styles.slide_view,
				'text-3xl md:text-5xl lg:text-6xl lg:tracking-[2px]'
			)}/>
		</div>
	)
}

export default SlideView
