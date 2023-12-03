'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, InfoIcon } from 'lucide-react'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { useEffect, useState } from 'react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { getAssetURL } from '@/lib/get-asset-url'

interface GaleryItem {
	id: string
	title: string
	description: string | null
	width: number
	height: number
}

const Gallery = ({
	data,
	index: initIndex = 0,
	closeBtn = null,
}: {
	data: GaleryItem[]
	index?: number
	closeBtn?: JSX.Element | null
}) => {
	const [index, setIndex] = useState(initIndex)

	const nextSlide = () => {
		setIndex((oldIndex) => {
			let index = oldIndex + 1
			if (index > data.length - 1) {
				index = 0
			}
			return index
		})
	}

	const prevSlide = () => {
		setIndex((oldIndex) => {
			let index = oldIndex - 1
			if (index < 0) {
				index = data.length - 1
			}
			return index
		})
	}

	useEffect(() => {
		function onKeyup(e: { key: string }) {
			if (e.key === 'ArrowRight') {
				nextSlide()
			}
			if (e.key === 'ArrowLeft') {
				prevSlide()
			}
		}
		window.addEventListener('keyup', onKeyup)
		return () => window.removeEventListener('keyup', onKeyup)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="flex max-h-screen flex-col items-center gap-2 rounded p-4">
			<div className="flex overflow-hidden p-1">
				<Image
					src={getAssetURL(data[index].id)}
					alt={data[index].title}
					width={data[index].width}
					height={data[index].height}
					className="overflow-hidden object-contain"
				/>
			</div>
			<div className="flex gap-1">
				<TooltipProvider>
					<Popover>
						<PopoverTrigger asChild>
							<div>
								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="ghost" size="icon">
											<InfoIcon strokeWidth={1.5} />
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>Informacija apie nuotrauką</p>
									</TooltipContent>
								</Tooltip>
							</div>
						</PopoverTrigger>
						<PopoverContent side="top">
							<div className="space-y-1">
								{data[index].title && (
									<h2 className="text-xl">{data[index].title}</h2>
								)}
								{data[index].description && (
									<p className="text-sm">
										{data[index].description || data[index].title}
									</p>
								)}
							</div>
						</PopoverContent>
					</Popover>
				</TooltipProvider>

				<TooltipProvider>
					{data.length > 1 && (
						<>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										onClick={() => prevSlide()}
										className="ml-4"
									>
										<ChevronLeft strokeWidth={1.5} />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Buvusi nuotrauka</p>
								</TooltipContent>
							</Tooltip>

							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										onClick={() => nextSlide()}
										className="mr-4"
									>
										<ChevronRight strokeWidth={1.5} />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Kita nuotrauka</p>
								</TooltipContent>
							</Tooltip>
						</>
					)}

					<Tooltip>
						<TooltipTrigger asChild>{closeBtn}</TooltipTrigger>
						<TooltipContent>
							<p>Uždaryti</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</div>
	)
}

export { Gallery }
