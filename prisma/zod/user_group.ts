import * as z from "zod"
import { groupRole } from "@prisma/client"
import { CompleteUser, RelatedUserModel, CompleteGroup, RelatedGroupModel } from "./index"

export const user_groupModel = z.object({
  id: z.string(),
  userId: z.string(),
  groupId: z.string(),
  role: z.nativeEnum(groupRole),
  joined: z.date(),
})

export interface Completeuser_group extends z.infer<typeof user_groupModel> {
  user: CompleteUser
  group: CompleteGroup
}

/**
 * Relateduser_groupModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relateduser_groupModel: z.ZodSchema<Completeuser_group> = z.lazy(() => user_groupModel.extend({
  user: RelatedUserModel,
  group: RelatedGroupModel,
}))
