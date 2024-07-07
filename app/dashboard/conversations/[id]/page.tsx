import { auth } from '@/auth';
import { getPrivateMessages } from '@/serverActions/message/getMessages';
import { setReadMessages } from '@/serverActions/message/sendMessages';
import { getAFriendById, isMyFriend } from '@/serverActions/users/getFriends';
import AutoScroll from '../../_components/AutoScroll';
import MessageBox from '../_components/MessageBox';
import MessageInput from '../_components/MessageInput';
import AvatarIcon from '@/components/custom/AvatarIcon';

export default async function conversationsPage({
    params,
}: {
    params: { id: string };
}) {
    const session = await auth();

    const isFriend = await isMyFriend(params.id);
    if (!isFriend) {
        return <h1>this user is not a friend</h1>;
    }

    const messages = await getPrivateMessages({ receiverId: params.id });
    await setReadMessages({
        senderId: params.id,
        receiverId: session?.user?.id as string,
    });

    const friendDetails = await getAFriendById(params.id)

    return (
        <>
            <div className='pl-4 py-2  bg-white rounded-t-xl border mt-2 lg:mt-0  flex flex-row gap-2 w-full'>
                <AvatarIcon image={friendDetails?.friend.image as string} name={friendDetails?.friend.name as string} />
                <h1 className='my-auto'>{friendDetails?.friend.name}</h1>
            </div>
            <section className="relative w-full  h-[55svh] lg:h-[70svh] overflow-y-auto bg-white">


                {messages.map((message) =>
                    message.senderId === session?.user?.id ? (
                        <MessageBox
                            key={message.id}
                            message={message.message}
                            image={message?.sender?.image!}
                            name={message?.sender?.name!}
                            type="SEND"
                        />
                    ) : (
                        <MessageBox
                            key={message.id}
                            message={message.message}
                            image={message?.sender?.image!}
                            name={message?.sender?.name!}
                            type="RECEIVE"
                        />
                    )
                )}
                <AutoScroll />
            </section>
            <MessageInput receiverId={params.id} />
        </>
    );
}
