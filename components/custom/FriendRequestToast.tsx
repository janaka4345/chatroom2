import { RequestAcceptButton } from '@/app/dashboard/_components/RequestButton';
import UserAvatar from './UserAvatar';

export const FriendRequestSentToast = ({
    image,
    name,
    message,
    senderId,
}: {
    image: string;
    name: string;
    message: string;
    senderId: string;
}) => {
    return (
        <div className="flex flex-col">
            <h1>{name} has Sent you a friend request</h1>
            <div className="flex flex-row">
                <UserAvatar image={image} name={name} />
                <h1>{name}</h1>
            </div>
            <p>{message}</p>
            <div>
                <RequestAcceptButton senderId={senderId} />
            </div>
        </div>
    );
};

export const FriendRequestAcceptedToast = ({
    image,
    name,
    message,
}: {
    image: string;
    name: string;
    message: string;
}) => {
    return (
        <div className="flex flex-col">
            <h1>{name} has accepted your friend request</h1>
            <div className="flex flex-row">
                <UserAvatar image={image} name={name} />
                <h1>{name}</h1>
            </div>
        </div>
    );
};
