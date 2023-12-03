'use client'

import Image from 'next/image'
import Masonry from 'react-masonry-css'

import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogClose,
} from '@/components/ui/dialog'
import { Gallery } from '@/components/common/gallery'
import { useState } from 'react'
import { Button } from '../ui/button'
import { X } from 'lucide-react'
import { getAssetURL } from '@/lib/get-asset-url'

interface GaleryItem {
	id: string
	title: string
	description: string | null
	width: number
	height: number
}

export default function MasonryGallery({ data }: { data: GaleryItem[] }) {
	const [index, setIndex] = useState(0)

	return (
		<Dialog>
			<Masonry
				breakpointCols={{ default: 3, 1280: 2, 640: 1 }}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{data.map((item, index) => {
					return (
						<div key={index}>
							<DialogTrigger asChild onClick={() => setIndex(index)}>
								<Image
									src={getAssetURL(item.id)}
									alt={item.title}
									width={item.width}
									height={item.height}
									className="w-full duration-300 hover:scale-102"
								/>
							</DialogTrigger>
						</div>
					)
				})}
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
			</Masonry>
		</Dialog>
	)
}
