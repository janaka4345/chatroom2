'use server'
import prisma from '@/utils/prismaClient'
export const setUserStatus = async (id: string, status: boolean) => {
    await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            status: status,
        },
    })
}
