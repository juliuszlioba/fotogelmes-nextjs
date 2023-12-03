import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { fetchMetadata } from '@/lib/get-seo-data'

import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'
import { getAssetURL } from '@/lib/get-asset-url'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import type { PaslaugosProp } from '@/types/data.types'

async function getData(): Promise<PaslaugosProp[] | undefined> {
	try {
		const data = await directus.request(
			readItems('services', {
				alias: {
					gallery_item: 'service_gallery_files',
				},
				sort: ['sort'],
				fields: [
					'id',
					'title',
					'slug',
					'short_description',
					'thumbnail.id',
					'thumbnail.title',
					'thumbnail.width',
					'thumbnail.height',
				],
				filter: {
					status: {
						_eq: 'published',
					},
				},
			})
		)
		return data as PaslaugosProp[]
	} catch (error) {
		console.log('error')
	}
}

export async function generateMetadata() {
	const seo = fetchMetadata({ slug: 'paslaugos' })
	return seo
}

export default async function Paslaugos() {
	const data = await getData()

	if (!data) {
		return notFound()
	}

	return (
		<div className="w-full">
			<div className="h-full w-full snap-y snap-proximity overflow-y-auto px-4 md:pr-12">
				<div className="grid gap-16 md:gap-x-8 lg:grid-cols-2 2xl:grid-cols-3">
					{data.map((item) => {
						return (
							<div key={item.id} className="shrink-0 md:py-12 xl:h-screen">
								<div className="flex h-full w-full snap-center items-center">
									<div className="flex h-full flex-col gap-8">
										<div className="h-[400px] rounded-md bg-muted lg:h-3/4">
											<div className="flex h-full w-full overflow-hidden rounded-md">
												<Link
													href={`/paslaugos/${item.slug}`}
													className="inset-0 flex"
												>
													<Image
														src={getAssetURL(item.thumbnail.id)}
														alt={item.thumbnail.title}
														width={item.thumbnail.width}
														height={item.thumbnail.height}
														className="object-cover duration-300 hover:scale-102"
													/>
												</Link>
											</div>
										</div>
										<div className="space-y-3 lg:h-1/4">
											<h2 className="text-3xl">{item.title}</h2>
											<p className="line-clamp-5">{item.short_description}</p>
											<div>
												<Link href={`/paslaugos/${item.slug}`}>
													<Button>Daugiau</Button>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
