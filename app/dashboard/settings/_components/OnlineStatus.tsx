"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"
export default function OnlineStatus({ status }: { status: boolean }) {
    const [first, setfirst] = useState(status)
    const handleChange = () => {
        setfirst(prev => !prev)

    }
    useEffect(() => {
        console.log(first);
    }, [first])

    return (
        <div className="flex items-center space-x-2 w-fit mx-auto">
            <Switch checked={first} onCheckedChange={handleChange} id="online" />
            <Label htmlFor="online">Online</Label>
        </div>

    )
}