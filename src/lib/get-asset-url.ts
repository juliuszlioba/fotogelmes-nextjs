export function getAssetURL(id: string): string {
	if (!id) return ''
	return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${id}`
}
