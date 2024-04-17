import { getAllUsers } from '@/serverActions/users/getUsers'
import { User } from 'next-auth'
import UserCard from '../_components/UserCard'
import { getFriends } from '@/serverActions/users/getFriends'

export default async function usersPage() {
    const users = await getAllUsers()
    const friends = await getFriends()

    const nonFriends = users.filter(user => !friends.some(friend => friend.friendId === user.id))
    //TODO type error fix

    return (
        <section className="relative overflow-y-auto h-[90svh] grid grid-cols-2">
            <div>
                {/* <pre>{JSON.stringify(nonFriends, null, 2)}</pre> */}
                {/* {(users as Partial<User[]>).filter((user)=>return user.id===user.id)}  */}
                {(nonFriends as Partial<User[]>).map((user, i) => {
                    if (user) {
                        return (
                            <UserCard key={i} user={user} /> //TODO fix type errors
                        )
                    }
                    return null
                })}
            </div>
        </section>
    )
}
