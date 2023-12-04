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
		<div className="relative flex h-full w-full flex-col items-center justify-between px-4 md:py-12 md:pr-12">
			<div className="flex h-full w-full flex-col gap-8 lg:flex-row lg:items-center">
				<div className="space-y-4 text-center lg:w-1/5">
					<FileWarning size={36} strokeWidth={1.5} className="mx-auto" />

					<h2 className="text-2xl">404 | Nerasta</h2>
					<div>
						<Button variant="default" onClick={handleRefresh}>
							Grįžti
						</Button>
					</div>
				</div>
				<div className="h-full lg:w-4/5">
					<div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-md bg-muted">
						<Image
							src={`/images/not-found.jpg`}
							alt="Nerasta"
							width={1400}
							height={933}
							className="h-full min-h-[400px] w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
