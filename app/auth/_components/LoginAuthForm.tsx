"use client"

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
import { loginFormSchema } from "@/lib/schema"
import { login } from "@/serverActions/credentialAuth/login"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { type z } from "zod"



export function LoginAuthForm() {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    async function onSubmit(values: z.infer<typeof loginFormSchema>) {
        console.log(values)
        try {
            const res = await login(values)
            if (res?.error) {
                toast.error(res?.error)
            }

        } catch (error) {
            console.log({ error });
            toast.error('Invalid Details')
        }

    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email"
                                        autoCapitalize="none"
                                        autoComplete="email"
                                        autoCorrect="off"
                                        disabled={form.formState.isSubmitting}
                                        placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl >
                                    <div className="relative  ">
                                        <Input className="pe-8" type={isPasswordVisible ? "text" : "password"} placeholder="********" {...field} />
                                        <div onClick={() => setIsPasswordVisible(prev => !prev)} className="absolute pointer-events-auto inset-y-0 end-4 flex items-center ps-3.5 ">
                                            {isPasswordVisible ?
                                                <svg className="w-4 h-4 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 25 22"><g fill="#000" clipPath="url(#a)"><path d="M12.4 15.2a2.7 2.7 0 0 0 2.7-3l-3 3h.3Zm9-11.2-1-1a.2.2 0 0 0-.3 0l-2.6 2.7c-1.5-.8-3.2-1.2-5-1.2C7.8 4.5 4.3 7 2 12A1.5 1.5 0 0 0 2 13c1 2 2 3.5 3.3 4.7l-2.6 2.6a.2.2 0 0 0 0 .3l1 1a.2.2 0 0 0 .4 0L21.5 4.3a.2.2 0 0 0 0-.3ZM8.2 12.5a4.3 4.3 0 0 1 6.3-3.8L13.2 10a2.7 2.7 0 0 0-3.4 3.4l-1.2 1.2c-.3-.6-.5-1.3-.5-2Z" /><path d="M23 11.9a15 15 0 0 0-3-4.5L16.3 11a4.3 4.3 0 0 1-5.5 5.5l-3 3c1.4.6 2.9 1 4.6 1 4.7 0 8.2-2.5 10.5-7.4a1.5 1.5 0 0 0 0-1.2Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h25v22H0z" /></clipPath></defs></svg>
                                                :
                                                <svg className="w-4 h-4 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 25 22"><g clipPath="url(#a)"><path fill="#000" d="M9.7 12.5a2.7 2.7 0 1 0 5.4 0 2.7 2.7 0 0 0-5.4 0Zm13.3-.6c-2.3-5-5.8-7.4-10.5-7.4S4.3 7 2 12A1.5 1.5 0 0 0 2 13c2.3 5 5.8 7.4 10.5 7.4S20.7 18 23 13c.2-.4.2-.8 0-1.2Zm-10.6 4.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h25v22H0z" /></clipPath></defs></svg>
                                            }
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <p className="ml-auto text-center text-sm text-muted-foreground">
                        Don&apos;t remember your password{' '}
                        <Link
                            href="/auth/recoverPassword"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Click Here
                        </Link>{" "}
                    </p>
                    <Button className="mx-auto my-4" type="submit" disabled={form.formState.isSubmitting}>Log In</Button>
                </form>
            </Form>
        </>
    )
}