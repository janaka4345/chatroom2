'use server';

import { verificationTokenSchema } from '@/lib/schema';
import { z } from 'zod';
import prisma from '@/utils/prismaClient';

export async function verifyEmail(
    values: z.infer<typeof verificationTokenSchema>
) {
    console.log(values);
    const validatedFields = verificationTokenSchema.safeParse(values);
    console.log(validatedFields);

    if (!validatedFields.success) {
        return { error: 'Invalid Fileds' };
    }
    const { email, verificationToken } = validatedFields.data;
    try {
        const existingToken = await prisma.verificationToken.findFirst({
            where: {
                email,
            },
        });
        console.log({ existingToken });

        if (!existingToken) {
            return { error: 'No registered under this email address' };
        }
        if (existingToken.expires < new Date()) {
            return {
                error: 'Verification code entered has expired.',
            };
        }
        if (existingToken.token != verificationToken) {
            return {
                error: 'Verification code is incorrect.',
            };
        }
    } catch (error) {
        console.log(error);
        return { error: 'Something went wring' };
    }

    try {
        await prisma.user.updateMany({
            where: {
                email: email,
            },
            data: {
                emailVerified: new Date(),
            },
        });
        await prisma.verificationToken.deleteMany({
            where: {
                email: email,
            },
        });
        return { success: 'Your Email is verified.' };
    } catch (error) {
        console.log(error);
        return {
            error: "couldn't verify the email address. Try again later",
        };
    }
}
