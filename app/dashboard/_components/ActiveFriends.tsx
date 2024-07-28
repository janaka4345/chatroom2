import UserAvatar from "@/components/custom/UserAvatar";
import { cn } from "@/lib/utils";
import { getFriends } from "@/serverActions/users/getFriends";
import Link from "next/link";

async function ActiveFriends({ className }: { className?: string }) {
    const friends = await getFriends();
    if (!friends || friends.length < 1) {
        return null
    }
    return (
        <div className={cn('rounded-xl bg-white border  flex h-fit  flex-row gap-2 py-2 pl-4 w-full overflow-x-auto overflow-hidden', className)}>
            {friends?.map((friend, _) => (
                friend.friend.status ? <Link key={friend.friend.name} href={`/dashboard/conversations/${friend.friendId}`}>
                    <UserAvatar
                        name={friend.friend.name!}
                        image={friend.friend.image!}
                    /> </Link> : null
            ))
            }
        </div>

    )
}
export default ActiveFriends