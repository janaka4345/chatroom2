'use server'

import { auth } from '@/auth'
import prisma from '@/utils/prismaClient'

export const getUserByEmail = async (email: string) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
            select: {
                image: true,
                name: true,
                email: true,
            },
        })
        return user
    } catch (error) {
        return error
    }
}
export const getUserByName = async (name: string) => {
    try {
        const user = await prisma.user.findMany({
            where: {
                name: name,
            },
            select: {
                image: true,
                name: true,
                email: true,
            },
        })
        return user
    } catch (error) {
        return error
    }
}
export const getAllUsers = async () => {
    try {
        const session = await auth()
        const currentUser = session?.user
        if (!currentUser?.email) {
            return { error: 'need to log in first' } //TODO
        }
        const users = await prisma.user.findMany({
            where: {
                NOT: {
                    email: currentUser?.email,
                },
            },
            select: {
                image: true,
                name: true,
                email: true,
            },
        })
        return users
    } catch (error) {
        return error
    }
}
