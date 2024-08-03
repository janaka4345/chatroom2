import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col gap-2 border h-[100dvh] shadow-md rounded-3xl">
            <div className="flex flex-row gap-2 mt-4 ml-2">
                <Link className={cn(buttonVariants({ variant: "ghost" }), 'shadow-none')} href='/dashboard/settings/profile'>Profile</Link>
                <Link className={cn(buttonVariants({ variant: "ghost" }), 'shadow-none')} href='/dashboard/settings/notifications'>Notifications</Link>
                <Link className={cn(buttonVariants({ variant: "ghost" }), 'shadow-none')} href='/dashboard/settings/billing'>Billing</Link>
                <Link className={cn(buttonVariants({ variant: "ghost" }), 'shadow-none')} href='/dashboard/settings/security'>Security</Link>
                <Link className={cn(buttonVariants({ variant: "ghost" }), 'shadow-none')} href='/dashboard/settings/friends'>Friends</Link>


            </div>
            {children}
        </div>
    )
}