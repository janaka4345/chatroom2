'use server'
import { auth } from '@/auth'
import prisma from '@/utils/prismaClient'

export const setOnlineUserStatus = async ({
    status,
    socketId,
}: {
    status: boolean
    socketId: string | undefined | null
}) => {
    const session = await auth()
    // console.log(session)

    // if (session) {
    await prisma.user.update({
        where: {
            id: session?.user?.id!,
        },
        data: {
            status: status,
            socketId: socketId,
        },
    })
    // }
}
