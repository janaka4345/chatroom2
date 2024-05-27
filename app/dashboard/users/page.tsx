import {
    getRequestSentUsers,
    getRequested,
} from '@/serverActions/requests/requests';
import { getFriends } from '@/serverActions/users/getFriends';
import { getAllUsers } from '@/serverActions/users/getUsers';

import UserCard from '../_components/UserCard';
import { User } from '@prisma/client';

export default async function usersPage() {
    //get data from database
    const users = await getAllUsers();
    const friends = await getFriends();
    const requestedUsers = await getRequestSentUsers();
    const requested = await getRequested();

    //get id arrays for efficient  filtering
    const friendsList = friends?.map((user) => {
        return user.friendId;
    });
    const requestedUsersList = requestedUsers.map((user) => {
        return user.receiverId;
    });
    const requestedList = requested.map((user) => {
        return user.senderId;
    });

    //get non friends list
    const nonFriends = !!friendsList?.length
        ? (users as Partial<User>[]).filter(
              (user) => !friendsList.includes(user.id as string)
          )
        : (users as Partial<User>[]);
    //TODO type error fix

    return (
        <section className="relative h-[90svh] overflow-y-auto">
            <div>
                {/* render the user card component with respective action buttons */}
                {nonFriends.map((user, i) => {
                    if (requestedUsersList.includes(user?.id as string)) {
                        return (
                            <UserCard
                                key={i}
                                user={user}
                                request="SENT_REQUEST"
                            />
                        );
                    }
                    if (requestedList.includes(user?.id as string)) {
                        return (
                            <UserCard
                                key={i}
                                user={user}
                                request="REQUESTED"
                            />
                        );
                    }
                    return (
                        <UserCard
                            key={i}
                            user={user}
                            request="NONE"
                        />
                    ); //TODO fix type errors
                })}
            </div>
        </section>
    );
}
