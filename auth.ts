import NextAuth from 'next-auth'

import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from './utils/prismaClient'
import authConfig from './auth.config'
// import { setUserStatus } from './serverActions/users/setUser'

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: 'jwt' },
    // events: {
    //     async signIn(message) {
    //         // if (message.user.id) {
    //         //     await setUserStatus(message.user.id, true)
    //         // }

    //         // console.log('signin', message)
    //     },
    //     async signOut(message) {
    //         // console.log(message.token.sub)
    //         //TODO fix type errors
    //         // if (message.token.sub) {
    //         //     await setUserStatus(message.token.sub, false)
    //         // }
    //     },
    // },
    callbacks: {
        //     signIn(params) {
        //         //TODO email verification check
        //         return true
        //     },

        session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }
            return session
        },
    },
    ...authConfig,
})
