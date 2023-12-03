import { revalidatePath } from 'next/cache'

export async function GET() {
	revalidatePath('/galerija', 'page')
	return Response.json('gallery updated')
}
