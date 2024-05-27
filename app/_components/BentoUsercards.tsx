import AvatarIcon from '@/components/custom/AvatarIcon';

const BentoUsercards = () => {
    return (
        <div className="mt-2 flex flex-col gap-2">
            <div
                // style={{
                // background: 'radial-gradient(circle at 150px 150px, rgba(255,255,255,1) 0%, rgba(120,226,255,1) 92%)'
                // }}
                className="gray-200 flex w-fit items-center justify-start rounded-full border border-gray-200 bg-gradient-to-l from-accent py-1  pl-2 pr-14 shadow-sm "
            >
                <AvatarIcon
                    image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                    name="Bonnie Green"
                />
                <h1 className="ms-3 space-y-0.5  text-left  font-medium">
                    Bonnie Green
                </h1>
            </div>
            <div className="gray-200 flex w-fit items-center justify-start rounded-full border border-gray-200 bg-gradient-to-l from-accent py-1  pl-2 pr-14 shadow-sm ">
                <AvatarIcon
                    image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                    name="Bonnie Green"
                />
                <h1 className="ms-3 space-y-0.5  text-left  font-medium">
                    Bonnie Green
                </h1>
            </div>
            <div className="gray-200 flex w-fit items-center justify-start rounded-full border border-gray-200 bg-gradient-to-l from-accent py-1  pl-2 pr-14 shadow-sm ">
                <AvatarIcon
                    image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                    name="Bonnie Green"
                />
                <h1 className="ms-3 space-y-0.5  text-left  font-medium">
                    Bonnie Green
                </h1>
            </div>
        </div>
    );
};
export default BentoUsercards;
