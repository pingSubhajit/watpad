'use client'

import styles from '@/app/slide-view.module.scss'
import {cn} from '@/lib/utils'
import {AnimatePresence, motion} from 'framer-motion'
import {defaultTextTransition, letterAnimation} from '@/lib/animations'

const SlideView = ({slideContent}: { slideContent: string }) => {
	return (
		<div className="h-full w-full flex justify-center items-center">
			<AnimatePresence mode="wait">
				<motion.div
					key={slideContent}
					className={cn(
						styles.slide_view,
						'text-3xl md:text-5xl lg:text-6xl lg:tracking-[2px]'
					)}
					variants={letterAnimation}
					animate="animate"
					exit="exit"
					transition={defaultTextTransition}
					dangerouslySetInnerHTML={{__html: slideContent}}
				/>
			</AnimatePresence>
		</div>
	)
}

export default SlideView
