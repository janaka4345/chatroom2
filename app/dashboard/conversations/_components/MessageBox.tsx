import UserAvatar from '@/components/custom/UserAvatar';
import { Message } from '@prisma/client';

const MessageBox = ({
    message,
    image,
    name,
    type,
}: {
    message: Partial<Message>;
    image: string;
    name: string;
    type: 'RECEIVE' | 'SEND';
}) => {
    if (type === 'RECEIVE') {
        return (
            <div className="flex items-start gap-2 m-4">
                <UserAvatar name={name} image={image} />
                <div className="flex flex-col gap-1">
                    <div className="bg-gray-100 p-3 rounded-tr-lg rounded-b-lg max-w-[300px] text-sm dark:bg-gray-800 dark:text-gray-50 ">
                        <p>{message.message}</p>
                    </div>
                    <div className="text-xs ml-auto text-gray-500 dark:text-gray-400">
                        {message.sent!.toLocaleDateString()}
                    </div>
                </div>
            </div>
        );
    }
    if (type === 'SEND') {
        return (
            <div className="flex items-start gap-2 m-4 justify-end">
                <div className="flex flex-col gap-2">
                    <div className="bg-primary text-gray-50 p-3 rounded-tl-lg rounded-b-lg max-w-[300px] text-sm relative">
                        <p>{message.message}</p>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 text-right">
                        {message.sent!.toLocaleDateString()}
                    </div>
                </div>
                <UserAvatar name={name} image={image} />
            </div>
        );
    }
};
export default MessageBox;
