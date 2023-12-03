'use client'

import { Equal, Play } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button'

/*
Based on: https://css-tricks.com/building-progress-ring-quickly/
*/

const ProgressRing = ({
	size = 24,
	progress: progressInput = 0,
	strokeWidth = 3,
	timer = 7000, // ???
	callBackFunction = () => {
		return
	},
}) => {
	const [progress, setProgress] = React.useState(progressInput)
	const radius = size / 2 - strokeWidth
	const circumference = radius * 2 * Math.PI
	const [offset, setOfsset] = React.useState(circumference)
	const [running, setRunning] = useState(true)

	const handlePause = () => {
		if (running) {
			setProgress(0)
		}
		setRunning(!running)
	}

	useEffect(() => {
		const offset = circumference - (progressInput / 100) * circumference
		setOfsset(offset)
	}, [progressInput, circumference])

	useEffect(() => {
		if (running) {
			const timerBar = setTimeout(() => {
				if (progress === 100) {
					const offset = circumference - (progress / 100) * circumference
					setOfsset(offset)
					setProgress(0)
					return callBackFunction()
				} else {
					const offset = circumference - (progress / 100) * circumference
					setOfsset(offset)
					setProgress(progress + 1)
				}
			}, timer / 100)
			return () => clearTimeout(timerBar)
		}
	}, [running, progress, timer, circumference, callBackFunction])

	return (
		<div className="relative leading-none">
			<Button
				variant="ghost"
				size="icon"
				onClick={handlePause}
				className="text-transparent"
			>
				<div className="absolute z-10">
					{running ? (
						<Equal
							strokeWidth={2}
							className="rotate-90"
							style={{ width: `${size * 0.75}px`, height: `${size * 0.75}px` }}
						/>
					) : (
						<Play
							strokeWidth={2}
							style={{ width: `${size * 0.75}px`, height: `${size * 0.75}px` }}
						/>
					)}
				</div>
				<div className="absolute z-0 text-background">
					<svg
						className="progress-ring pointer-events-none relative "
						width={`${size}`}
						height={`${size}`}
					>
						<circle
							style={{
								strokeDasharray: `${circumference} ${circumference}`,
								strokeDashoffset: `${offset}`,
								transition: '0.35s',
							}}
							stroke="currentColor"
							strokeWidth={strokeWidth}
							fill="transparent"
							r={`${radius}`}
							cx={`${size / 2}`}
							cy={`${size / 2}`}
						/>
					</svg>
				</div>
			</Button>
		</div>
	)
}

export default ProgressRing
