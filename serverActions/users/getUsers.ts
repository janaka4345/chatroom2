'use server'

import { auth } from '@/auth'
import prisma from '@/utils/prismaClient'

export const getUserByEmailForAdmin = async (email: string) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        })
        return user
    } catch (error) {
        return { error }
    }
}
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
        return { error }
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
        return { error }
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
                    id: currentUser?.id,
                },
            },
            select: {
                id: true,
                image: true,
                name: true,
                email: true,
            },
        })
        return users
    } catch (error) {
        return { error: 'error' }
    }
}
export const getAllUsersWithoutFriends = async () => {
    try {
        const session = await auth()
        const currentUser = session?.user
        if (!currentUser?.email) {
            return { error: 'need to log in first' } //TODO
        }
        const users = await prisma.user.findMany({
            include: {
                Friend: {
                    where: {
                        friendId: currentUser.id,
                    },
                },
            },
        })
        return users
    } catch (error) {
        return { error: 'error' }
    }
}
