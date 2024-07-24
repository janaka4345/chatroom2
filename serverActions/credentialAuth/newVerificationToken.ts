'use server';

import RegisterVerificationEmail from '@/emails/RegisterVerificationEmail';
import { verificationTokenSchema } from '@/lib/schema';
import { generateToken } from '@/utils/generateToken';
import prisma from '@/utils/prismaClient';
import { render } from '@react-email/components';
import { createElement } from 'react';
import sendEmail from '../sendEmails/sendMail';

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
    const emailHtml = render(
        createElement(RegisterVerificationEmail, {
            verificationCode: token,
        })
    );

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

        await sendEmail({
            to: email as string,
            subject: 'Verify Your Email Address with chatter',
            text: 'Please verify Your Email Address by providing the following code ',
            html: emailHtml,
        });
        return {
            success:
                'new verification token created successfully.Check your email',
        };
    } catch (error) {
        console.log(error);
        return { error: 'something went wrong' };
    }
}
