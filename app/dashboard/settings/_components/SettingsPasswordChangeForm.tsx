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
import { type MouseEvent, useState } from "react"
import { updatePassword } from "@/serverActions/users/updateUser"
import { toast } from "sonner"


export default function SettingsPasswordChangeForm({ session }: { session: Session | null }) {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)

    const form = useForm<z.infer<typeof settingsPasswordChangeFormSchema>>({
        resolver: zodResolver(settingsPasswordChangeFormSchema),
        defaultValues: {
            password: "",
            newPassword: "",
            confirmPassword: "",

        },
    })
    async function onSubmit(values: z.infer<typeof settingsPasswordChangeFormSchema>) {
        const response = await updatePassword(values)
        if (response?.success) {
            toast.success(response?.success)
        }
        if (response?.error) {
            toast.error(response?.error)
        }
        // console.log(response)
    }

    const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, state: string) => {
        e.preventDefault()
        switch (state) {
            case 'isPasswordVisible':
                setIsPasswordVisible(prev => !prev)
                break;
            case 'isNewPasswordVisible':
                setIsNewPasswordVisible(prev => !prev)
                break;
            case 'isConfirmPasswordVisible':
                setIsConfirmPasswordVisible(prev => !prev)
                break;
            default:
                break;
        }
    }


    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className=" w-[60dvw] mt-4 flex flex-col gap-2 mx-auto ">
                <h1 className="pb-2">Change your password</h1>

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel>Password</FormLabel>
                            <FormControl >
                                <div className="w-full md:w-1/2 flex flex-row gap-2 justify-center items-center">
                                    <Input type={isPasswordVisible ? "text" : "password"} placeholder="***********" {...field} />
                                    <Button variant='none' onClick={(e) => handleClick(e, 'isPasswordVisible')}>
                                        {isPasswordVisible ? <svg width="24" height="24" fill="none" viewBox="0 0 12 12"><path fill="#000" d="M11 5.7c-.4-.9-.9-1.6-1.4-2.1l-.6.6c.5.4.9 1 1.3 1.8-1 2-2.4 3-4.3 3-.6 0-1-.1-1.6-.3l-.6.7c.6.3 1.4.4 2.2.4 2.3 0 4-1.2 5-3.5a.7.7 0 0 0 0-.6Zm-.7-3.8-.5-.5h-.1L8.4 2.7c-.7-.3-1.5-.5-2.4-.5-2.3 0-4 1.2-5 3.5a.7.7 0 0 0 0 .6 7 7 0 0 0 1.6 2.2L1.3 9.8v.1l.5.5H2l8.3-8.3v-.2ZM1.7 6c1-2 2.4-3 4.3-3 .6 0 1.2.1 1.7.4l-.8.8A2 2 0 0 0 4.1 7l-1 1a6 6 0 0 1-1.4-2Zm3 0a1.3 1.3 0 0 1 1.7-1.3L4.7 6.4V6Z" /><path fill="#000" d="M6 7.3h-.2l-.6.6A2 2 0 0 0 8 5.3l-.6.6A1.3 1.3 0 0 1 6 7.3Z" /></svg> : <svg className="cursor-pointer" width="24" height="24" fill="none" viewBox="0 0 12 12"><path fill="#000" d="M11 5.7c-1-2.3-2.7-3.5-5-3.5S2 3.4 1 5.7a.7.7 0 0 0 0 .6c1 2.3 2.7 3.5 5 3.5s4-1.2 5-3.5v-.6ZM6 9C4.1 9 2.7 8 1.7 6c1-2 2.4-3 4.3-3s3.3 1 4.3 3C9.3 8 7.9 9 6 9Zm0-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 3.3a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Z" /></svg>}
                                    </Button>

                                </div>

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
                            <FormControl>
                                <div className="w-full md:w-1/2 flex flex-row gap-2 justify-center items-center">
                                    <Input type={isNewPasswordVisible ? "text" : "password"} placeholder="***********" {...field} />
                                    <Button variant='none' onClick={(e) => handleClick(e, 'isNewPasswordVisible')}>
                                        {isNewPasswordVisible ? <svg width="24" height="24" fill="none" viewBox="0 0 12 12"><path fill="#000" d="M11 5.7c-.4-.9-.9-1.6-1.4-2.1l-.6.6c.5.4.9 1 1.3 1.8-1 2-2.4 3-4.3 3-.6 0-1-.1-1.6-.3l-.6.7c.6.3 1.4.4 2.2.4 2.3 0 4-1.2 5-3.5a.7.7 0 0 0 0-.6Zm-.7-3.8-.5-.5h-.1L8.4 2.7c-.7-.3-1.5-.5-2.4-.5-2.3 0-4 1.2-5 3.5a.7.7 0 0 0 0 .6 7 7 0 0 0 1.6 2.2L1.3 9.8v.1l.5.5H2l8.3-8.3v-.2ZM1.7 6c1-2 2.4-3 4.3-3 .6 0 1.2.1 1.7.4l-.8.8A2 2 0 0 0 4.1 7l-1 1a6 6 0 0 1-1.4-2Zm3 0a1.3 1.3 0 0 1 1.7-1.3L4.7 6.4V6Z" /><path fill="#000" d="M6 7.3h-.2l-.6.6A2 2 0 0 0 8 5.3l-.6.6A1.3 1.3 0 0 1 6 7.3Z" /></svg> : <svg className="cursor-pointer" width="24" height="24" fill="none" viewBox="0 0 12 12"><path fill="#000" d="M11 5.7c-1-2.3-2.7-3.5-5-3.5S2 3.4 1 5.7a.7.7 0 0 0 0 .6c1 2.3 2.7 3.5 5 3.5s4-1.2 5-3.5v-.6ZM6 9C4.1 9 2.7 8 1.7 6c1-2 2.4-3 4.3-3s3.3 1 4.3 3C9.3 8 7.9 9 6 9Zm0-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 3.3a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Z" /></svg>}
                                    </Button>

                                </div>
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
                            <FormControl>
                                <div className="w-full md:w-1/2 flex flex-row gap-2 justify-center items-center">
                                    <Input type={isConfirmPasswordVisible ? "text" : "password"} placeholder="***********" {...field} />
                                    <Button variant='none' onClick={(e) => handleClick(e, 'isConfirmPasswordVisible')}>
                                        {isConfirmPasswordVisible ? <svg width="24" height="24" fill="none" viewBox="0 0 12 12"><path fill="#000" d="M11 5.7c-.4-.9-.9-1.6-1.4-2.1l-.6.6c.5.4.9 1 1.3 1.8-1 2-2.4 3-4.3 3-.6 0-1-.1-1.6-.3l-.6.7c.6.3 1.4.4 2.2.4 2.3 0 4-1.2 5-3.5a.7.7 0 0 0 0-.6Zm-.7-3.8-.5-.5h-.1L8.4 2.7c-.7-.3-1.5-.5-2.4-.5-2.3 0-4 1.2-5 3.5a.7.7 0 0 0 0 .6 7 7 0 0 0 1.6 2.2L1.3 9.8v.1l.5.5H2l8.3-8.3v-.2ZM1.7 6c1-2 2.4-3 4.3-3 .6 0 1.2.1 1.7.4l-.8.8A2 2 0 0 0 4.1 7l-1 1a6 6 0 0 1-1.4-2Zm3 0a1.3 1.3 0 0 1 1.7-1.3L4.7 6.4V6Z" /><path fill="#000" d="M6 7.3h-.2l-.6.6A2 2 0 0 0 8 5.3l-.6.6A1.3 1.3 0 0 1 6 7.3Z" /></svg> : <svg className="cursor-pointer" width="24" height="24" fill="none" viewBox="0 0 12 12"><path fill="#000" d="M11 5.7c-1-2.3-2.7-3.5-5-3.5S2 3.4 1 5.7a.7.7 0 0 0 0 .6c1 2.3 2.7 3.5 5 3.5s4-1.2 5-3.5v-.6ZM6 9C4.1 9 2.7 8 1.7 6c1-2 2.4-3 4.3-3s3.3 1 4.3 3C9.3 8 7.9 9 6 9Zm0-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 3.3a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Z" /></svg>}
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button disabled={form.formState.isSubmitting} className="w-fit px-4 mx-auto mt-4" type="submit">Change Password</Button>
            </form>
        </Form >
    )

}