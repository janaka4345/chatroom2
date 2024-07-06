import UserAvatar from '@/components/custom/UserAvatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getLastMessage } from '@/serverActions/message/getMessages';
import Link from 'next/link';

export type friend = {
    friend: {
        id: string;
        status: boolean;
        name: string | null;
        email: string;
        image: string | null;
    };
    friendId: string;
    status: string;
};
export default async function ConversationCard({ friend }: { friend: friend }) {
    const lastMessage = await getLastMessage({ receiverId: friend.friendId });

    return (
        <Link href={`/dashboard/conversations/${friend.friendId}`}>
            <Card className="relative rounded-3xl border border-gray-100 bg-gray-400 bg-opacity-10 bg-clip-padding backdrop-blur-lg backdrop-filter ">
                {friend.friend.status && (
                    <Badge variant="notificationMessage" />
                )}
                <CardContent className="flex items-center justify-start py-2 ">
                    <UserAvatar
                        name={friend.friend.name!}
                        image={friend.friend.image!}
                    />
                    <div className="  ms-3 space-y-0.5 text-left font-medium rtl:text-right">
                        <div className='hidden lg:block'>{friend.friend.name as string}</div>
                        <div className="line-clamp-2 text-sm text-gray-500 ">
                            {lastMessage?.message.message}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
