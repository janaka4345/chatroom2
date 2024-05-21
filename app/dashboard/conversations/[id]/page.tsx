import { auth } from '@/auth';
import { getPrivateMessages } from '@/serverActions/message/getMessages';
import { isMyFriend } from '@/serverActions/users/getFriends';
import MessageBox from '../_components/MessageBox';
import MessageInput from '../_components/MessageInput';
import { setReadMessages } from '@/serverActions/message/sendMessages';

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
    return (
        <>
            <section className="relative h-[70svh] overflow-y-auto ">
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
            </section>
            <MessageInput receiverId={params.id} />
        </>
    );
}
