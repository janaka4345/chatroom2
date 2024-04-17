import { getFriends } from '@/serverActions/users/getFriends'
import {
    getAllUsersWithoutFriends,
    getUserByEmailForAdmin,
} from '@/serverActions/users/getUsers'

const page = async () => {
    // const user = await getUserByEmailForAdmin('Naomie24@yahoo.com')
    // const user = await getAllUsersWithoutFriends()
    const user = await getFriends()
    return (
        <div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}
export default page
