'use client'

import styles from '@/app/slide-view.module.scss'

const SlideView = ({slideContent}: { slideContent: string }) => {
	return (
		<div className="h-full w-full flex justify-center items-center">
			<div dangerouslySetInnerHTML={{__html: slideContent}} className={styles.slide_view}/>
		</div>
	)
}

export default SlideView
