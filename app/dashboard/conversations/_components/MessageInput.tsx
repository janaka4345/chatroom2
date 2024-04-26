'use client'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { sendPrivateMessages } from "@/serverActions/message/sendMessages"
import { getFriendBySocketId } from "@/serverActions/users/getUsers"
import { socket } from "@/socket"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSession } from "next-auth/react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    message: z.string().min(2).max(50),
})
const MessageInput = ({ receiverId }: { receiverId: string }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: "",
        },
    })
    const session = useSession()
    async function onSubmit(values: z.infer<typeof formSchema>) {

        const message = await sendPrivateMessages({ receiverId: receiverId, message: values.message })
        const friend = await getFriendBySocketId(receiverId);
        socket.emit('revalidateUser', { socketId: friend?.socketId, message: values.message, image: session?.data?.user?.image, name: session?.data?.user?.name }) //TODO do i need friends image and name or just senders name and image

        form.reset()


    }
    return (
        <div className=" ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your message" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}
export default MessageInput