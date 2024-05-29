import AvatarIcon from '@/components/custom/AvatarIcon';

const BentoUserNotification = () => {
    return (
        <div className="flex md:min-h-full  rounded-xl border  border-gray-200 bg-gradient-to-l from-accent to-gray-200 p-1 md:p-2 text-gray-500 shadow">
            <AvatarIcon
                className='w-7 h-7 md:w-10 md:h-10'
                image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                name="Bonnie Green"
            />
            <div className="ms-3 text-xs font-normal">
                <span className="mb-1 text-xs md:text-base font-semibold text-gray-900 ">
                    Jese Leos
                </span>
                <div className="text-xs md:text-sm font-normal line-clamp-2 md:line-clamp-none">
                    Hi Neil, thanks for sharing your thoughts regarding
                    Flowbite.
                </div>
            </div>
        </div>
    );
};
export default BentoUserNotification;
