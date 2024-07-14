'use client'

import {forwardRef, ReactNode} from 'react'

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from '@/components/ui/tooltip'
import {Button, ButtonProps} from '@/components/ui/button'
import {cn} from '@/lib/utils'

export type TooltipIconButtonProps = ButtonProps & {
  tooltip: ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
};

export const TooltipIconButton = forwardRef<
  HTMLButtonElement,
  TooltipIconButtonProps
>(({ children, tooltip, side = 'bottom', className, ...rest }, ref) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						{...rest}
						className={cn('size-6 p-1', className)}
						ref={ref}
					>
						{children}
						<span className="sr-only">{tooltip}</span>
					</Button>
				</TooltipTrigger>
				<TooltipContent side={side} sideOffset={8}>{tooltip}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
})

TooltipIconButton.displayName = 'TooltipIconButton'
