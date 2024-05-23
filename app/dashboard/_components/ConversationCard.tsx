import UserAvatar from '@/components/custom/UserAvatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getLastMessage } from '@/serverActions/message/getMessages';
import Link from 'next/link';

type friend = {
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
            <Card className="relative bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 ">
                {friend.friend.status && (
                    <Badge variant="notificationMessage" />
                )}
                <CardContent className="flex items-center justify-start py-2 ">
                    <UserAvatar
                        name={friend.friend.name!}
                        image={friend.friend.image!}
                    />
                    <div className="ms-3 space-y-0.5 text-left font-medium dark:text-white rtl:text-right">
                        <div>{friend.friend.name as string}</div>
                        <div className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400 ">
                            {lastMessage?.message.message}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
