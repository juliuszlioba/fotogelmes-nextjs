'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useSwipeable } from 'react-swipeable'

import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogClose,
} from '@/components/ui/dialog'
import { Gallery } from './gallery'
import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import ProgressRing from './progress-ring'
import { getAssetURL } from '@/lib/get-asset-url'

interface GaleryItem {
	id: string
	title: string
	description: string | null
	width: number
	height: number
}

const SlideShow = ({ data }: { data: GaleryItem[] }) => {
	const [index, setIndex] = useState(0)
	const [open, setOpen] = useState(false)

	const prevSlide = () => {
		setIndex((oldIndex) => {
			let index = oldIndex - 1
			if (index < 0) {
				index = data.length - 1
			}
			return index
		})
	}

	const nextSlide = () => {
		setIndex((oldIndex) => {
			let index = oldIndex + 1
			if (index > data.length - 1) {
				index = 0
			}
			return index
		})
	}

	const handlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide(),
	})

	if (data.length === 0) {
		return null
	}

	return (
		<Dialog open={open} onOpenChange={() => setOpen(!open)}>
			<div>
				<DialogTrigger
					asChild
					onClick={() => {
						setIndex(index)
					}}
				>
					<div {...handlers}>
						<Image
							src={getAssetURL(data[index].id)}
							alt={data[index].title}
							width={data[index].width}
							height={data[index].height}
							className={`absolute h-full w-full object-cover duration-300 hover:scale-102`}
						/>
					</div>
				</DialogTrigger>
				{data.length > 1 && (
					<div className="absolute bottom-4 right-4 inline-flex">
						<ProgressRing
							callBackFunction={() => {
								!open && nextSlide()
							}}
						/>
						<Button
							variant="secondary"
							size="icon"
							className="h-8 w-6 bg-background bg-opacity-50 hover:bg-background hover:bg-opacity-100"
							onClick={() => prevSlide()}
						>
							<ChevronLeft strokeWidth={1.5} />
						</Button>
						<Button
							variant="secondary"
							size="icon"
							className="h-8 w-6 bg-background bg-opacity-50 hover:bg-background hover:bg-opacity-100"
							onClick={() => nextSlide()}
						>
							<ChevronRight strokeWidth={1.5} />
						</Button>
					</div>
				)}
			</div>

			<DialogContent
				className="border-none bg-transparent p-0 shadow-none outline-none ring-0"
				onOpenAutoFocus={(event) => {
					event.preventDefault()
				}}
			>
				<Gallery
					data={data}
					index={index}
					closeBtn={
						<DialogClose asChild>
							<Button variant="ghost" size="icon">
								<X strokeWidth={1.5} />
							</Button>
						</DialogClose>
					}
				/>
			</DialogContent>
		</Dialog>
	)
}

export { SlideShow }
