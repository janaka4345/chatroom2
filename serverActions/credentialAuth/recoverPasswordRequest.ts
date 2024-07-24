'use server';
import PasswordResetEmail from '@/emails/PasswordResetEmail';
import { recoverPasswordSchema } from '@/lib/schema';
import { generateToken } from '@/utils/generateToken';
import { transporter } from '@/utils/nodemailer';
import prisma from '@/utils/prismaClient';
import { render } from '@react-email/components';
import { createElement } from 'react';
import { z } from 'zod';

export async function recoverPasswordRequest(
    values: z.infer<typeof recoverPasswordSchema>
) {
    const validatedFields = recoverPasswordSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid Email Address' };
    }
    const { email } = validatedFields.data;

    const existingUser = await prisma.user.findFirst({
        where: {
            email: email,
        },
        select: {
            emailVerified: true,
            password: true,
        },
    });

    if (!existingUser) {
        return { success: 'Check your provided Email for a verification Code' };
    }

    if (existingUser.emailVerified && existingUser.password) {
        const { token, expires } = generateToken();
        try {
            await prisma.passwordToken.upsert({
                where: {
                    email,
                },
                update: {
                    token,
                    expires,
                },
                create: {
                    email,
                    token,
                    expires,
                },
            });

            const emailHtml = render(
                createElement(PasswordResetEmail, {
                    verificationCode: token,
                })
            );
            await transporter.sendMail({
                from: 'J_ Keyy<ashnazg1212@gmail.com>',
                to: email,
                subject: 'Recover Your password  with Chatter', // Subject line
                text: 'use the verification token below to reset your password with Chatter', // plain text body
                html: emailHtml, // html body
            });
        } catch (error) {
            console.log(error);
            return { error: 'Something went wrong' };
        }
        console.log({ token, expires });
    }
    return { success: 'Check your provided Email for a verification Code' };
}
