'use client'

import {BotIcon, ChevronDownIcon} from 'lucide-react'
import {type FC, forwardRef, useState} from 'react'
import {TooltipIconButton} from '@/components/ui/assistant-ui/tooltip-icon-button'
import AiThread from '@/components/ui/assistant-ui/ai-thread'
import Kbd from '@/components/ui/kbd'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {PopoverAnchor} from '@radix-ui/react-popover'
import {useHotkeys} from '@mantine/hooks'

export const AssistantModal: FC = () => {
	const [aiChatOpen, setAiChatOpen] = useState(false)

	useHotkeys([
		['a', () => {
			if (!aiChatOpen) setAiChatOpen(true)
		}]
	])

	return (
		<Popover open={aiChatOpen} onOpenChange={setAiChatOpen}>
			<PopoverAnchor className="fixed bottom-36 left-1/2 -translate-x-1/2 lg:bottom-8 lg:left-8 lg:transform-none size-11">
				<PopoverTrigger asChild>
					<FloatingAssistantButton />
				</PopoverTrigger>
			</PopoverAnchor>
			<PopoverContent
				sideOffset={16}
				className="z-50 h-[650px] lg:h-[800px] w-[600px] max-w-[90vw] ml-8 overflow-clip rounded-xl p-0"
			>
				<AiThread />
			</PopoverContent>
		</Popover>
	)
}

type FloatingAssistantButtonProps = { 'data-state'?: 'open' | 'closed' };

const FloatingAssistantButton = forwardRef<
  HTMLButtonElement,
  FloatingAssistantButtonProps
>(({ 'data-state': state, ...rest }, ref) => {
	const tooltip = state === 'open' ? 'Close Assistant' : 'Open Assistant'

	return (
		<TooltipIconButton
			variant="default"
			tooltip={<div className="flex items-center gap-2">
				{tooltip}
				<Kbd>A</Kbd>
			</div>}
			side="left"
			{...rest}
			className="size-full rounded-full shadow transition-transform hover:scale-110 active:scale-90"
			ref={ref}
		>
			<BotIcon
				data-state={state}
				className="absolute size-6 transition-all data-[state=closed]:rotate-0 data-[state=open]:rotate-90 data-[state=closed]:scale-100 data-[state=open]:scale-0"
			/>

			<ChevronDownIcon
				data-state={state}
				className="absolute size-6 transition-all data-[state=closed]:-rotate-90 data-[state=open]:rotate-0 data-[state=closed]:scale-0 data-[state=open]:scale-100"
			/>
			<span className="sr-only">{tooltip}</span>
		</TooltipIconButton>
	)
})

FloatingAssistantButton.displayName = 'FloatingAssistantButton'
