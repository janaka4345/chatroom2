'use server';

import { auth } from '@/auth';
import prisma from '@/utils/prismaClient';
type FriendRequest = {
    receiverId: string;
    groupId: string | null;
    message: string | null;
};

export const sendFriendRequest = async ({
    receiverId,
    groupId,
    message,
}: FriendRequest) => {
    const session = await auth();
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
        });
        return { success: 'request ent' };
    } catch (error) {
        return { error: 'something went wrong' };
    }
};

export const getRequestSentUsers = async () => {
    const session = await auth();

    const requestSentUsers = await prisma.request.findMany({
        where: {
            senderId: session?.user?.id as string,
        },
    });
    return requestSentUsers;
};
// export const getRequestSentAndPendingUsers = async () => {
//     const session = await auth()

//     const requestSentUsers = await prisma.request.findMany({
//         where: {
//             senderId: session?.user?.id as string,
//             status: { not: 'ACCEPTED' },
//         },
//     })
//     return requestSentUsers
// }

export const getRequested = async () => {
    const session = await auth();

    const requested = await prisma.request.findMany({
        where: {
            receiverId: session?.user?.id as string,
        },
    });
    return requested;
};

export const acceptRequest = async (senderId: string) => {
    const session = await auth();

    await prisma.request.updateMany({
        where: {
            AND: [
                { receiverId: session?.user?.id as string },
                { senderId: senderId },
            ],
        },
        data: {
            status: 'ACCEPTED',
        },
    });
    return { success: 'success accepted' }; //TODO
};

export const rejectRequest = async ({
    senderId,
    receiverId,
}: {
    senderId: string;
    receiverId: string;
}) => {
    await prisma.request.deleteMany({
        where: {
            senderId: senderId,
            receiverId: receiverId,
        },
    });
};
