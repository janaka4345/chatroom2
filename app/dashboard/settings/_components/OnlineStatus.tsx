"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { updateUserOnlineStatus } from "@/serverActions/users/updateUser"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"
export default function OnlineStatus({ status }: { status: boolean }) {
    const router = useRouter()


    const [first, setfirst] = useState(status)
    const handleChange = async () => {
        const response = await updateUserOnlineStatus(!first)
        setfirst(prev => !prev)
        // console.log(response);
        if (response?.success) {
            toast.success(response?.success)
            router.refresh()

        }
        if (response?.error) {
            toast.error(response?.error)
        }

    }

    return (
        <div className="flex items-center space-x-2 w-fit mx-auto">
            <Switch checked={first} onCheckedChange={handleChange} id="online" />
            <Label htmlFor="online">Online</Label>
        </div>

    )
}