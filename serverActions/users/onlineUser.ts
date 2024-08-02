'use server';
import { auth } from '@/auth';
import prisma from '@/utils/prismaClient';

export const setOnlineUserStatus = async ({
    status,
    socketId,
}: {
    status: boolean;
    socketId: string | undefined | null;
}) => {
    const session = await auth();
    // //console.log(session)

    // if (session) {
    await prisma.user.update({
        where: {
            id: session?.user?.id!,
        },
        data: {
            status: status,
            socketId: socketId,
        },
    });
    // }
};

export const getOnlineUserStatusById = async (id: string) => {
    const session = await auth();

    const res = await prisma.user.findFirst({
        where: {
            id: session?.user?.id!,
        },
        select: {
            status: true,
        },
    });
    return res;
};
