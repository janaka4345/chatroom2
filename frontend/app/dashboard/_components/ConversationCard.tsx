import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
export default function ConversationCard() {
    return (
        <Card className="bg-transparent ">
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
