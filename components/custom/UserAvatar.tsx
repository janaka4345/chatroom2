import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const UserAvatar = ({ image, name }: { image: string, name: string }) => {
    return (
        <Avatar >
            <AvatarImage src={image} alt="avatar" />
            <AvatarFallback>
                {name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
        </Avatar>
    )
}
export default UserAvatar