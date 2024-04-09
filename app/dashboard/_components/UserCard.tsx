import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
export default function UserCard({ friend }: { friend: boolean }) {
    return (
        <Card className="bg-transparent w-fit">
            <CardContent className="flex items-center justify-center p-0 ">
                <Avatar>
                    <AvatarImage
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                        alt="avatar"
                    />
                    <AvatarFallback>BG</AvatarFallback>
                </Avatar>
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>Bonnie Green</div>
                    <div className="text-sm text-gray-800 dark:text-gray-400 line-clamp-2 bg-blue-500 ">
                        {friend ? 'Message' : 'Invite'}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
