"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { nameChangeFormSchema } from "@/lib/schema"
import { updateUserName } from "@/serverActions/users/updateUser"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"



export default function NameChangeModal() {

    const form = useForm<z.infer<typeof nameChangeFormSchema>>({
        resolver: zodResolver(nameChangeFormSchema),
        defaultValues: {
            username: "",
        },
    })

    async function onSubmit(values: z.infer<typeof nameChangeFormSchema>) {
        const response = await updateUserName(values)
        console.log(response)
    }

    return (
        <Dialog>
            <DialogTrigger asChild className="absolute bottom-0 right-1/4 cursor-pointer ">
                <svg width="20" height="20" fill="none" viewBox="0 0 10 10"><path fill="#000" d="m2 7.8 2-.3h.1l5-5a.1.1 0 0 0 0-.2l-2-2H7l-5 5-.4 2a.4.4 0 0 0 .1.4l.3.1Zm.8-2 4.3-4.3.8.9-4.2 4.2-1 .2.1-1Zm6.5 3H.7c-.2 0-.4.2-.4.4v.4H9.6v-.4c0-.2 0-.4-.3-.4Z" /></svg>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Your Username</DialogTitle>
                    <DialogDescription>
                        Make changes to your Username. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Jone Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>

    )
}