import getUserSession from './getUserSession'
import prisma from '@/utils/prismaClient'
export const getFriends = async () => {
    const { id } = await getUserSession()
    const friends = await prisma.user_friend.findMany({
        where: { userId: id },
        select: {
            friend: true,
            status: true,
            friendId: true,
        },
    })
}

export const getAFriendById = async (friendId: string) => {
    const { id } = await getUserSession()
    const friends = await prisma.user_friend.findMany({
        where: { userId: id, friendId: friendId },
        select: {
            friend: true,
            status: true,
            friendId: true,
        },
    })
}
