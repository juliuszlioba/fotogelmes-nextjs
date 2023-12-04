import { SlideShow } from '@/components/common/slideshow'
import { Button } from '@/components/ui/button'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

import type { PaslaugosProp, GaleryProp } from '@/types/data.types'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface VienosPaslaugosProp extends PaslaugosProp {
	description: string
	gallery_item: [{ item: GaleryProp }]
}

async function getData(slug: string): Promise<VienosPaslaugosProp | undefined> {
	try {
		const data = await directus.request(
			readItems('services', {
				alias: {
					gallery_item: 'service_gallery_files',
					item: 'directus_files_id',
				},
				sort: ['sort'],
				fields: [
					'id',
					'title',
					'slug',
					'description',
					'thumbnail.id',
					'thumbnail.title',
					'thumbnail.width',
					'thumbnail.description',
					'thumbnail.height',
					'gallery_item.item.id',
					'gallery_item.item.title',
					'gallery_item.item.description',
					'gallery_item.item.width',
					'gallery_item.item.height',
				],
				filter: {
					slug: {
						_eq: slug,
					},
				},
			})
		)

		return data[0] as VienosPaslaugosProp
	} catch (error) {
		console.log('error')
	}
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string }
}) {
	const data = await getData(params.slug)

	if (!data) {
		return null
	}

	return {
		title: data.title,
		description: data.short_description,
	}
}

export default async function Paslauga({
	params,
}: {
	params: { slug: string }
}) {
	const data = await getData(params.slug)

	if (!data) {
		return notFound()
	}

	return (
		<div className="h-full min-h-full w-full px-4 py-4 pt-12 md:py-12 md:pr-12">
			<div className="flex h-full w-full flex-col gap-8 lg:flex-row lg:items-center">
				<div className="space-y-4 lg:w-1/3">
					<div>
						<h1 className="text-3xl">{data.title}</h1>
					</div>

					<div
						className="space-y-4"
						dangerouslySetInnerHTML={{ __html: data.description }}
					></div>
					<div>
						<Link href="/kontaktai">
							<Button>Susisiekti</Button>
						</Link>
					</div>
				</div>
				<div className="h-full lg:w-2/3">
					<div className="relative flex h-full min-h-[600px] w-full overflow-hidden rounded-md bg-muted md:min-h-[600px]">
						{data.gallery_item.length >= 1 ? (
							<SlideShow data={data.gallery_item.map((item) => item.item)} />
						) : (
							<SlideShow data={[{ ...data.thumbnail }]} />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
