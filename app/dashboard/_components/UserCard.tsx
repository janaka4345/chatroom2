import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { User } from '@prisma/client'
export default function UserCard({ user }: { user: Partial<User> }) {
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
                    <div className="text-sm text-gray-800 dark:text-gray-400 line-clamp-2 bg-blue-500 ">
                        Invite
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
