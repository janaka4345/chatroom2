'use server'
import prisma from '@/utils/prismaClient'
const getMessages = async ({ userId }: { userId: string }) => {
    const messages = await prisma.user_message.findMany({
        where: {
            receiverId: userId,
        },
    })
}
export default getMessages
