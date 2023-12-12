import { LogoText } from '@/assets/svg-images'
import { SlideShow } from '@/components/common/slideshow'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'
import { notFound } from 'next/navigation'

import type { GaleryProp } from '@/types/data.types'

async function getGlobals() {
	return directus.request(readItems('general'))
}

export async function generateMetadata() {
	const general = (await getGlobals()) as any

	return {
		title: general.title,
		description: general.description,
	}
}

async function getData(): Promise<GaleryProp[] | undefined> {
	try {
		const data = await directus.request(
			readItems('general_gallery_files', {
				alias: {
					item: 'directus_files_id',
				},
				fields: [
					'item.id',
					'item.title',
					'item.description',
					'item.width',
					'item.height',
				],
				sort: ['sort'],
			})
		)
		return data.map((item) => {
			return item.item
		}) as GaleryProp[]
	} catch (error) {
		console.log('error')
	}
}

export default async function Home() {
	const data = await getData()

	if (!data) {
		return notFound()
	}

	return (
		<div className="h-full w-full px-4 md:py-12 md:pr-12">
			<div className="flex h-full w-full flex-col justify-between gap-8">
				<h1 className="flex gap-2 text-2xl md:flex-col xl:flex-row">
					<div className="w-64 max-md:hidden">
						<LogoText />
					</div>
					<span className="max-md:-mt-6 max-md:pl-20">
						Asmeninės ir komercinės fotografijos studija
					</span>
				</h1>
				<div className="flex h-full w-full flex-col gap-8 xl:flex-row">
					<div className="relative flex h-full min-h-[600px] w-full overflow-hidden bg-muted md:min-h-[600px]">
						<SlideShow data={data.slice(0, data.length / 2)} />
					</div>
					<div className="relative flex h-full min-h-[600px] w-full overflow-hidden bg-muted md:min-h-[600px]">
						<SlideShow data={data.slice(data.length / 2, data.length)} />
					</div>
				</div>
			</div>
		</div>
	)
}
