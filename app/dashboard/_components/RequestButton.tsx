import { Button } from "@/components/ui/button"
import { sendFriendRequest } from "@/serverActions/requests/requests"
import { revalidatePath } from "next/cache"

export const RequestSentButton = () => {
    return (
        <Button disabled>Request Sent</Button>
    )
}
export const RequestButton = ({ receiverId, groupId, message }: { receiverId: string, groupId: string | null, message: string | null }) => {
    return (<form
        action={async () => {
            'use server'
            await sendFriendRequest({ receiverId: receiverId, groupId: groupId, message: message })
            revalidatePath('/dashboard/users')
        }}
    >

        <Button type='submit'>Send Request</Button>

    </form>)
}
export const RequestAcceptButton = () => {
    return (
        <div className="flex flex-row gap-2">
            <form
                action={async () => {
                    'use server'
                    console.log('accepted');
                    // await sendFriendRequest({ receiverId: user.id as string, groupId: null, message: 'ght' })
                    // revalidatePath('/dashboard/users')
                }}
            >

                <Button type="submit">Accept</Button> </form>
            <form
                action={async () => {
                    'use server'
                    console.log('rejected');
                    // await sendFriendRequest({ receiverId: user.id as string, groupId: null, message: 'ght' })
                    // revalidatePath('/dashboard/users')
                }}
            >

                <Button type="submit">Reject</Button> </form></div>
    )
}
export const DefaultButton = () => {
    return (
        <Button disabled>Default</Button>
    )
}