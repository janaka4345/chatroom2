import AvatarIcon from "@/components/custom/AvatarIcon"
import { Avatars } from "../../app/_components/BentoMessage"
import { cn } from "@/lib/utils"

const AvatarGroup = ({ avatars, className }: { avatars: Avatars[], className?: string }) => {
    return (
        <div className={cn(" w-fit  flex flex-row -space-x-3 hover:-space-x-2 origin-left duration-150 transition-all", className)}>
            {avatars.map(avatar => (
                <AvatarIcon key={avatar.name} image={avatar.src} name={avatar.name} className="w-6 h-6 hover:w-7 hover:h-7 hover:-translate-y-2 duration-100 " />

            ))}
        </div>
    )
}
export default AvatarGroup