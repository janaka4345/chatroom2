'use client';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { sendPrivateMessages } from '@/serverActions/message/sendMessages';
import { getFriendWithSocketId } from '@/serverActions/users/getUsers';
import { socket } from '@/socket';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    message: z.string().min(2).max(50),
});
const MessageInput = ({ receiverId }: { receiverId: string }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: '',
        },
    });
    const session = useSession();
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const message = await sendPrivateMessages({
            receiverId: receiverId,
            message: values.message,
        });
        const friend = await getFriendWithSocketId(receiverId);
        socket.emit('revalidateUser', {
            socketId: friend?.socketId,
            message: values.message,
            image: session?.data?.user?.image,
            name: session?.data?.user?.name,
        }); //TODO do i need friends image and name or just senders name and image

        form.reset();
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-auto flex justify-between gap-2  flex-row "
            >
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className='w-full '>
                            <FormControl>
                                <Input
                                    className='w-[100%]'
                                    placeholder="Your message"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="rounded-lg "
                >
                    Send
                </Button>
            </form>
        </Form>
    );
};
export default MessageInput;
