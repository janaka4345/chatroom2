import { getFriends } from '@/serverActions/users/getFriends'
import ConversationCard from './ConversationCard'

export default async function Conversations() {
    const friends = await getFriends() //TODO use ID instead

    return (
        <div className="overflow-y-auto w-full">
            <h1>Conversations</h1>
            <div className="flex flex-col gap-2 ">
                {friends ? friends.map((friend, i) => (
                    <ConversationCard key={i} friend={friend} />
                )) : null}
            </div>
        </div>
    )
}
