import AvatarIcon from '@/components/custom/AvatarIcon';

const BentoUserNotification = () => {
    return (
        <div className="flex rounded-xl  border border-gray-200  bg-gradient-to-l from-accent to-gray-200 p-1 text-gray-500 shadow md:min-h-full md:p-2">
            <AvatarIcon
                className="h-7 w-7 md:h-10 md:w-10"
                image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                name="Bonnie Green"
            />
            <div className="ms-3 text-xs font-normal">
                <span className="mb-1 text-xs font-semibold text-gray-900 md:text-base ">
                    Jese Leos
                </span>
                <div className="line-clamp-2 text-xs font-normal md:line-clamp-none md:text-sm">
                    Hi Neil, thanks for sharing your thoughts regarding
                    Flowbite.
                </div>
            </div>
        </div>
    );
};
export default BentoUserNotification;
