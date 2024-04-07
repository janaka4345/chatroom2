import UserCard from '../_components/UserCard'

export default function usersPage() {
    return (
        <section className="relative overflow-y-auto h-[90svh] grid grid-cols-2">
            <div>
                {[...Array(10)].map((_, i) => (
                    <UserCard key={i} friend={true} />
                ))}
            </div>
            <div>
                {[...Array(10)].map((_, i) => (
                    <UserCard key={i} friend={false} />
                ))}
            </div>
        </section>
    )
}
