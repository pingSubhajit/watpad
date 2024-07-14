'use client'

import {BotIcon, ChevronDownIcon} from 'lucide-react'

import {type FC, forwardRef} from 'react'
import {AssistantModalPrimitive} from '@assistant-ui/react'
import {TooltipIconButton} from '@/components/ui/assistant-ui/tooltip-icon-button'
import AiThread from '@/components/ui/assistant-ui/ai-thread'

export const AssistantModal: FC = () => {
	return (
		<AssistantModalPrimitive.Root>
			<AssistantModalPrimitive.Anchor className="fixed bottom-8 left-8 size-11">
				<AssistantModalPrimitive.Trigger asChild>
					<FloatingAssistantButton />
				</AssistantModalPrimitive.Trigger>
			</AssistantModalPrimitive.Anchor>
			<AssistantModalPrimitive.Content
				sideOffset={16}
				className="bg-popover text-popover-foreground data-[state=closed]:animate-out
				data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
				data-[state=closed]:zoom-out data-[state=open]:zoom-in data-[state=open]:slide-in-from-bottom-1/2
				data-[state=open]:slide-in-from-left-1/2 data-[state=closed]:slide-out-to-bottom-1/2
				data-[state=closed]:slide-out-to-left-1/2 z-50 h-[800px] w-[600px] ml-8 overflow-clip rounded-xl border
				p-0 shadow-md outline-none [&>div]:bg-inherit"
			>
				<AiThread />
			</AssistantModalPrimitive.Content>
		</AssistantModalPrimitive.Root>
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
			tooltip={tooltip}
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
