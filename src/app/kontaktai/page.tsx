import { fetchMetadata } from '@/lib/get-seo-data'

export async function generateMetadata() {
	const seo = fetchMetadata({ slug: 'kontaktai' })
	return seo
}

export default function Kontaktai() {
	return (
		<div className="min-h-full w-full px-4 md:py-12 md:pr-12">
			<div className="flex h-full w-full flex-col gap-8 lg:flex-row lg:items-center">
				<div className="space-y-4 lg:w-1/3">
					<div>
						<h1 className="text-3xl">Fotogelmės</h1>
						<h2 className="text-xl">
							asmeninės ir komercinės fotografijos studija
						</h2>
					</div>

					<div>
						<p>Bažnyčios g. 2 Lentvaris,</p>
						<p>LT-25116</p>
					</div>

					<div>
						<h2>Darbo laikas</h2>
						<p>
							<span className="font-semibold">II-V</span>: 10:30 - 18:30
						</p>
						<p>
							<span className="font-semibold">VI-I</span>: Pagal išankstinį
							susitarimą
						</p>
					</div>

					<div>
						<p>+370 614 73799</p>
						<p>dovile.berlinskaite@gmail.com</p>
					</div>
				</div>
				<div className="h-full lg:w-2/3">
					<div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-md bg-muted">
						{/* <Image
							src={map}
							alt="Žemėlapis"
							className="h-full min-h-[400px] w-full rounded-md object-cover"
						/> */}
						<iframe
							src="https://snazzymaps.com/embed/343214"
							width="100%"
							height="600px"
							className="absolute z-20 h-full w-full"
							title="location on Google Maps"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}
