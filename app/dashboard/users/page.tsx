import { getAllUsers } from '@/serverActions/users/getUsers'
import UserCard from '../_components/UserCard'

export default async function usersPage() {
    const users = await getAllUsers()
    if (!users) {
        return null
    }
    return (
        <section className="relative overflow-y-auto h-[90svh] grid grid-cols-2">
            <div>
                {users.map((_, i) => (
                    <UserCard key={i} friend={true} />
                ))}
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
