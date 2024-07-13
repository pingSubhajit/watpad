'use client'

import React, {useState} from 'react'
import {useDropzone} from 'react-dropzone'
import JSZip from 'jszip'
import PptxGenJS from 'pptxgenjs'
import SlideView from '@/components/SlideView'

const TestUploadAndView = () => {
	const [slides, setSlides] = useState<string[]>([])
	const [selectedSlide, setSelectedSlide] = useState<number | null>(null)

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
			setSlides(slideContents)
		}

		reader.readAsArrayBuffer(file)
	}

	const {getRootProps, getInputProps} = useDropzone({onDrop})

	return (
		<div>
			<div {...getRootProps()} style={{border: '1px solid #ccc', padding: '20px', textAlign: 'center'}}>
				<input {...getInputProps()} />
				<p>Drag & drop a .pptx file here, or click to select one</p>
			</div>

			<div>
				<h2>Slides</h2>
				{slides.map((slide, index) => (
					<div key={index} onClick={() => setSelectedSlide(index)}>
						<p>Slide {index + 1}</p>
					</div>
				))}
			</div>

			{selectedSlide !== null && (
				<SlideView slideContent={slides[selectedSlide]}/>
			)}
		</div>
	)
}

export default TestUploadAndView
