import { getFriends } from '@/serverActions/users/getFriends';
import ConversationCard from './ConversationCard';

export default async function Conversations() {
    const friends = await getFriends(); //TODO use ID instead

    return (
        <div className="w-full overflow-y-auto bg-blue-500">

            <div className="flex flex-col gap-2 ">
                <h1 className='ml-2 mt-2'>Conversations</h1>
                {friends
                    ? friends.map((friend, i) => (
                        <ConversationCard
                            key={i}
                            friend={friend}
                        />
                    ))
                    : null}
            </div>
        </div>
    );
}
