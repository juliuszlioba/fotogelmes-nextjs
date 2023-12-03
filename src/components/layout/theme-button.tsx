'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

export function ModeToggle({ tooltip = true }: { tooltip?: boolean }) {
	const { setTheme } = useTheme()

	return (
		<div className="inline-flex gap-1">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="bg-muted dark:bg-transparent dark:hover:bg-muted"
							onClick={() => setTheme('light')}
						>
							<Sun className="h-[1.2rem] w-[1.2rem]" />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Šviesi tema</p>
					</TooltipContent>
				</Tooltip>

				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="bg-transparent dark:bg-muted"
							onClick={() => setTheme('dark')}
						>
							<Moon className="h-[1.2rem] w-[1.2rem]" />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Tamsi tema</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}
