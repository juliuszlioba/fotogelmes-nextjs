import MasonryGallery from '@/components/gallery/masonry-gallery'
import { fetchMetadata } from '@/lib/get-seo-data'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

export async function generateMetadata() {
	const seo = fetchMetadata({ slug: 'galerija' })
	return seo
}

async function getData(): Promise<any> {
	try {
		const data = await directus.request(
			readItems('gallery_files', {
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
		})
	} catch (error) {
		console.log('error')
	}
}

export default async function Galerija() {
	const data = await getData()
	return (
		<div className="relative flex w-full flex-col items-center justify-between px-4 md:py-12 md:pr-12">
			<MasonryGallery data={data} />
		</div>
	)
}
