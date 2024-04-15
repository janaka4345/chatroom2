import * as z from "zod"
import { CompleteAccount, RelatedAccountModel, CompleteSession, RelatedSessionModel, Completeuser_friend, Relateduser_friendModel, Completeuser_group, Relateduser_groupModel, CompleteRequest, RelatedRequestModel, Completeuser_message, Relateduser_messageModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
  password: z.string().nullish(),
  status: z.boolean(),
  email: z.string(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  isTwoFactorEnabled: z.boolean(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  accounts: CompleteAccount[]
  sessions: CompleteSession[]
  Friend: Completeuser_friend[]
  User: Completeuser_friend[]
  user_group: Completeuser_group[]
  Request: CompleteRequest[]
  user_message: Completeuser_message[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  accounts: RelatedAccountModel.array(),
  sessions: RelatedSessionModel.array(),
  Friend: Relateduser_friendModel.array(),
  User: Relateduser_friendModel.array(),
  user_group: Relateduser_groupModel.array(),
  Request: RelatedRequestModel.array(),
  user_message: Relateduser_messageModel.array(),
}))
