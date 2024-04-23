'use server'
import { auth } from '@/auth'
import prisma from '@/utils/prismaClient'

export const setOnlineUserStatus = async ({
    status,
    socketId,
}: {
    status: boolean
    socketId: string | undefined
}) => {
    const session = await auth()
    console.log('setting user stataus from server actions')
    await prisma.user.update({
        where: {
            id: session?.user?.id,
        },
        data: {
            status: status,
            socketId: socketId,
        },
    })
}
