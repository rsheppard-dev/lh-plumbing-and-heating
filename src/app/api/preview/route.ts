import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(): Promise<never> {
	draftMode().enable();
	redirect(`/`);
}
