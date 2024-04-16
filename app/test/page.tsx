'use client'
import { Button } from '@/components/ui/button'
import { createFakerUserList } from '@/serverActions/users/createFakerUser'

export default function page() {
    const handleClick = async () => {
        const user = await createFakerUserList()
        console.log(user)
    }
    return (
        <div>
            <Button onClick={handleClick}>add data</Button>
        </div>
    )
}
