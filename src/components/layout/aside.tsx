import { ModeToggle } from '@/components/layout/theme-button'
import { LogoImg, LogoText } from '@/assets/svg-images'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { NavSheet } from './nav-sheet'

export const NAV_LINKS = [
	{ title: 'Paslaugos', href: '/paslaugos' },
	{ title: 'Galerija', href: '/galerija' },
	{ title: 'Kontaktai', href: '/kontaktai' },
]

export function Aside() {
	return (
		<div className="z-10 flex h-20 w-full shrink-0 md:h-screen md:w-60">
			<div className="fixed inset-0 flex h-20 flex-col justify-between gap-8 bg-background px-4 pt-5 md:h-screen md:w-60 md:py-12 md:pl-12 md:pr-0">
				<div className="flex justify-between">
					<div className="w-28 max-md:hidden md:w-32">
						<Link href="/">
							{/* <LogoFull /> */}
							<LogoImg />
						</Link>
					</div>
					<div className="relative md:hidden">
						<div className="absolute -top-2 left-0 w-14">
							<LogoImg />
						</div>
						<div className="relative left-16 top-2 w-56">
							<Link href="/">
								<LogoText />
							</Link>
						</div>
					</div>
					<NavSheet />
				</div>

				<nav className="my-auto flex flex-col gap-2 max-md:hidden">
					{NAV_LINKS.map((link, index) => {
						return (
							<div key={index}>
								<Button variant="ghost" className="text-lg" asChild>
									<Link href={link.href}>{link.title}</Link>
								</Button>
							</div>
						)
					})}
				</nav>

				<div className="inline-flex gap-1 max-md:hidden">
					<ModeToggle />
				</div>
				<div className="flex flex-col border-t pt-2 text-sm text-gray-600 max-md:hidden">
					<Link
						href={`/privatumo-politika`}
						className="underline-offset-2 hover:text-foreground hover:underline"
					>
						Privatumo politika
					</Link>
					<Link
						href={`/autorines-teises`}
						className="whitespace-nowrap underline-offset-2 hover:text-foreground hover:underline"
					>
						&copy; fotogelmes.lt
					</Link>
				</div>
			</div>
		</div>
	)
}
