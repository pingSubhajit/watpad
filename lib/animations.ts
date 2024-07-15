export const letterAnimation = {
	animate: { opacity: [0, 1, 1], filter: ['blur(20px)', 'blur(10px)', 'blur(0px)']},
	exit: { opacity: [1, 1, 0], filter: ['blur(0px)', 'blur(0px)', 'blur(10px)'] }
}

export const defaultTextTransition = { ease: 'easeOut', duration: 0.4, times: [0, 0.3, 1] }