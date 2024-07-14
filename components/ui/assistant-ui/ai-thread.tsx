'use client'

import {useChat} from 'ai/react'
import {Input} from '@/components/ui/input'
import {cn} from '@/lib/utils'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {MarkdownText} from '@/components/ui/assistant-ui/markdown-text'
import useChatScroll from '@/hooks/use-chat-scroll'
import {Button} from '@/components/ui/button'
import {Loader2, Send} from 'lucide-react'

const AiThread = () => {
	const {messages, input, handleInputChange, handleSubmit, isLoading} = useChat({
		api: '/ai/feedback',
	})

	const ref = useChatScroll(messages)

	return (
		<div className="p-4 pt-0 border h-full flex flex-col justify-end">
			{messages.length === 0 && <AiThreadEmpty />}
			<div className="text-primary/80 pt-8 space-y-2 overflow-y-auto custom-scroll" ref={ref}>
				{messages.map(message => <div key={message.id} className={cn(
					'flex [&>div]:py-2',
					message.role === 'user'
						? 'justify-end [&>div]:text-right [&>div]:bg-secondary [&>div]:rounded-full [&>div]:px-4'
						: 'justify-start',
				)}>
					{message.role !== 'user' && <Avatar className="w-8 h-8 mr-2 border rounded-md">
						<AvatarImage src="/logo.png" />
						<AvatarFallback>WP</AvatarFallback>
					</Avatar>}
					<div className="max-w-[80%]">
						{message.role === 'user' && message.content}
						{message.role !== 'user' && <MarkdownText content={message.content} />}
					</div>
				</div>)}
			</div>

			<form onSubmit={handleSubmit} className="mt-4">
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
						{isLoading && <Loader2 className="w-4 h-4 mr-1 animate-spin" />}
						<p>Send</p>
						{!isLoading && <Send className="w-4 h-4 ml-1" />}
					</Button>
				</div>
			</form>
		</div>
	)
}

export default AiThread

const AiThreadEmpty = () => {
	return (
		<div className="flex flex-grow basis-full flex-col items-center justify-center h-full">
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
