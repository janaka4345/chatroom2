'use client';
import { Button } from '@/components/ui/button';
import {
    acceptRequest,
    rejectRequest,
    sendFriendRequest,
} from '@/serverActions/requests/requests';
import { getFriendWithSocketId } from '@/serverActions/users/getUsers';
import { makeFriends } from '@/serverActions/users/makeFriends';
import { socket } from '@/socket';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const RequestSentButton = () => {
    return <Button disabled>Request Sent</Button>;
};
export const RequestButton = ({
    receiverId,
    groupId,
    message,
}: {
    receiverId: string;
    groupId: string | null;
    message: string | null;
}) => {
    const { data } = useSession();

    const handleClick = async () => {
        await sendFriendRequest({
            receiverId: receiverId,
            groupId: groupId,
            message: message,
        });
        const friend = await getFriendWithSocketId(receiverId);
        socket.emit('revalidateUserForRequest', {
            socketId: friend?.socketId,
            message: message,
            image: data?.user?.image,
            name: data?.user?.name,
            senderId: data?.user?.id,
        }); //TODO do i need friends image and name or just senders name and image
    };
    return <Button onClick={handleClick}>Send Request</Button>;
};
export const RequestAcceptButton = ({ senderId }: { senderId: string }) => {
    const { data } = useSession();
    const router = useRouter();
    const handleAcceptClick = async () => {
        await acceptRequest(senderId);
        await makeFriends({ friendId: senderId });
        const friend = await getFriendWithSocketId(senderId);
        socket.emit('revalidateUserForRequestAccept', {
            socketId: friend?.socketId,
            image: data?.user?.image,
            name: data?.user?.name,
        }); //TODO do i need friends image and name or just senders name and image
    };
    const handleRejectClick = async () => {
        //console.log('rejected');
        await rejectRequest({
            senderId: senderId,
            receiverId: data?.user?.id as string,
        });
        // await sendFriendRequest({ receiverId: user.id as string, groupId: null, message: 'ght' })
        router.refresh();
    };
    return (
        <div className="flex flex-row gap-2">
            <Button onClick={handleAcceptClick}>Accept</Button>
            <Button onClick={handleRejectClick}>Reject</Button>
        </div>
    );
};
export const DefaultButton = () => {
    return <Button disabled>Default</Button>;
};
