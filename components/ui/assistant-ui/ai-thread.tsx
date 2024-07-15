'use client'

import {useChat} from 'ai/react'
import {Input} from '@/components/ui/input'
import {cn} from '@/lib/utils'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {MarkdownText} from '@/components/ui/assistant-ui/markdown-text'
import useChatScroll from '@/hooks/use-chat-scroll'
import {Button} from '@/components/ui/button'
import {Loader2, Send} from 'lucide-react'
import {AnimatePresence, motion} from 'framer-motion'
import {defaultTextTransition, letterAnimation} from '@/lib/animations'

const AiThread = () => {
	const {messages, input, handleInputChange, handleSubmit, isLoading} = useChat({
		api: '/ai/feedback',
	})

	const ref = useChatScroll(messages)

	return (
		<div className="pt-0 h-full flex flex-col justify-end">
			<div className="text-primary/80 pt-8 space-y-2 overflow-y-auto custom-scroll p-4" ref={ref}>
				<AiThreadWelcome />
				{messages.map(message => <div key={message.id} className={cn(
					'flex [&>div]:py-2',
					message.role === 'user'
						? 'justify-end [&>div]:text-right [&>div]:bg-secondary [&>div]:rounded-xl [&>div]:px-4'
						: 'justify-start',
				)}>
					{message.role !== 'user' && <Avatar className="w-8 h-8 mr-2 border rounded-md">
						<AvatarImage src="/logo.png" />
						<AvatarFallback>WP</AvatarFallback>
					</Avatar>}
					<div className="max-w-[80%]">
						{message.role === 'user' && message.content}
						{message.role !== 'user' && <AnimatePresence>
						    <motion.div
						        variants={letterAnimation}
						        animate="animate"
						        exit="exit"
						        transition={defaultTextTransition}
						    >
						        <MarkdownText content={message.content}/>
						    </motion.div>
						</AnimatePresence>}
					</div>
				</div>)}
			</div>

			<form onSubmit={handleSubmit} className="p-4">
				<div className="flex items-center w-full gap-2">
					<Input
						value={input}
						placeholder="Type your message here"
						onChange={handleInputChange}
						className="flex-1"
					/>
					<Button
						disabled={isLoading || !input}
						type="submit"
						className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
					>
						<AnimatePresence mode="wait">
							{isLoading && <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}}>
								<Loader2 className="w-4 h-4 mr-1 animate-spin" />
							</motion.div>}
							<motion.p layout layoutId="send_text">Send</motion.p>
							{!isLoading && <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}}>
								<Send className="w-4 h-4 ml-1"/>
							</motion.div>}
						</AnimatePresence>

					</Button>
				</div>
			</form>
		</div>
	)
}

export default AiThread

const AiThreadWelcome = () => {
	return (
		<div className="flex flex-grow basis-full flex-col items-center justify-center mb-24">
			<Avatar className="w-16 h-16 border rounded-md">
				<AvatarImage src="/logo.png"/>
				<AvatarFallback>WP</AvatarFallback>
			</Avatar>
			<p className="mt-4 font-medium text-lg">Watpad Assistant</p>
			<p className="mt-2 text-sm text-muted-foreground text-center max-w-96">
				Present your sentence and get feedback on your answers. Improve your WAT skills and become better for
				your SSB interview.
			</p>
		</div>
	)
}
