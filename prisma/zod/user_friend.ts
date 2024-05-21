import * as z from 'zod';
import { friendStatus } from '@prisma/client';
import { CompleteUser, RelatedUserModel } from './index';

export const user_friendModel = z.object({
    id: z.string(),
    userId: z.string(),
    friendId: z.string(),
    status: z.nativeEnum(friendStatus),
});

export interface Completeuser_friend extends z.infer<typeof user_friendModel> {
    user: CompleteUser;
    friend: CompleteUser;
}

/**
 * Relateduser_friendModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relateduser_friendModel: z.ZodSchema<Completeuser_friend> = z.lazy(
    () =>
        user_friendModel.extend({
            user: RelatedUserModel,
            friend: RelatedUserModel,
        })
);
