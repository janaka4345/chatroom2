'use server';
import PasswordResetEmail from '@/emails/PasswordResetEmail';
import { passwordTokenSchema, recoverPasswordSchema } from '@/lib/schema';
import { generateToken } from '@/utils/generateToken';
import { transporter } from '@/utils/nodemailer';
import prisma from '@/utils/prismaClient';
import { render } from '@react-email/components';
import { createElement } from 'react';
import { z } from 'zod';

export async function newPasswordToken(
    values: z.infer<typeof recoverPasswordSchema>
) {
    const validatedFields = passwordTokenSchema.partial().safeParse(values);
    console.log(validatedFields);

    if (!validatedFields.success) {
        return { error: 'Invalid Fields' };
    }
    const { email } = validatedFields.data;

    const existingToken = await prisma.passwordToken.findFirst({
        where: {
            email: email,
        },
    });
    if (!existingToken) {
        return {
            error: 'No such Email address has been requested to change the password',
        };
    }

    const { token, expires } = generateToken();

    // console.log({ token, expires });
    // console.log(existingToken?.token);
    const emailHtml = render(
        createElement(PasswordResetEmail, { verificationCode: token })
    );
    try {
        await prisma.passwordToken.updateMany({
            where: {
                email,
            },
            data: {
                token,
                expires,
            },
        });

        await transporter.sendMail({
            from: 'J_ Keyy<ashnazg1212@gmail.com>',
            to: email,
            subject: 'Recover Your password  with Chatter', // Subject line
            text: 'use the verification token below to reset your password with Chatter', // plain text body
            html: emailHtml, // html body
        });

        return { success: 'new password token has been sent successfully' };
    } catch (error) {
        console.log(error);
        return { error: 'something went wrong' };
    }
}
