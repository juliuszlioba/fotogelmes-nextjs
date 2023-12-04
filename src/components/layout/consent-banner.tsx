'use client'

import { Cookie } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Checkbox } from '@/components/ui/checkbox'

function ConsentBanner() {
	const [open, setOpen] = useState(false)
	const [openSettings, setOpenSettings] = useState(false)

	const acceptConsent = () => {
		Cookies.set('consent', 'granted', { expires: 31 })
		setOpen(false)
	}

	useEffect(() => {
		const consent = Cookies.get('consent')
		if (!consent) {
			setOpen(true)
		}
	}, [])

	return (
		<>
			<div className="mx-4 mt-8 flex items-center gap-4 whitespace-nowrap border-t pb-8 pt-2 text-sm text-gray-600">
				<Link
					href={`/autorines-teises`}
					className="underline-offset-2 hover:text-foreground hover:underline md:hidden"
				>
					&copy; fotogelmes.lt
				</Link>
				<Link
					href={`/privatumo-politika`}
					className="ml-auto underline-offset-2 hover:text-foreground hover:underline"
				>
					Privatumo politika
				</Link>
				<Button variant={'ghost'} size={'icon'} onClick={() => setOpen(true)}>
					<Cookie strokeWidth={1.5} />
				</Button>
			</div>

			{open && (
				<div className="pointer-events-none fixed inset-0 z-50 mt-auto flex items-end justify-end p-4 duration-500 animate-in fade-in slide-in-from-bottom md:p-8">
					<div className="pointer-events-auto relative max-h-full max-w-3xl space-y-2 overflow-y-auto rounded-md border-2 border-muted bg-background p-6 shadow-2xl">
						<h2 className="flex items-center gap-2 text-2xl">
							<Cookie strokeWidth={1.5} />
							Slapukai ir privatumas
						</h2>
						<p>
							Mes naudojame slapukus, leidžiančius kaupti ir prieiti prie
							asmeninių duomenų (pvz. naršymo informacija), kad galėtume
							personalizuoti turinį ir analizuoti svetainės srautus.
							Susipažinkite su puslapio
							<Link
								href="/privatumo-politika"
								className="pl-1 underline underline-offset-2 hover:text-primary"
							>
								slapukų politika
							</Link>
							. Taip pat galite individualiai leisti/drausti slapukus įvairiais
							tikslais{' '}
							<button
								className="pl-1 underline underline-offset-2 hover:text-primary"
								onClick={() => setOpenSettings(true)}
							>
								slapuku nustatymuose
							</button>
							.
						</p>
						{openSettings && (
							<div className="border-b-2 border-t-2 border-dashed pb-4 pt-2">
								<h3 className="text-xl">Nustatymai</h3>
								<div className="flex flex-col gap-3 pt-2">
									<div className="items-top flex space-x-2">
										<Checkbox id="terms1" disabled checked />
										<div className="grid gap-1 leading-none">
											<label
												htmlFor="terms1"
												className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
											>
												Būtini slapukai
											</label>
											<p className="text-sm text-muted-foreground">
												nustatymai / duomenys, reikalingi naršant interneto
												svetainės puslapius
											</p>
										</div>
									</div>

									<div className="items-top flex space-x-2">
										<Checkbox id="terms2" checked />
										<div className="grid gap-1 leading-none">
											<label
												htmlFor="terms2"
												className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
											>
												Veikimo slapukai
											</label>
											<p className="text-sm text-muted-foreground">
												puslapio analitinei informacijai rinkti
											</p>
										</div>
									</div>

									<div className="items-top flex space-x-2">
										<Checkbox id="terms3" />
										<div className="grid gap-1 leading-none">
											<label
												htmlFor="terms3"
												className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
											>
												Reklamos slapukai
											</label>
											<p className="text-sm text-muted-foreground">
												suasmenintu skelbimu rodymui
											</p>
										</div>
									</div>
									<Button
										className="sm:mr-auto"
										onClick={() => setOpenSettings(true)}
									>
										Išsaugoti nustatymus
									</Button>
								</div>
							</div>
						)}
						<div className="flex w-full flex-col flex-wrap justify-end gap-4 pt-2 sm:flex-row">
							{!openSettings && (
								<Button
									className="sm:mr-auto"
									onClick={() => setOpenSettings(true)}
								>
									Nustatymai
								</Button>
							)}
							<Button onClick={() => acceptConsent()}>
								Priimti visus slapukus
							</Button>
							<Button onClick={() => acceptConsent()}>
								Atmesti visus slapukus
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
export { ConsentBanner }
