import * as z from 'zod';
import { requestStatus } from '@prisma/client';
import {
    CompleteGroup,
    RelatedGroupModel,
    CompleteUser,
    RelatedUserModel,
} from './index';

export const RequestModel = z.object({
    id: z.string(),
    groupId: z.string().nullish(),
    receiverId: z.string(),
    message: z.string().nullish(),
    sent: z.date(),
    status: z.nativeEnum(requestStatus),
});

export interface CompleteRequest extends z.infer<typeof RequestModel> {
    group?: CompleteGroup | null;
    receiver: CompleteUser;
}

/**
 * RelatedRequestModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRequestModel: z.ZodSchema<CompleteRequest> = z.lazy(() =>
    RequestModel.extend({
        group: RelatedGroupModel.nullish(),
        receiver: RelatedUserModel,
    })
);
