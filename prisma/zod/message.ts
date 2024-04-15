import * as z from "zod"
import { CompleteGroup, RelatedGroupModel, Completeuser_message, Relateduser_messageModel } from "./index"

export const MessageModel = z.object({
  id: z.string(),
  message: z.string(),
  sent: z.date(),
  groupId: z.string().nullish(),
  receiverId: z.string().nullish(),
})

export interface CompleteMessage extends z.infer<typeof MessageModel> {
  group?: CompleteGroup | null
  user_message: Completeuser_message[]
}

/**
 * RelatedMessageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMessageModel: z.ZodSchema<CompleteMessage> = z.lazy(() => MessageModel.extend({
  group: RelatedGroupModel.nullish(),
  user_message: Relateduser_messageModel.array(),
}))
