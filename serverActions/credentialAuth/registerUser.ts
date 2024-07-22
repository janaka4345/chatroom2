'use server';

import { registerFormSchema } from '@/lib/schema';
import { hash } from 'bcryptjs';
import { z } from 'zod';
import sendEmail from '../sendEmails/sendMail';
import { getUserByEmail } from '../users/getUsers';
import RegisterVerificationEmail from '@/emails/RegisterVerificationEmail';
import { render } from '@react-email/components';
import { createElement } from 'react';
import { generateToken } from '@/utils/generateToken';

export async function registerUser(values: z.infer<typeof registerFormSchema>) {
    const validatedData = registerFormSchema.safeParse(values);
    if (!validatedData.success) {
        return { error: 'Invalid Fields' };
    }
    const { name, email, password } = validatedData.data;

    try {
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return { error: 'User by that email address already exists' };
        }
        const encryptedPassword = await hash(password, 8);
        const verificationCode = generateToken();
        const response = await prisma?.user.create({
            data: {
                name,
                email,
                password: encryptedPassword,
            },
        });

        await prisma?.verificationToken.create({
            data: {
                email,
                token: verificationCode.token,
                expires: verificationCode.expires,
            },
        });
        //TODO verify email
        if (response) {
            const emailHtml = render(
                createElement(RegisterVerificationEmail, {
                    verificationCode: verificationCode.token,
                })
            );
            await sendEmail({
                to: response.email,
                subject: 'Verify Your Email Address with chatter',
                text: 'Please verify Your Email Address by providing the following code ',
                html: emailHtml,
            });
        }
    } catch (error) {
        console.log(error);
        return { error: 'something went wrong. try again later' };
    }
    return { success: 'User created successfully.Please verify your Email' };
}
