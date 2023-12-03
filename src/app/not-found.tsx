'use client'

import { Button } from '@/components/ui/button'
import { FileWarning } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function NotFound() {
	const router = useRouter()

	const handleRefresh = () => {
		router.back()
	}

	return (
		<div className="min-h-full w-full px-4 md:py-12 md:pr-12">
			<div className="flex h-full w-full flex-col gap-8 lg:flex-row lg:items-center">
				<div className="flex flex-col items-center justify-center space-y-4 py-4 lg:w-1/5">
					<FileWarning size={36} strokeWidth={1.5} />
					<h2 className="text-2xl">404 | Nerasta</h2>
					<div>
						<Button variant="default" onClick={handleRefresh}>
							Grįžti
						</Button>
					</div>
				</div>
				<div className="h-full lg:w-4/5">
					<div className="relative flex h-full min-h-[300px] w-full overflow-hidden rounded-md bg-muted md:min-h-[300px]">
						<Image
							src={`/images/not-found.jpg`}
							alt="Nerasta"
							width={1400}
							height={933}
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
