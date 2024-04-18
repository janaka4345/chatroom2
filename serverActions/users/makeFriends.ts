'use server'
import { auth } from '@/auth'
import prisma from '@/utils/prismaClient'
export const makeFriends = async ({ friendId }: { friendId: string }) => {
    const session = await auth()
    await prisma.user_friend.create({
        data: {
            userId: session?.user?.id as string,
            friendId: friendId,
        },
    })
}
