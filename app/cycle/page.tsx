import SlideCycler from '@/components/SlideCycler'
import Background from '@/components/Background'
import NavBar from '@/components/NavBar'

type Props = {
	searchParams: { [key: string]: string | string[] | undefined };
};

const CyclePage = ({ searchParams }: Props) => {
	const timer = Number(searchParams.timer) || 15

	return (
		<div className="h-svh w-screen overflow-hidden">
			<NavBar />
			<Background />
			<SlideCycler timer={timer}/>
		</div>
	)
}

export default CyclePage
