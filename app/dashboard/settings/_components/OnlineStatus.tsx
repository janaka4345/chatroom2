"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
export default function OnlineStatus({ status }: { status: boolean }) {
    const [first, setfirst] = useState(status)
    const handleChange = () => {
        console.log('clicked');

        setfirst(prev => !prev)
    }
    return (
        <div className="flex items-center space-x-2">
            <Switch checked={first} onCheckedChange={handleChange} id="online" />
            <Label htmlFor="online">Online</Label>
        </div>

    )
}