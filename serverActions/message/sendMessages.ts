'use server'

import { auth } from '@/auth'
import prisma from '@/utils/prismaClient'
export const sendPrivateMessages = async ({
    receiverId,
    message,
}: {
    receiverId: string
    message: string
}) => {
    const session = await auth()
    try {
        await prisma.message.create({
            data: {
                message: message,
                user_message: {
                    create: [
                        {
                            receiverId: receiverId,
                            senderId: session?.user?.id!,
                        },
                    ],
                },
            },
        })
        return { success: 'success' }
    } catch (error) {
        return { error: 'error' }
    }
}
