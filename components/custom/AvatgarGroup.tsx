import AvatarIcon from "@/components/custom/AvatarIcon"
import { Avatars } from "../../app/_components/BentoMessage"

const AvatarGroup = ({ avatars }: { avatars: Avatars[] }) => {
    return (
        <div className="absolute w-fit flex flex-row -space-x-4 hover:-space-x-2 origin-left duration-150 transition-all">
            {avatars.map(avatar => (
                <AvatarIcon key={avatar.name} image={avatar.src} name={avatar.name} className="w-6 h-6 hover:w-7 hover:h-7 hover:-translate-y-2 duration-100 " />

            ))}
        </div>
    )
}
export default AvatarGroup