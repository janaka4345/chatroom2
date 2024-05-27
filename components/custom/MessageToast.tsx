import UserAvatar from './UserAvatar';

const MessageToast = ({
    image,
    name,
    message,
}: {
    image: string;
    name: string;
    message: string;
}) => {
    return (
        <>
            {' '}
            <UserAvatar
                image={image}
                name={name}
            />
            <div className="flex flex-col">
                <h1>{name}</h1>
                <h1>{message}</h1>
            </div>
        </>
    );
};
export default MessageToast;
