import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { sendFriendRequest } from '@/serverActions/requests/requests'
import { User } from '@prisma/client'
export default function UserCard({ user, requestedUsers }: { user: Partial<User>, requestedUsers: boolean }) {
    return (
        <Card className="bg-transparent w-fit">
            <CardContent className="flex items-center justify-center p-0 ">
                <Avatar>
                    <AvatarImage src={user.image as string} alt="avatar" />
                    <AvatarFallback>
                        {(user.name as string).slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>{user.name}</div>
                    {requestedUsers ? <Button disabled>Request Sent</Button> : <form
                        action={async () => {
                            'use server'
                            await sendFriendRequest({ receiverId: user.id as string, groupId: null, message: 'ght' })
                        }}
                    >

                        <Button type='submit'>Send Request</Button>

                    </form>}
                </div>
            </CardContent>
        </Card>
    )
}
