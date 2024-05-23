import UserAvatar from '@/components/custom/UserAvatar';
import { Message } from '@prisma/client';
//TODO refactor to avoid dry
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
            <div className="m-4 flex items-start gap-2 ">
                <UserAvatar name={name} image={image} />
                <div className="flex flex-col gap-1">
                    <div className="max-w-[300px] text-pretty rounded-b-full rounded-tr-full border border-white  bg-gradient-to-r  from-bubble to-transparent py-2 pl-3  pr-6 text-sm">
                        <p>{message.message}</p>
                    </div>
                    <div className="ml-auto text-xs text-gray-100 ">
                        {message.sent!.toUTCString()}
                    </div>
                </div>
            </div>
        );
    }
    if (type === 'SEND') {
        return (
            <div className="m-4 flex items-start justify-end gap-2">
                <div className="flex flex-col gap-2">
                    <div className="relative max-w-[300px] text-pretty rounded-b-full rounded-tl-full border  border-white bg-gradient-to-l  from-accent  to-transparent px-6 py-2 pl-6 pr-3 text-sm">
                        <p>{message.message}</p>
                    </div>
                    <div className="text-right text-xs  text-gray-100 ">
                        {message.sent!.toUTCString()}
                    </div>
                </div>
                <UserAvatar name={name} image={image} />
            </div>
        );
    }
};
export default MessageBox;
