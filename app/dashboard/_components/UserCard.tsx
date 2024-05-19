import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { DefaultButton, RequestAcceptButton, RequestButton, RequestSentButton } from './RequestButton'

type Requested = "REQUESTED" | "SENT_REQUEST" | "NONE"

import UserAvatar from '@/components/custom/UserAvatar'
import { type User } from '@prisma/client'
export default async function UserCard({ user, request }: { user: Partial<User>, request: Requested }) {

    const CTAButton = (request: Requested) => {
        switch (request) {
            case "REQUESTED":
                return <RequestAcceptButton senderId={user?.id as string} />;
            case "SENT_REQUEST":
                return <RequestSentButton />;
            case "NONE":
                return <RequestButton receiverId={user?.id as string} groupId={null} message='ht' />;
            default:
                return <DefaultButton />;
        }
    }
    //TODO badge showing only for friends fix
    return (
        <Card className="bg-transparent w-fit relative">
            <Badge variant='notificationOnline' />
            <CardContent className="flex items-center justify-center p-0 ">

                <UserAvatar name={user?.name!} image={user?.image!} />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>{user?.name}</div>
                    {CTAButton(request)}
                </div>
            </CardContent>
        </Card>
    )
}


