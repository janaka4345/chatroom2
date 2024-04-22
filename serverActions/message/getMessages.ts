'use server'
import prisma from '@/utils/prismaClient'
export const getPrivateMessages = async ({
    senderId,
    receiverId,
}: {
    senderId: string
    receiverId: string
}) => {
    const privateMessages = await prisma.user_message.findMany({
        where: {
            OR: [
                { AND: [{ senderId: senderId }, { receiverId: receiverId }] },
                { AND: [{ senderId: receiverId }, { receiverId: senderId }] },
            ],
        },
        include: {
            message: {
                select: {
                    message: true,
                    sent: true,
                },
            },
            sender: {
                select: {
                    image: true,
                    name: true,
                },
            },
        },
    })
    return privateMessages
}
