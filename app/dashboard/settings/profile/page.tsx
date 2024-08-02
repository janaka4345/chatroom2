import AvatarIcon from "@/components/custom/AvatarIcon";
import SettingsForm from "../_components/SettingsPasswordChangeForm";
import { auth } from "@/auth";
import OnlineStatus from "../_components/OnlineStatus";
import AvatarChangeModal from "../_components/AvatarChangeModal";
import NameChangeModal from "../_components/NameChangeModal";
import { getOnlineUserStatusById } from "@/serverActions/users/onlineUser";

export default async function page() {
    const session = await auth()
    const isUserOnline = await getOnlineUserStatusById(session?.user?.id as string)
    return (
        <div className="flex flex-col gap-2">
            <div className="relative">
                <AvatarIcon className="w-20 h-20 mx-auto" image={session?.user?.image as string} name={session?.user?.name as string} />
                <AvatarChangeModal image={session?.user?.image} />
            </div>

            <div className="relative">
                <h1 className="text-2xl font-bold w-fit mx-auto">{session?.user?.name}</h1>
                <NameChangeModal />
            </div>
            <div className="relative">
                <p className="text-base w-fit mx-auto">{session?.user?.email}</p>

            </div>
            <OnlineStatus status={isUserOnline?.status as boolean} />
            <SettingsForm session={session} />


        </div>
    )
}