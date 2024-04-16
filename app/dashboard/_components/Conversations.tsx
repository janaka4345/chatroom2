import { getFriends } from '@/serverActions/users/getFriends'
import ConversationCard from './ConversationCard'

export default async function Conversations() {
    const friends = await getFriends() //TODO use ID instead
    // console.log(currentUser?.id)

    return (
        <div className="overflow-y-auto">
            <h1>Conversations</h1>
            <div className="flex flex-col gap-2 ">
                {[...Array(5)].map((_, i) => (
                    <ConversationCard key={i} />
                ))}
            </div>
            <pre>{JSON.stringify(friends, null, 2)}</pre>
        </div>
    )
}
