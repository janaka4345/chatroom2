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
            <div className="m-4 flex items-start gap-2">
                <UserAvatar name={name} image={image} />
                <div className="flex flex-col gap-1">
                    <div className="max-w-[300px] rounded-b-lg rounded-tr-lg bg-gray-100 p-3 text-sm dark:bg-gray-800 dark:text-gray-50 ">
                        <p>{message.message}</p>
                    </div>
                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                        {message.sent!.toLocaleDateString()}
                    </div>
                </div>
            </div>
        );
    }
    if (type === 'SEND') {
        return (
            <div className="m-4 flex items-start justify-end gap-2">
                <div className="flex flex-col gap-2">
                    <div className="relative max-w-[300px] rounded-b-lg rounded-tl-lg bg-primary p-3 text-sm text-gray-50">
                        <p>{message.message}</p>
                    </div>
                    <div className="text-right text-xs text-gray-500 dark:text-gray-400">
                        {message.sent!.toLocaleDateString()}
                    </div>
                </div>
                <UserAvatar name={name} image={image} />
            </div>
        );
    }
};
export default MessageBox;
