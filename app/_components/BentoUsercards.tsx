import AvatarIcon from '@/components/custom/AvatarIcon';

const BentoUserCards = () => {
    return (
        <div className="relative mt-0 flex flex-col gap-[2px] md:mt-2 md:gap-2">
            <div
                // style={{
                // background: 'radial-gradient(circle at 150px 150px, rgba(255,255,255,1) 0%, rgba(120,226,255,1) 92%)'
                // }}
                className="gray-200 flex w-full items-center justify-start rounded-full border border-gray-200 bg-gradient-to-l from-accent py-1 pl-2  pr-2 shadow-sm md:w-fit md:pr-14 "
            >
                <AvatarIcon
                    className="h-7 w-7 lg:h-10 lg:w-10"
                    image="/avatars/avatar1.png"
                    name="Bonnie Green"
                />
                <h1 className="text-wrap lg:text-nowrap ms-1 text-left  text-xs font-medium  md:ms-3   xl:text-lg">
                    Samantha Cook
                </h1>
            </div>
            <div className="gray-200 flex w-full items-center justify-start rounded-full border border-gray-200 bg-gradient-to-l from-accent py-1 pl-2  pr-2 shadow-sm md:w-fit md:pr-14 ">
                <AvatarIcon
                    className="h-7 w-7 lg:h-10 lg:w-10"
                    image="/avatars/avatar2.png"
                    name="Bonnie Green"
                />
                <h1 className="text-wrap lg:text-nowrap ms-1 text-left  text-xs font-medium  md:ms-3   xl:text-lg">
                    Bonnie Green
                </h1>
            </div>
            <div className="gray-200 flex w-full items-center justify-start rounded-full border border-gray-200 bg-gradient-to-l from-accent py-1 pl-2  pr-2 shadow-sm md:w-fit md:pr-14 ">
                <AvatarIcon
                    className="h-7 w-7 lg:h-10 lg:w-10"
                    image="/avatars/avatar3.png"
                    name="Bonnie Green"
                />
                <h1 className="text-wrap lg:text-nowrap ms-1 text-left  text-xs font-medium  md:ms-3   xl:text-lg">
                    Nirmali Fonseka
                </h1>
            </div>
        </div>
    );
};
export default BentoUserCards;
