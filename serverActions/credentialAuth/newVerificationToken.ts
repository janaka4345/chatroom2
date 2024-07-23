'use server';

import { verificationTokenSchema } from '@/lib/schema';
import { generateToken } from '@/utils/generateToken';
import prisma from '@/utils/prismaClient';

type Values = {
    email: string;
};
export async function newVerificationToken(values: Values) {
    console.log(values);

    const validatedFields = verificationTokenSchema.partial().safeParse(values);
    console.log(validatedFields);

    if (!validatedFields.success) {
        return { error: 'Invalid Fields' };
    }
    const { email } = validatedFields.data;

    const existingToken = await prisma.verificationToken.findFirst({
        where: {
            email: email,
        },
    });
    if (!existingToken) {
        return {
            error: 'No such Email address has been registered',
        };
    }

    const { token, expires } = generateToken();

    // console.log({ token, expires });
    // console.log(existingToken?.token);

    try {
        await prisma.verificationToken.updateMany({
            where: {
                email,
            },
            data: {
                token,
                expires,
            },
        });
        return { success: 'new verification token created successfully' };
    } catch (error) {
        console.log(error);
        return { error: 'something went wrong' };
    }
}
