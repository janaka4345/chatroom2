import { auth } from '@/auth'
import prisma from '@/utils/prismaClient'
export const getFriends = async () => {
    const session = await auth()
    const friends = await prisma.user_friend.findMany({
        where: { userId: session?.user?.id },
        select: {
            friend: true,
            status: true,
            friendId: true,
        },
    })
    return friends
}

export const getAFriendById = async (friendId: string) => {
    const session = await auth()
    const friend = await prisma.user_friend.findMany({
        where: { userId: session?.user?.id, friendId: friendId },
        select: {
            friend: true,
            status: true,
            friendId: true,
        },
    })
    return friend
}
