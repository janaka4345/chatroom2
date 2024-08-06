'use server';

import { auth, signOut } from '@/auth';
import {
    nameChangeFormSchema,
    settingsPasswordChangeFormSchema,
} from '@/lib/schema';
import { compare, hash } from 'bcryptjs';
import { z } from 'zod';
import { getUserByIdForAdmin } from './getUsers';

import { cloudConfig } from '@/cloudinary.config';
import { v2 as cloudinary } from 'cloudinary';
import prisma from '@/utils/prismaClient';

export async function updateUserName(
    values: z.infer<typeof nameChangeFormSchema>
) {
    const validatedFields = nameChangeFormSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: 'Invalid Details' };
    }

    const { username } = validatedFields.data;
    console.log(username);

    const session = await auth();
    if (!session) {
        return { error: 'No user Exists' };
    }
    await prisma?.user.update({
        where: {
            id: session?.user?.id,
        },
        data: {
            name: username,
        },
    });
    return { success: 'Username changed successfully' };
}

export async function updateUserOnlineStatus(value: boolean) {
    const validatedFields = z.boolean().safeParse(value);
    console.log(validatedFields);

    if (!validatedFields.success) {
        return { error: 'Invalid Details' };
    }

    const data = validatedFields.data;

    const session = await auth();
    if (!session) {
        return { error: 'No user Exists' };
    }
    await prisma?.user.update({
        where: {
            id: session?.user?.id,
        },
        data: {
            status: data,
        },
    });
    return { success: 'online status changed' };
}

export async function updatePassword(
    values: z.infer<typeof settingsPasswordChangeFormSchema>
) {
    const validatedFields = settingsPasswordChangeFormSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid Fields' };
    }

    const session = await auth();
    const user = await getUserByIdForAdmin(session?.user?.id as string);

    if (!session || !user) {
        return { error: 'no such user' };
    }

    const { password, newPassword } = validatedFields.data;
    const isPasswordMatched = await compare(password, user.password as string);

    if (isPasswordMatched) {
        const hashedPassword = await hash(newPassword, 8);
        await prisma?.user.update({
            where: {
                id: user.id,
            },
            data: {
                password: hashedPassword,
            },
        });
        await signOut();
        return { success: 'password updated successfully' };
    }
    return { error: 'Invalid details' };
}

export async function changeAvatar(data: FormData) {
    const file = data.get('file') as File;
    if (!file) {
        return { error: 'no file uploaded' };
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    // const buffer=new Uint8Array(Buffer.from(arrayBuffer))
    // console.log(buffer);

    try {
        const response = await new Promise((resolve, reject) => {
            cloudConfig;
            cloudinary.uploader
                .upload_stream({}, (error, result) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    // console.log({ result });

                    resolve(result);
                })
                .end(buffer);
        });

        const session = await auth();

        await prisma?.user.update({
            where: {
                id: session?.user?.id,
            },
            data: {
                //@ts-ignore
                image: response.secure_url,
            },
        });

        return { success: 'Profile picture was successfully changed' };
    } catch (error) {
        console.log(error);

        return { error: 'something went wrong' };
    }
}
