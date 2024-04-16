'use client'
import { Button } from '@/components/ui/button'
import { createUser } from '@/serverActions/users/createUser'

export default function page() {
    const handleClick = async () => {
        const user = await createUser()
        console.log(user)
    }
    return (
        <div>
            <Button onClick={handleClick}>add data</Button>
        </div>
    )
}
