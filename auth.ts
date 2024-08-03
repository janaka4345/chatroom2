import NextAuth from 'next-auth';

import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from './utils/prismaClient';
import authConfig from './auth.config';
import { getUserById } from './serverActions/users/getUsers';
// import { setUserStatus } from './serverActions/users/setUser'

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: 'jwt' },
    // events: {
    //     async signIn(message) {
    //         // if (message.user.id) {
    //         //     await setUserStatus(message.user.id, true)
    //         // }

    //         // //console.log('signin', message)
    //     },
    //     async signOut(message) {
    //         // //console.log(message.token.sub)
    //         //TODO fix type errors
    //         // if (message.token.sub) {
    //         //     await setUserStatus(message.token.sub, false)
    //         // }
    //     },
    // },
    pages: {
        signIn: '/auth/login/',
        // error: '/auth/error/',
    },
    callbacks: {
        // async signIn({ user, account }) {
        //     if (account?.provider !== 'credentials') {
        //         return true;
        //     }
        //     const existingUser = await getUserById(user.id!);
        //     if (existingUser?.emailVerified) {
        //         return true;
        //     }
        //     return false;
        //     // throw Error('verify your email');
        //     // return { error: 'verify your email' };
        // },
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth;
        },

        session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            return session;
        },
        async jwt({ token }) {
            if (!token.sub) {
                return token;
            }

            const user = await getUserById(token?.sub);
            if (!user) {
                return token;
            }
            token.name = user.name;
            token.picture = user.image;

            return token;
        },
    },
    events: {
        async linkAccount({ user }) {
            await prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    emailVerified: new Date(),
                },
            });
        },
    },
    ...authConfig,
});
