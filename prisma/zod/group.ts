import * as z from "zod"
import { Completeuser_group, Relateduser_groupModel, CompleteMessage, RelatedMessageModel, CompleteRequest, RelatedRequestModel } from "./index"

export const GroupModel = z.object({
  id: z.string(),
  group_name: z.string(),
})

export interface CompleteGroup extends z.infer<typeof GroupModel> {
  user_group: Completeuser_group[]
  Message: CompleteMessage[]
  Request: CompleteRequest[]
}

/**
 * RelatedGroupModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedGroupModel: z.ZodSchema<CompleteGroup> = z.lazy(() => GroupModel.extend({
  user_group: Relateduser_groupModel.array(),
  Message: RelatedMessageModel.array(),
  Request: RelatedRequestModel.array(),
}))
