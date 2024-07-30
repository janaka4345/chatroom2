import AvatarIcon from "@/components/custom/AvatarIcon";
import SettingsForm from "../_components/SettingsPasswordChangeForm";
import { auth } from "@/auth";
import OnlineStatus from "../_components/OnlineStatus";

export default async function page() {
    const session = await auth()
    return (
        <div >
            <AvatarIcon className="w-20 h-20 mx-auto" image={session?.user?.image as string} name={session?.user?.name as string} />
            <h1 className="text-2xl font-bold w-fit mx-auto">{session?.user?.name}</h1>
            <p className="text-base w-fit mx-auto">{session?.user?.email}</p>
            <SettingsForm session={session} />
            <br />
            <hr />
            <OnlineStatus status={true} />
        </div>
    )
}