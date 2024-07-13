'use client'

const SlideView = ({slideContent}: { slideContent: string }) => {
	return (
		<div>
			<div dangerouslySetInnerHTML={{__html: slideContent}}/>
		</div>
	)
}

export default SlideView
