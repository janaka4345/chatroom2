'use server';
import { auth } from '@/auth';
import prisma from '@/utils/prismaClient';
export const getPrivateMessages = async ({
    receiverId,
}: {
    receiverId: string;
}) => {
    const session = await auth();

    const privateMessages = await prisma.user_message.findMany({
        where: {
            OR: [
                {
                    AND: [
                        { senderId: session?.user?.id! },
                        { receiverId: receiverId },
                    ],
                },
                {
                    AND: [
                        { senderId: receiverId },
                        { receiverId: session?.user?.id! },
                    ],
                },
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
    });
    return privateMessages;
};

export const getLastMessage = async ({
    receiverId,
}: {
    receiverId: string;
}) => {
    const session = await auth();
    const lastMessage = await prisma.user_message.findFirst({
        orderBy: {
            message: {
                sent: 'desc',
            },
        },
        where: {
            OR: [
                {
                    AND: [
                        { senderId: session?.user?.id! },
                        { receiverId: receiverId },
                    ],
                },
                {
                    AND: [
                        { senderId: receiverId },
                        { receiverId: session?.user?.id! },
                    ],
                },
            ],
        },
        include: {
            message: {
                select: {
                    message: true,
                    sent: true,
                },
            },
        },
    });
    return lastMessage;
};
