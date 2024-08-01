"use client"

import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];


const formSchema = z.object({
    avatarImage: typeof window === 'undefined' ? z.any() : z
        .instanceof(FileList)
        .refine((file) => file?.[0].size <= MAX_FILE_SIZE, 'Image size cannot exceed 5MB')
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0].type), 'Invalid image format').optional()

})

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
export default function AvatarChangeModal() {
    const [selectedImage, setSelectedImage] = useState(null);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            avatarImage: "avatarImage",
        },
    })
    const fileRef = form.register("avatarImage");

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
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
                    <Image width={100} height={100} src={'/avatars/avatar1.png'} alt="avatar image" className="mx-auto w-fit" />
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="avatarImage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        {/* <Input placeholder="shadcn" {...field} /> */}
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <FormLabel>Picture</FormLabel>
                                            <Input type="file" {...fileRef}
                                                onChange={(event) => {
                                                    field.onChange(event.target?.files?.[0] ?? undefined);
                                                }}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
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