import type { Metadata } from 'next'
import { Karla } from 'next/font/google'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Aside } from '@/components/layout/aside'
import { ConsentBanner } from '@/components/layout/consent-banner'

export const metadata: Metadata = {
	title: 'Fotogelmes.lt',
	description: 'Fotogelmes internetinis puslapis',
}

const karla = Karla({ subsets: ['latin'], variable: '--font-sans' })

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="lt" suppressHydrationWarning>
			<body
				className={cn('min-h-screen font-sans antialiased', karla.variable)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex min-h-full flex-col gap-x-8 gap-y-4 md:flex-row lg:h-screen">
						<Aside />
						<div className="min-h-full w-full flex-col">
							{children}
							<ConsentBanner />
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
