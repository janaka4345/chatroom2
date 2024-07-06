import UserAvatar from "@/components/custom/UserAvatar";
import { getFriends } from "@/serverActions/users/getFriends";
import Link from "next/link";

async function ActiveFriends() {
    const friends = await getFriends();

    return (
        <div className='rounded-lg bg-white border mt-0 min-h-10 lg:mt-4 flex h-fit md:hidden flex-row gap-2  pt-2 pb-4  w-full overflow-x-auto overflow-hidden'>
            {friends?.map((friend, i) => (
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