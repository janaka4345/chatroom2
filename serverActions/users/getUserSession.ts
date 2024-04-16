import { auth } from '@/auth'

const getUserSession = async () => {
    const session = await auth()
    return session?.user
}
export default getUserSession
