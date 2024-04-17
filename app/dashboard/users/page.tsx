import { getAllUsers } from '@/serverActions/users/getUsers'
import { User } from 'next-auth'
import UserCard from '../_components/UserCard'

export default async function usersPage() {
    const users = await getAllUsers()

    return (
        <section className="relative overflow-y-auto h-[90svh] grid grid-cols-2">
            <div>
                {(users as Partial<User[]>).map((user, i) => {
                    if (user) {
                        return (
                            <UserCard key={i} user={user} /> //TODO fix type errors
                        )
                    }
                    return null
                })}
            </div>
            {/* <div>
                {[...Array(10)].map((_, i) => (
                    <UserCard key={i} friend={false} />
                ))}
            </div> */}
            {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
        </section>
    )
}
