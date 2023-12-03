'use client'

import { useState } from 'react'
import Image from 'next/image'

import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogClose,
} from '@/components/ui/dialog'
import { Gallery } from './gallery'
import { Button } from '../ui/button'
import { X } from 'lucide-react'
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

	const nextSlide = () => {
		setIndex((oldIndex) => {
			let index = oldIndex + 1
			if (index > data.length - 1) {
				index = 0
			}
			return index
		})
	}

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
					<div>
						<Image
							src={getAssetURL(data[index].id)}
							alt={data[index].title}
							width={data[index].width}
							height={data[index].height}
							className={`hover:scale-102 absolute h-full w-full object-cover duration-300`}
						/>
					</div>
				</DialogTrigger>
				{data.length > 1 && (
					<div className="absolute bottom-4 right-4">
						<ProgressRing
							callBackFunction={() => {
								!open && nextSlide()
							}}
						/>
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
