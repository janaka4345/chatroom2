import * as z from 'zod';
import {
    CompleteUser,
    RelatedUserModel,
    CompleteMessage,
    RelatedMessageModel,
} from './index';

export const user_messageModel = z.object({
    id: z.string(),
    seen: z.boolean(),
    receiverId: z.string(),
    messageId: z.string(),
});

export interface Completeuser_message
    extends z.infer<typeof user_messageModel> {
    receiver: CompleteUser;
    message: CompleteMessage;
}

/**
 * Relateduser_messageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relateduser_messageModel: z.ZodSchema<Completeuser_message> =
    z.lazy(() =>
        user_messageModel.extend({
            receiver: RelatedUserModel,
            message: RelatedMessageModel,
        })
    );
