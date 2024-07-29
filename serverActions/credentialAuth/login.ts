'use server';
import { signIn } from '@/auth';
import { loginFormSchema } from '@/lib/schema';
import { AuthError } from 'next-auth';
import { z } from 'zod';

export async function login(values: z.infer<typeof loginFormSchema>) {
    const validatedFields = loginFormSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: 'Invalid Fileds' };
    }
    const { email, password } = validatedFields.data;
    try {
        await signIn('credentials', {
            email,
            password,
            // TODO
            redirectTo: '/dashboard/conversations',
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { error: 'Invalid credentials!' };
                case 'CallbackRouteError':
                    return { error: 'Invalid credentials provided!' };
                default:
                    return { error: 'Something went wrong' };
            }
        }

        throw error;
    }
}
