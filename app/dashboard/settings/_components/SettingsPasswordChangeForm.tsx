"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { settingsPasswordChangeFormSchema } from "@/lib/schema"
import { type Session } from "next-auth"
import { Button } from "@/components/ui/button"


export default function SettingsPasswordChangeForm({ session }: { session: Session | null }) {

    const form = useForm<z.infer<typeof settingsPasswordChangeFormSchema>>({
        resolver: zodResolver(settingsPasswordChangeFormSchema),
        defaultValues: {
            password: "",
            newPassword: "",
            confirmPassword: "",

        },
    })
    function onSubmit(values: z.infer<typeof settingsPasswordChangeFormSchema>) {

        console.log(values)
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className=" w-[60dvw] mt-4 flex flex-col gap-2 mx-4 ">
                <h1>Change your password</h1>

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel>Password</FormLabel>
                            <FormControl className="w-1/2">
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                        <FormItem ><FormLabel>New Password</FormLabel>
                            <FormControl className="w-1/2">
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem ><FormLabel>Confirm Password</FormLabel>
                            <FormControl className="w-1/2">
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className="w-1/2" type="submit">Change Password</Button>
            </form>
        </Form >
    )

}