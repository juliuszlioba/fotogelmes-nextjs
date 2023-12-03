export interface GaleryProp {
	id: string
	title: string
	description: string
	width: number
	height: number
}

export interface PaslaugosProp {
	id: string
	title: string
	slug: string
	short_description: string
	thumbnail: {
		id: string
		title: string
		description: string
		width: number
		height: number
	}
}
