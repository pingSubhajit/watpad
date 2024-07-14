'use client'

import {useWords} from '@/components/providers/global-state-provider'
import React from 'react'
import {useDropzone} from 'react-dropzone'
import JSZip from 'jszip'
import PptxGenJS from 'pptxgenjs'
import {cn} from '@/lib/utils'
import {UploadIcon} from 'lucide-react'

const SlidesUploader = ({className}: {className?: string}) => {
	const {setWords} = useWords()

	const onDrop = async (acceptedFiles: File[]) => {
		const file = acceptedFiles[0]
		const reader = new FileReader()

		reader.onload = async (event: ProgressEvent<FileReader>) => {
			const arrayBuffer = event.target?.result as ArrayBuffer
			const zip = await JSZip.loadAsync(arrayBuffer)
			const pptx = new PptxGenJS()

			// Extract slides from the pptx file
			const slidePromises = Object.keys(zip.files)
				.filter((fileName) => fileName.endsWith('.xml') && fileName.includes('ppt/slides/slide'))
				.map(async (fileName) => {
					const slideContent = await zip.file(fileName)!.async('text')
					return slideContent
				})

			const slideContents = await Promise.all(slidePromises)
			setWords(slideContents)
		}

		reader.readAsArrayBuffer(file)
	}

	const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
		onDrop,
		accept: {
			'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
			'application/vnd.ms-powerpoint': ['.ppt'],
			'application/vnd.openxmlformats-officedocument.presentationml.slideshow': ['.ppsx'],
		}
	})

	return (
		<div {...getRootProps()} className={cn(
			'group relative grid h-52 w-full cursor-pointer place-items-center\n' +
			'rounded-lg border-2 border-dashed border-muted-foreground/25 px-5 py-2.5 text-center transition\n' +
			'hover:bg-muted/25 ring-offset-background focus-visible:outline-none focus-visible:ring-2\n' +
			'focus-visible:ring-ring focus-visible:ring-offset-2',
			isDragActive && 'border-muted-foreground/50',
			className
		)}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<div className="flex flex-col items-center justify-center gap-4 sm:px-5">
					<div className="rounded-full border border-dashed p-3">
						<UploadIcon
							className="size-7 text-muted-foreground"
							aria-hidden="true"
						/>
					</div>
					<p className="font-medium text-muted-foreground">
						Drop the files here
					</p>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center gap-4 sm:px-5">
					<div className="rounded-full border border-dashed p-3">
						<UploadIcon
							className="size-7 text-muted-foreground"
							aria-hidden="true"
						/>
					</div>
					{acceptedFiles.length === 0
						? <div className="space-y-px">
							<p className="font-medium text-muted-foreground">
								Drag {'\'n\''} drop files here, or click to select files
							</p>
							<p className="text-sm text-muted-foreground/70">
								You can upload
								.pptx, .ppt, .ppsx, or other presentation files
							</p>
						</div>
						: <p className="font-medium text-muted-foreground">
							{acceptedFiles[0].name}
						</p>
					}
				</div>
			)}
		</div>
	)
}

export default SlidesUploader
