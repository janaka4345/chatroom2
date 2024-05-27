import AvatarIcon from "@/components/custom/AvatarIcon"
import UserAvatar from "@/components/custom/UserAvatar"
const BentoPreview = () => {
    return (
        <>
            <div className="m-4 flex items-start gap-2 ">
                <UserAvatar name='Justin Sunderland' image='/avatars/avatar1.png' />
                <div className="flex flex-col gap-1">
                    <div className="max-w-[300px] text-pretty rounded-b-full rounded-tr-full border border-white  bg-gradient-to-r  from-bubble to-transparent py-2 pl-3  pr-6 text-sm">
                        <p>Hi how u doing?</p>
                    </div>
                    <div className="ml-auto text-xs text-gray-100 ">
                        2.23 p.m.
                    </div>
                </div>
            </div>
            <div className="m-4 flex items-start justify-end gap-2">
                <div className="flex flex-col gap-2">
                    <div className="relative max-w-[300px] text-pretty rounded-b-full rounded-tl-full border  border-white bg-gradient-to-l  from-accent  to-transparent px-6 py-2 pl-6 pr-3 text-sm">
                        <p>Fine. How are you</p>
                    </div>
                    <div className="relative max-w-[300px] text-pretty rounded-b-full rounded-tl-full border  border-white bg-gradient-to-l  from-accent  to-transparent px-6 py-2 pl-6 pr-3 text-sm">
                        <p>i'm at the shopping mall btw :::</p>
                    </div>
                    <div className="text-right text-xs  text-gray-100 ">
                        2.45 p.m.
                    </div>
                </div>
                <UserAvatar name='Timmy Arnold' image='/avatars/avatar2.png' />

            </div>


            <div className=" absolute z-50  w-[350px] h-fit  p-2 bottom-2 right-2 border border-gray-200  text-gray-500 bg-gradient-to-l from-accent to-gray-200 rounded-xl shadow flex" >
                <AvatarIcon image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" name="Bonnie Green" />
                <div className="ms-3 text-sm font-normal">
                    <span className="mb-1 text-sm font-semibold text-gray-900 ">Jese Leos</span>
                    <div className="mb-2 text-sm font-normal text-pretty">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
                </div>
            </div>
            <div className=" absolute z-0 w-[350px] h-fit  p-2 bottom-6 right-4 border border-gray-200  text-gray-500 bg-gradient-to-l from-accent to-gray-200 rounded-xl shadow flex" >
                <AvatarIcon image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" name="Bonnie Green" />
                <div className="ms-3 text-sm font-normal">
                    <span className="mb-1 text-sm font-semibold text-gray-900 ">Jese Leos</span>
                    <div className="mb-2 text-sm font-normal text-pretty">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
                </div>
            </div>

        </>
    )
}
export default BentoPreview