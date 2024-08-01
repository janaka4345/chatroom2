import AvatarIcon from "@/components/custom/AvatarIcon";
import SettingsForm from "../_components/SettingsPasswordChangeForm";
import { auth } from "@/auth";
import OnlineStatus from "../_components/OnlineStatus";
import AvatarChangeModal from "../_components/AvatarChangeModal";
import NameChangeModal from "../_components/NameChangeModal";

export default async function page() {
    console.log('home rendered');
    const session = await auth()
    return (
        <div className="flex flex-col gap-2">
            <div className="relative">
                <AvatarIcon className="w-20 h-20 mx-auto" image={session?.user?.image as string} name={session?.user?.name as string} />
                <AvatarChangeModal />
            </div>

            <div className="relative">
                <h1 className="text-2xl font-bold w-fit mx-auto">{session?.user?.name}</h1>
                {/* <svg className="absolute bottom-0 right-1/4 cursor-pointer " width="20" height="20" fill="none" viewBox="0 0 10 10"><path fill="#000" d="m2 7.8 2-.3h.1l5-5a.1.1 0 0 0 0-.2l-2-2H7l-5 5-.4 2a.4.4 0 0 0 .1.4l.3.1Zm.8-2 4.3-4.3.8.9-4.2 4.2-1 .2.1-1Zm6.5 3H.7c-.2 0-.4.2-.4.4v.4H9.6v-.4c0-.2 0-.4-.3-.4Z" /></svg> */}
                <NameChangeModal />
            </div>
            <div className="relative">
                <p className="text-base w-fit mx-auto">{session?.user?.email}</p>
                {/* <svg className="absolute bottom-0 right-1/4 cursor-pointer " width="20" height="20" fill="none" viewBox="0 0 10 10"><path fill="#000" d="m2 7.8 2-.3h.1l5-5a.1.1 0 0 0 0-.2l-2-2H7l-5 5-.4 2a.4.4 0 0 0 .1.4l.3.1Zm.8-2 4.3-4.3.8.9-4.2 4.2-1 .2.1-1Zm6.5 3H.7c-.2 0-.4.2-.4.4v.4H9.6v-.4c0-.2 0-.4-.3-.4Z" /></svg> */}
            </div>
            <OnlineStatus status={true} />
            <SettingsForm session={session} />


        </div>
    )
}