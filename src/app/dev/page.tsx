import { Loader } from '@/components/common/loader'

export default function DevPage() {
	return (
		<div className="relative flex h-full w-full px-4 md:py-12 md:pr-12">
			<div className="flex h-full w-full items-center justify-center py-12">
				<Loader />
			</div>
		</div>
	)
}
