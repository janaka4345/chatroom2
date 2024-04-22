import { auth } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
export default async function User({ className }: { className?: String }) {
    const session = await auth()

    if (!session?.user) {
        return null
    }
    return (
        <Avatar className={cn(className)}>
            <AvatarImage src={session?.user?.image!} alt="avatar" />
            <AvatarFallback>
                {(session.user?.name as string).slice(0, 2).toUpperCase()}
            </AvatarFallback>
        </Avatar>
    )
}
