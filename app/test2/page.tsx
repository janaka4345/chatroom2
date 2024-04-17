import { getUserByEmailForAdmin } from '@/serverActions/users/getUsers'

const page = async () => {
    const user = await getUserByEmailForAdmin('Naomie24@yahoo.com')
    return (
        <div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}
export default page
