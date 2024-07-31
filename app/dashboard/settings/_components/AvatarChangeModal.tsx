import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export default function AvatarChangeModal() {
    return (
        <Dialog>
            <DialogTrigger asChild className="absolute bottom-0 right-1/2 translate-x-14 cursor-pointer ">
                <svg width="20" height="20" fill="none" viewBox="0 0 10 10"><path fill="#000" d="m2 7.8 2-.3h.1l5-5a.1.1 0 0 0 0-.2l-2-2H7l-5 5-.4 2a.4.4 0 0 0 .1.4l.3.1Zm.8-2 4.3-4.3.8.9-4.2 4.2-1 .2.1-1Zm6.5 3H.7c-.2 0-.4.2-.4.4v.4H9.6v-.4c0-.2 0-.4-.3-.4Z" /></svg>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}