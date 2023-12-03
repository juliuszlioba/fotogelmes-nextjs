import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

import { NAV_LINKS } from './aside'
import { ModeToggle } from './theme-button'

export function NavSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu className="h-[1.2rem] w-[1.2rem]" />
				</Button>
			</SheetTrigger>
			<SheetContent side={'top'}>
				<div className="space-y-2">
					{NAV_LINKS.map((link, index) => {
						return (
							<div key={index} className="flex justify-center">
								<Button variant="ghost" className="text-lg">
									<SheetClose asChild>
										<Link href={link.href}>{link.title}</Link>
									</SheetClose>
								</Button>
							</div>
						)
					})}
					<div className="flex justify-center">
						<ModeToggle />
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
