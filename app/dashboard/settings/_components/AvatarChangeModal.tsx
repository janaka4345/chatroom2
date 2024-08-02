"use client"

import { z } from "zod";


import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerRenderProps, useForm } from "react-hook-form";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { avatarChangeFormSchema } from "@/lib/schema";
import { changeAvatar } from "@/serverActions/users/updateUser";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function AvatarChangeModal({ image }: { image: string | null | undefined }) {
    const router = useRouter()
    const [selectedImageUrl, setSelectedImageUrl] = useState<string | null | undefined>(image);

    const form = useForm<z.infer<typeof avatarChangeFormSchema>>({
        resolver: zodResolver(avatarChangeFormSchema),
        defaultValues: {
            avatarImage: "avatarImage",
        },
    })
    const fileRef = form.register("avatarImage");


    async function onSubmit(values: z.infer<typeof avatarChangeFormSchema>) {
        const data = new FormData()
        data.set('file', values?.avatarImage?.[0])
        const response = await changeAvatar(data)
        if (response?.success) {
            toast.success(response?.success)
            router.refresh()
        }
        if (response?.error) {
            toast.error(response?.error)
        }
        // console.log(response)
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>, field: ControllerRenderProps<{
        avatarImage?: any;
    }, "avatarImage">) {
        field.onChange(event.target?.files?.[0] ?? undefined);

        if (event.target.files?.[0]) {
            const newUrl = URL.createObjectURL(event.target.files?.[0])
            setSelectedImageUrl(newUrl)
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild className="absolute bottom-0 right-1/2 translate-x-14 cursor-pointer ">
                <svg width="20" height="20" fill="none" viewBox="0 0 10 10"><path fill="#000" d="m2 7.8 2-.3h.1l5-5a.1.1 0 0 0 0-.2l-2-2H7l-5 5-.4 2a.4.4 0 0 0 .1.4l.3.1Zm.8-2 4.3-4.3.8.9-4.2 4.2-1 .2.1-1Zm6.5 3H.7c-.2 0-.4.2-.4.4v.4H9.6v-.4c0-.2 0-.4-.3-.4Z" /></svg>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile picture</DialogTitle>
                    <DialogDescription>
                        Upload aa photo to change your profile picture.Click save when you&apos;re done.
                    </DialogDescription>
                    <Image width={100} height={100} src={selectedImageUrl ? selectedImageUrl : '/dp-placeholder.png'} alt="avatar image" className="mx-auto rounded-full w-[100px] h-[100px] object-cover" />

                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="avatarImage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <FormLabel>Picture</FormLabel>
                                            <Input type="file" {...fileRef} onChange={(event) => handleChange(event, field)} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <Button disabled={form.formState.isSubmitting} type="submit">Save Changes</Button>
                    </form>
                </Form>
                {/* <div className="grid gap-4 py-4">
                     <Label htmlFor="name" className="text-right">
                            Name
                        </Label> 
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture">Picture</Label>
                        <Input id="picture" type="file" onChange={ } />
                    </div>
                </div> */}
            </DialogContent>
        </Dialog>

    )
}