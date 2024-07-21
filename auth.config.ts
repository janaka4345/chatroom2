import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

import Credentials from 'next-auth/providers/credentials';
import prisma from '@/utils/prismaClient';

import type { NextAuthConfig } from 'next-auth';
import { loginFormSchema } from './lib/schema';
import { compare } from 'bcryptjs';

export default {
    providers: [
        Credentials({
            authorize: async (credentials) => {
                // console.log({ credentials });
                const validatedFields = loginFormSchema.safeParse(credentials);
                if (!validatedFields.success) {
                    // throw Error('Invalid Fields');
                    return null;
                }
                const { email, password } = validatedFields.data;

                const user = await prisma.user.findFirst({
                    where: {
                        email,
                    },
                });
                console.log({ user });

                if (!user || !user.password) {
                    // throw new Error('User not found.');
                    return null;
                }
                const isPasswordMatching = await compare(
                    password,
                    user.password
                );

                if (isPasswordMatching) {
                    const userDetails = {
                        id: user.id,
                        name: user.name,
                        image: user.image,
                        email: user.email,
                        emailVerified: user.emailVerified,
                    };
                    return userDetails;
                }

                // throw Error('Invalid Credentials');
                return null;
            },
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
    ],
} satisfies NextAuthConfig;
