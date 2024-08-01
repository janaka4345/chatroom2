'use server';

import { auth } from '@/auth';
import prisma from '@/utils/prismaClient';
export const getUserByIdForAdmin = async (id: string) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: id,
            },
        });
        return user;
    } catch (error) {
        //console.log(error);
        return null;
    }
};
export const getUserByEmailForAdmin = async (email: string) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });
        return user;
    } catch (error) {
        //console.log(error);
        return null;
    }
};
export const getUserByEmail = async (email: string) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
            select: {
                image: true,
                name: true,
                email: true,
            },
        });
        return user;
    } catch (error) {
        return { error };
    }
};
export const getUserById = async (id: string) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id,
            },
            select: {
                image: true,
                name: true,
                email: true,
                emailVerified: true,
            },
        });
        return user;
    } catch (error) {
        // return { error };
        //console.log(error);
    }
};
export const getUserByName = async (name: string) => {
    try {
        const user = await prisma.user.findMany({
            where: {
                name: name,
            },
            select: {
                image: true,
                name: true,
                email: true,
            },
        });
        return user;
    } catch (error) {
        return { error };
    }
};
export const getAllUsers = async () => {
    try {
        const session = await auth();
        const currentUser = session?.user;
        if (!currentUser?.email) {
            return { error: 'need to log in first' }; //TODO
        }
        const users = await prisma.user.findMany({
            where: {
                NOT: {
                    id: currentUser?.id,
                },
            },
            select: {
                id: true,
                image: true,
                name: true,
                email: true,
            },
        });
        return users;
    } catch (error) {
        return { error: 'error' };
    }
};
export const getAllUsersWithoutFriends = async () => {
    try {
        const session = await auth();
        const currentUser = session?.user;
        if (!currentUser?.email) {
            return { error: 'need to log in first' }; //TODO
        }
        const users = await prisma.user.findMany({
            include: {
                Friend: {
                    where: {
                        friendId: currentUser.id,
                    },
                },
            },
        });
        return users;
    } catch (error) {
        return { error: 'error' };
    }
};

export const getFriendWithSocketId = async (userId: string) => {
    const friend = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            socketId: true,
            status: true,
            name: true,
            image: true,
        },
    });
    return friend;
};
