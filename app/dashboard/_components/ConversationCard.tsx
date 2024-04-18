import { NotificationBadge } from '@/components/custom/NotificationBadge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type friend = {
    friend: {
        id: string
        status: boolean
        name: string | null
        email: string
        image: string | null
    }
    friendId: string
    status: string
}
export default function ConversationCard({ friend }: { friend: friend }) {
    return (
        <Card className="bg-transparent relative ">
            <NotificationBadge className='bg-green-500' />
            <CardContent className="flex items-center justify-center p-0 ">
                <Avatar>
                    <AvatarImage
                        src={friend.friend.image as string} //TODO type eror
                        alt="avatar"
                    />
                    <AvatarFallback>
                        {(friend.friend.name as string)
                            .slice(0, 2)
                            .toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>{friend.friend.name as string}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Beatae consectetur fuga nobis? Voluptas molestiae
                        modi enim numquam, id expedita ipsum? Excepturi minima
                        adipisci dolores quas incidunt tempora quod quo cum?
                        Natus architecto tempora vel. Architecto debitis
                        excepturi eos molestias aut, nihil eveniet cum iure
                        quam, error nisi, doloremque optio dicta ut similique
                        eaque reiciendis hic animi cumque recusandae obcaecati
                        vero. Earum cum commodi omnis animi, quisquam pariatur
                        optio labore soluta, sequi nam accusantium alias
                        veritatis sed corporis id. Est assumenda maiores sint
                        temporibus nemo sed iusto quo veniam excepturi enim!
                        Minus culpa a et, in iure quaerat voluptatibus. Quaerat
                        hic magni quia minima id eum quis est! Dicta vel maiores
                        architecto eligendi neque, expedita quisquam nihil
                        aspernatur ratione commodi accusantium. Odit dolore
                        quasi, quae vel aliquam modi facilis id quam! Quisquam,
                        amet possimus dolorem voluptatum suscipit earum laborum
                        cum a numquam libero quos reiciendis natus repellendus
                        nesciunt asperiores quam vero!
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
