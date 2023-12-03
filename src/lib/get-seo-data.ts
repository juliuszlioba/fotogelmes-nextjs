import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

async function getSEO() {
	return directus.request(readItems('seo'))
}

export async function fetchMetadata({ slug }: { slug: string }) {
	const seo = await getSEO()

	const meta = seo.find((item) => {
		return item.page_slug === slug
	})

	if (!meta) {
		return null
	}

	return {
		title: meta.title,
		description: meta.description,
	}
}
