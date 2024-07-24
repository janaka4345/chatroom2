import { z } from 'zod';

export const registerFormSchema = z
    .object({
        name: z.string().min(2, { message: 'first name required' }).max(50),
        email: z
            .string()
            .email({ message: 'provide a valid email address' })
            .min(2, { message: 'email required' })
            .max(50),
        password: z
            .string()
            .min(2, { message: 'password required' })
            .min(8, { message: '8 characters required' })
            .max(50),
        confirmPassword: z
            .string()
            .min(2, { message: 'confirm password required' })
            .max(50),
        terms: z
            .boolean()
            .default(false)
            .refine((val) => val === true, {
                message: 'must agree to terms and conditions',
            }),
    })
    .refine(
        (data) => {
            if (data.password === data.confirmPassword) {
                return true;
            }
            return false;
        },
        {
            message: 'password and confirm password must match',
            path: ['confirmPassword'],
        }
    );

export const loginFormSchema = z.object({
    email: z
        .string()
        .email({ message: 'provide a valid email address' })
        .min(2, { message: 'email required' })
        .max(50),
    password: z.string().min(2, { message: 'password required' }).max(50),
});

export const recoverPasswordSchema = loginFormSchema.pick({ email: true });

export const verificationTokenSchema = z.object({
    email: z.string().email(),
    verificationToken: z.string().length(6, {
        message: 'Your one-time password must be 6 characters.',
    }),
});

export const passwordTokenSchema = z.object({
    email: z.string().email(),
    passwordToken: z.string().length(6, {
        message: 'Your one-time password must be 6 characters.',
    }),
});

export const passwordResetSchema = z
    .object({
        email: z.string().email(),
        passwordToken: z.string().length(6, {
            message: 'Your one-time password is in invalid format',
        }),
        newPassword: z
            .string()
            .min(8, { message: 'Password must be at least 8 characters long' }),
        confirmPassword: z.string().trim(),
    })
    .refine(
        (data) => {
            if (data.newPassword === data.confirmPassword) {
                return true;
            }
            return false;
        },
        {
            message: 'password and confirm password must match',
            path: ['confirmPassword'],
        }
    );
