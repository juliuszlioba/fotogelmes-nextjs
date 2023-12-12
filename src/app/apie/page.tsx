import { SlideShow } from '@/components/common/slideshow'
import directus from '@/lib/directus'
import { readSingleton } from '@directus/sdk'
import { fetchMetadata } from '@/lib/get-seo-data'

import type { GaleryProp } from '@/types/data.types'
import { notFound } from 'next/navigation'

interface VienosPaslaugosProp {
	id: number
	text: string
	image: GaleryProp
}

async function getData(): Promise<VienosPaslaugosProp | undefined> {
	try {
		const data = await directus.request(
			readSingleton('about', {
				fields: [
					'id',
					'text',
					'image.id',
					'image.title',
					'image.width',
					'image.description',
					'image.height',
				],
			})
		)
		return data as VienosPaslaugosProp
	} catch (error) {
		console.log('error')
	}
}

export async function generateMetadata() {
	const seo = fetchMetadata({ slug: 'apie' })
	return seo
}

export default async function Apiepage() {
	const data = await getData()

	if (!data) {
		return notFound()
	}

	return (
		<div className="h-full min-h-full w-full px-4 py-4 pt-12 md:py-12 md:pr-12">
			<div className="flex h-full w-full flex-col gap-8 lg:flex-row lg:items-center">
				<div className="space-y-4 lg:w-1/2">
					<div>
						<h1 className="text-3xl">Apie</h1>
					</div>

					<div
						className="space-y-4"
						dangerouslySetInnerHTML={{ __html: data.text }}
					></div>
				</div>
				<div className="h-full lg:w-1/2">
					<div className="relative flex h-full min-h-[600px] w-full overflow-hidden bg-muted md:min-h-[600px]">
						<SlideShow data={[{ ...data.image }]} />
					</div>
				</div>
			</div>
		</div>
	)
}
