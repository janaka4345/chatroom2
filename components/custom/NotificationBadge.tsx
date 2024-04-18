import { cn } from "@/lib/utils"
import { Badge } from "../ui/badge"

export const NotificationBadge = ({ className }: { className?: string }) => {
    return (
        <Badge className={cn('absolute z-50 top-0 right-0 w-3 h-3 rounded-full px-0.5 bg-blue-500', className)} variant='notification' />
    )
}