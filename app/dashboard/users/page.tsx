import { getRequestSentUsers, getRequested } from '@/serverActions/requests/requests'
import { getFriends } from '@/serverActions/users/getFriends'
import { getAllUsers } from '@/serverActions/users/getUsers'
import { User } from 'next-auth'
import UserCard from '../_components/UserCard'

export default async function usersPage() {
    const users = await getAllUsers()
    const friends = await getFriends()
    const requestedUsers = await getRequestSentUsers()
    const requested = await getRequested()
    // const [users, friends, requestedUsers] = await Promise.all([getAllUsers(), getFriends(), getRequestSentUsers()])

    const nonFriends = (users as []).filter(user => !friends.some(friend => friend.friendId === user.id))
    //TODO type error fix
    const requestedUsersList = requestedUsers.map(user => {
        return user.receiverId
    })
    const requestedList = requested.map(user => { return user.senderId })

    return (
        <section className="relative overflow-y-auto h-[90svh]">
            <div>
                {(nonFriends as Partial<User[]>).map((user, i) => {
                    if (requestedUsersList.includes(user?.id as string)) {
                        return (<UserCard key={i} user={user} request='SENT_REQUEST' />)
                    }
                    if (requestedList.includes(user?.id as string)) {
                        return (<UserCard key={i} user={user} request='REQUESTED' />)
                    }
                    return (<UserCard key={i} user={user} request='NONE' />) //TODO fix type errors



                })}
            </div>

        </section>
    )
}
