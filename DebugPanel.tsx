'use client'

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {useFeature, useUser} from 'rioko'
import {ReactNode} from 'react'
import {Separator} from '@/components/ui/separator'

const DebugRow = ({children}: {children: ReactNode}) => {
	return (
		<div className="flex gap-4 items-center justify-between">
			{children}
		</div>
	)
}

const DebugRowTitle = ({children}: {children: ReactNode}) => {
	return <h3 className="text-xs">{children}</h3>
}

const DebugPanel = () => {
	const {feature, setOpen} = useFeature('FEAT_WT102_ENDLESS_MODE')
	const {user, incrementLevel, decrementLevel, setUser} = useUser()

	return (
		<Card
			style={{top: '16px', right: '16px'}}
			className="absolute border"
		>
			<CardHeader className="space-y-0.5 p-3">
				<CardTitle className="text-base">Debug Panel</CardTitle>
				<CardDescription className="text-xs">Debugging information goes here</CardDescription>
			</CardHeader>

			<CardContent className="space-y-2 p-3">
				<DebugRow>
					<DebugRowTitle>CURRENT LEVEL</DebugRowTitle>
					<p className="text-xs">{user.currentLevel}</p>
				</DebugRow>

				<DebugRow>
					<DebugRowTitle>INCREMENT LEVEL</DebugRowTitle>
					<Button
						size="sm"
						variant="outline"
						className="text-xs h-8"
						onClick={() => incrementLevel()}
					>Increment level</Button>
				</DebugRow>

				<DebugRow>
					<DebugRowTitle>DECREMENT LEVEL</DebugRowTitle>
					<Button
						size="sm"
						variant="outline"
						className="text-xs h-8"
						onClick={() => decrementLevel()}
					>Decrement level</Button>
				</DebugRow>

				<DebugRow>
					<DebugRowTitle>CLEAR HAS SEEN</DebugRowTitle>
					<Button
						size="sm"
						variant="outline"
						className="text-xs h-8"
						onClick={() => setUser({...user, hasSeen: []})}
					>Clear hasSeen</Button>
				</DebugRow>

				<Separator />

				<DebugRow>
					<DebugRowTitle>FEAT_WT102_ENDLESS_MODE</DebugRowTitle>
					<Button
						size="sm"
						variant="outline"
						className="text-xs h-8"
						onClick={() => setOpen(true)}
					>Open Popper</Button>
				</DebugRow>
			</CardContent>
		</Card>
	)
}

export default DebugPanel
