'use server';
import { passwordResetSchema } from '@/lib/schema';
import prisma from '@/utils/prismaClient';
import { hash } from 'bcryptjs';
import { z } from 'zod';

export async function recoverPasswordVerify(
    values: z.infer<typeof passwordResetSchema>
) {
    const validatedFields = passwordResetSchema.safeParse(values);
    console.log(validatedFields);
    if (!validatedFields.success) {
        return { error: 'Invalid Fields' };
    }
    const { email, passwordToken, newPassword } = validatedFields.data;
    try {
        const existingToken = await prisma.passwordToken.findFirst({
            where: {
                email,
            },
        });
        console.log(existingToken);
        if (!existingToken) {
            return {
                error: 'Something went wrong.Request another',
            };
        }
        if (existingToken.expires < new Date()) {
            return {
                error: 'Code entered has expired.Request another',
            };
        }
        if (existingToken.token != passwordToken) {
            return {
                error: 'Verification code is incorrect.try again',
            };
        }
        if (existingToken.token === passwordToken) {
            const encryptedPassword = await hash(newPassword, 8);
            const res = await prisma.user.updateMany({
                where: {
                    email,
                },
                data: {
                    password: encryptedPassword,
                },
            });
            if (res.count === 1) {
                await prisma.passwordToken.delete({
                    where: {
                        email,
                    },
                });
            }
            return {
                success: 'Password was updated successfully',
            };
        }
    } catch (error) {
        console.log(error);
        return { error: 'Something went wrong' };
    }
}
