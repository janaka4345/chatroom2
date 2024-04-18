import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { DefaultButton, RequestAcceptButton, RequestButton, RequestSentButton } from './RequestButton'

type Requested = "REQUESTED" | "SENT_REQUEST" | "NONE"

import { type User } from '@prisma/client'
export default function UserCard({ user, request }: { user: Partial<User>, request: Requested }) {

    function CTAButton(request: Requested) {
        switch (request) {
            case "REQUESTED":
                return <RequestAcceptButton />;
            case "SENT_REQUEST":
                return <RequestSentButton />;
            case "NONE":
                return <RequestButton receiverId={user.id as string} groupId={null} message='ht' />;
            default:
                return <DefaultButton />;
        }
    }

    return (
        <Card className="bg-transparent w-fit relative">
            <Badge variant='notificationOnline' />
            <CardContent className="flex items-center justify-center p-0 ">
                <Avatar>
                    <AvatarImage src={user.image as string} alt="avatar" />
                    <AvatarFallback>
                        {(user.name as string).slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>{user.name}</div>
                    {CTAButton(request)}
                </div>
            </CardContent>
        </Card>
    )
}


