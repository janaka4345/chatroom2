'use server'

import { auth } from '@/auth'
import prisma from '@/utils/prismaClient'
type FriendRequest = {
    receiverId: string
    groupId: string | null
    message: string | null
}

export const sendFriendRequest = async ({
    receiverId,
    groupId,
    message,
}: FriendRequest) => {
    const session = await auth()
    // if (!session) {
    //     return null
    // } TODO error handle
    try {
        await prisma.request.create({
            data: {
                groupId: groupId,
                receiverId: receiverId,
                message: message,
                senderId: session?.user?.id as string, // TODO typescript fix
            },
        })
        return { success: 'request ent' }
    } catch (error) {
        return { error: 'something went wrong' }
    }
}

export const getRequestSentUsers = async () => {
    const session = await auth()

    const requestSentUsers = await prisma.request.findMany({
        where: {
            senderId: session?.user?.id as string,
        },
    })
    return requestSentUsers
}
export const getRequestSentUserList = async () => {
    const session = await auth()

    const requestSentUsers = await prisma.request.findMany({
        where: {
            senderId: session?.user?.id as string,
        },
        select: {
            receiverId: true,
        },
    })
    return requestSentUsers
}
