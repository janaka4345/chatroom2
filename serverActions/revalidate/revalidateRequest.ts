'use server';

import { revalidatePath } from 'next/cache';

export const revalidateRequest = async () => {
    revalidatePath('/dashboard');
};
