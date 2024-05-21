import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

import Credentials from 'next-auth/providers/credentials';
import prisma from '@/utils/prismaClient';

import type { NextAuthConfig } from 'next-auth';

export default {
    providers: [
        Credentials({
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                // console.log({ credentials })

                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email as string,
                    },
                });
                if (!user || !user.password) {
                    throw new Error('User not found.');
                }
                if (user.password != credentials.password) {
                    throw new Error('invalid credentials');
                }

                return user;
            },
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
} satisfies NextAuthConfig;
