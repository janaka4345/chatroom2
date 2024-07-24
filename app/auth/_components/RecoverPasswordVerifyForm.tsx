'use client'

import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from '@/components/ui/input-otp'


import { Input } from '@/components/ui/input'
import { passwordResetSchema } from '@/lib/schema'
import { newPasswordToken } from '@/serverActions/credentialAuth/newPasswordToken'
import { recoverPasswordVerify } from '@/serverActions/credentialAuth/recoverPasswordVerify'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'

export default function RecoverPasswordVerifyForm() {
    const router = useRouter()
    const email = useSearchParams().get('email')

    const [verify, setVerify] = useState(false)

    console.log({ email })
    const form = useForm({
        resolver: zodResolver(passwordResetSchema),
        defaultValues: {
            email: email || '',
            passwordToken: '',
            newPassword: '',
            confirmPassword: '',
        },
    })
    async function onSubmit(values: z.infer<typeof passwordResetSchema>) {
        console.log(values)

        // const response = await axios.post(
        //     '/api/manualAuth/recoverPassword/verify',
        //     {
        //         values,
        //     }
        // )
        const response = await recoverPasswordVerify(values)
        console.log(response)
        if (response?.success) {
            toast.success(response?.success)
            router.push('/auth/login')
        }
        if (response?.error) {
            toast.error(response?.error)
        }
    }
    async function requestNewToken() {
        console.log(form.getValues('email'))

        if (!email && !form.getValues('email')) {
            return toast.error('Empty email is provided')
        }
        // const res = await axios.post('/api/manualAuth/newPasswordToken/', {
        //     values: { email: email || form.getValues('email') },
        // })
        const values = {
            email: email || form.getValues('email')
        }
        const res = await newPasswordToken(values)
        console.log(res)
        if (res.success) {
            toast.success(res.success)
            router.refresh()
        }
        if (res.error) {
            toast.error(res.error)
        }
    }
    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    {verify ? (
                        <>
                            <FormField
                                key="newPassword"
                                control={form.control}
                                name="newPassword"
                                render={({ field }) => (
                                    <FormItem className="col-start-1 col-end-2 row-start-3">
                                        <FormLabel>New Password</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="password" />
                                        </FormControl>
                                        {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                key="confirmPassword"
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem className="col-start-2 col-end-3 row-start-3">
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="password" />
                                        </FormControl>
                                        {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit">Submit</Button>
                        </>
                    ) : (
                        <>
                            {email ? (
                                <p>
                                    {' '}
                                    Please enter the one-time password sent to
                                    your email.
                                    <br />
                                    <span>{email}</span>
                                </p>
                            ) : (
                                <FormField
                                    key="email"
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Enter Your Email
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="sample@example.com"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}
                            <FormField
                                key="passwordToken"
                                control={form.control}
                                name="passwordToken"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>
                                        
                                        Please enter the one-time password sent
                                        to your email.
                                    </FormLabel> */}
                                        <FormControl>
                                            <InputOTP maxLength={6} {...field}>
                                                <InputOTPGroup>
                                                    <InputOTPSlot
                                                        className="border-black bg-gray-200"
                                                        index={0}
                                                    />
                                                    <InputOTPSlot
                                                        className="border-black bg-gray-200"
                                                        index={1}
                                                    />
                                                    <InputOTPSlot
                                                        className="border-black bg-gray-200"
                                                        index={2}
                                                    />
                                                </InputOTPGroup>
                                                <InputOTPSeparator />
                                                <InputOTPGroup>
                                                    <InputOTPSlot
                                                        className="border-black bg-gray-200"
                                                        index={3}
                                                    />
                                                    <InputOTPSlot
                                                        className="border-black bg-gray-200"
                                                        index={4}
                                                    />
                                                    <InputOTPSlot
                                                        className="border-black bg-gray-200"
                                                        index={5}
                                                    />
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                onClick={() => {
                                    setVerify(true)
                                    console.log('button clicked')
                                }}
                            >
                                Verify
                            </Button>
                        </>
                    )}
                </form>
            </Form>
            <p>
                didn't receive the code?
                <Button variant="link" onClick={requestNewToken}>
                    Request Another
                </Button>
            </p>
        </>
    )
}
