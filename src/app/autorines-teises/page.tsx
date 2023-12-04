import Link from 'next/link'

export default function AutorinesTeisesPage() {
	return (
		<div className="h-full min-h-full w-full px-4 py-4 pt-12 md:py-12 md:pr-12">
			<div className="inline-flex h-full w-full flex-col items-center gap-8 lg:flex-row">
				<div className="flex flex-col space-y-2 xl:w-2/3">
					<h1 className="text-3xl">
						Informacijos panaudojimas ir autorinės teisės
					</h1>
					{/* <h2 className="text-xl">
						asmeninės ir komercinės fotografijos studija
					</h2> */}
					<p>
						Toliau naudojamos sąvokos „informacija“ apibūdinimas: Informacija
						(medžiaga) – vaizdinė (foto arba video informacija), tekstinė
						(rašytinė informacija), garso įrašai.
					</p>
					<p>
						Didžioji dalis šito tinklalapio informacijos priklauso savininkei –{' '}
						<span className="font-medium">Dovilei Berlinskaitei</span>.
					</p>
					<p>
						Jeigu šitame tinklalapyje fotogelmes.lt suradote savo straipsnį arba
						kitokią informaciją ir nepageidaujate, kad Jums priklausanti
						medžiaga būtų viešinama šitame tinklalapyje – praneškite mums ir mes
						ją pašalinsime. Susisiekti su mumis galite elektroniniu paštu arba
						telefonu, kuris yra nurodytas
						<Link href="/kontaktai" className="pl-1 underline">
							kontaktų puslapyje
						</Link>
						.
					</p>
					<p>
						{' '}
						Kopijuoti ir platinti viešinamą turinį galite tik nurodant
						tinklalapio nuorodą – fotogelmes.lt
					</p>
					<p>
						Nuoroda turi būti veikianti (aktyvi). Jeigu tinklalapyje viešinamas
						straipsnis priklauso kitam informaciniam šaltiniui – reikia nurodyti
						ir originalų informacinį šaltinį.
					</p>
					<p>
						Vaizdinių medžiagų (nuotraukų) kopijavimas ir platinimas be
						oficialaus autoriaus leidimo yra draudžiamas.
					</p>
					<h2 className="pt-4 text-3xl">Dizainas ir programavimas</h2>
					<a
						href="https://juliuszlioba.com"
						rel="nofollow"
						target="_blank"
						className="flex flex-row items-center gap-1"
					>
						Julius Žlioba
					</a>
				</div>
				{/* <div className="flex flex-col space-y-2 lg:w-1/2"></div> */}
			</div>
		</div>
	)
}
