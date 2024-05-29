import AvatarIcon from '@/components/custom/AvatarIcon';

const BentoUsercards = () => {
    return (
        <div className="relative mt-0 md:mt-2 flex flex-col gap-[2px] md:gap-2">
            <div
                // style={{
                // background: 'radial-gradient(circle at 150px 150px, rgba(255,255,255,1) 0%, rgba(120,226,255,1) 92%)'
                // }}
                className="gray-200 flex w-full md:w-fit items-center justify-start rounded-full border border-gray-200 bg-gradient-to-l from-accent py-1  pl-2 pr-2 md:pr-14 shadow-sm "
            >
                <AvatarIcon
                    className='w-7 h-7 md:w-10 md:h-10'
                    image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                    name="Bonnie Green"
                />
                <h1 className="ms-1 md:ms-3  text-xs md:text-lg  text-left  font-medium">
                    Bonnie Green
                </h1>
            </div>
            <div className="gray-200 flex w-full md:w-fit items-center justify-start rounded-full border border-gray-200 bg-gradient-to-l from-accent py-1  pl-2 pr-2 md:pr-14 shadow-sm ">
                <AvatarIcon
                    className='w-7 h-7 md:w-10 md:h-10'
                    image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                    name="Bonnie Green"
                />
                <h1 className="ms-1 md:ms-3  text-xs md:text-lg  text-left  font-medium">
                    Bonnie Green
                </h1>
            </div>
            <div className="gray-200 flex w-full md:w-fit items-center justify-start rounded-full border border-gray-200 bg-gradient-to-l from-accent py-1  pl-2 pr-2 md:pr-14 shadow-sm ">
                <AvatarIcon
                    className='w-7 h-7 md:w-10 md:h-10'
                    image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                    name="Bonnie Green"
                />
                <h1 className="ms-1 md:ms-3  text-xs md:text-lg  text-left  font-medium">
                    Bonnie Green
                </h1>
            </div>
        </div>
    );
};
export default BentoUsercards;
