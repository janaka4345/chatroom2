import AvatarIcon from "@/components/custom/AvatarIcon"

const BentoUserNotification = () => {
    return (
        <div className=" absolute  inset-0  p-4 border border-gray-200  text-gray-500 bg-gradient-to-l from-accent to-gray-200 rounded-xl shadow flex" >
            <AvatarIcon image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" name="Bonnie Green" />
            <div className="ms-3 text-sm font-normal">
                <span className="mb-1 text-sm font-semibold text-gray-900 ">Jese Leos</span>
                <div className="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
            </div>
        </div>

    )
}
export default BentoUserNotification