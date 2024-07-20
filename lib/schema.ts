import { z } from 'zod';

export const registerFormSchema = z.object({
    name: z.string().min(2, { message: 'first name required' }).max(50),
    email: z
        .string()
        .email({ message: 'provide a valid email address' })
        .min(2, { message: 'email required' })
        .max(50),
    password: z
        .string()
        .min(2, { message: 'last name required' })
        .min(2, { message: 'last name required' })
        .max(50),
    confirmPassword: z.string().min(2).max(50),
    terms: z.boolean().default(false),
});

export const loginFormSchema = z.object({
    email: z
        .string()
        .email({ message: 'provide a valid email address' })
        .min(2, { message: 'email required' })
        .max(50),
    password: z
        .string()
        .min(2, { message: 'last name required' })
        .min(2, { message: 'last name required' })
        .max(50),
});
