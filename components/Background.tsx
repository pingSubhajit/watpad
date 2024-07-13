'use client'

import {useBackground} from '@/components/providers/BackgroundProvider'

const Background = () => {
	const {backgroundIndex} = useBackground()

	return (
		<>
			{backgroundIndex === 0 && <div
				className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24
				[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
			/>}

			{backgroundIndex === 1 && <div
				className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950
				bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
			/>}

			{backgroundIndex === 2 && <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950">
				<div
					className="absolute bottom-0 left-0 right-0 top-0
                    bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"
				/>
			</div>}

			{backgroundIndex === 3 && <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950">
				<div className="absolute bottom-0 left-0 right-0 top-0
                bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"
				/>
			</div>}

			{backgroundIndex === 4 && <div className="absolute inset-0 -z-10 h-full w-full bg-black">
				<div
					className="absolute bottom-0 left-0 right-0 top-0
                    bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
                    bg-[size:14px_24px]"
				/>
				{/*<div*/}
				{/*	className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full*/}
				{/*    bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"*/}
				{/*/>*/}
			</div>}

			{backgroundIndex === 5 && <div
				className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
			/>}

			{backgroundIndex === 6 && <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950">
				<div
					className="absolute bottom-0 left-0 right-0 top-0
                    bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
                    bg-[size:14px_24px]"
				/>
			</div>}

			{backgroundIndex === 7 && <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950 overflow-hidden">
				<div
					className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full
                    bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"
				/>
				<div
					className="absolute bottom-0 right-[20%] top-[10%] h-[1000px] w-[1000px] rounded-full
                    bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] blur-3xl"
				/>
			</div>}
		</>
	)
}

export default Background
