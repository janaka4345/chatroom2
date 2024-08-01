'use server';

import { auth, signOut } from '@/auth';
import {
    nameChangeFormSchema,
    settingsPasswordChangeFormSchema,
} from '@/lib/schema';
import { boolean, z } from 'zod';
import { getUserByIdForAdmin } from './getUsers';
import { compare, hash } from 'bcryptjs';

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
    return { success: 'Username changed succefully' };
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
