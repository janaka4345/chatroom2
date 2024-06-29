'use client';
import AvatarIcon from '@/components/custom/AvatarIcon';
import TypingSkeleton from '@/components/skeletons/TypingSkeleton';
import { LazyMotion, domAnimation, m } from 'framer-motion';
const BentoPreview = () => {
    return (
        <>
            <div className="m-2 mt-2 flex items-start gap-2 md:mt-4 ">
                <AvatarIcon
                    className="h-7 w-7 md:h-10 md:w-10"
                    name="Justin Sunderland"
                    image="/avatars/avatar1.png"
                />
                <div className="flex flex-col gap-1">
                    <div className="max-w-[300px] text-pretty rounded-b-full rounded-tr-full border border-white  bg-gradient-to-r  from-bubble to-transparent py-2 pl-3  pr-6 text-xs md:text-sm">
                        <p>Hi how u doing?</p>
                    </div>
                    <div className="ml-auto text-[8px] text-gray-100 md:text-xs ">
                        2.23 p.m.
                    </div>
                </div>
            </div>
            <div className="m-2 flex items-start justify-end gap-2">
                <div className="flex flex-col gap-2">
                    <div className="relative max-w-[300px] text-pretty rounded-b-full rounded-tl-full border  border-white bg-gradient-to-l  from-accent  to-transparent px-6 py-2 pl-6 pr-3 text-xs md:text-sm">
                        <p>Fine. How are you</p>
                    </div>
                    <div className="relative max-w-[300px] text-pretty rounded-b-full rounded-tl-full border  border-white bg-gradient-to-l  from-accent  to-transparent px-6 py-2 pl-6 pr-3 text-xs md:text-sm">
                        <p>im at the shopping mall btw ::</p>
                    </div>
                    <div className="text-right text-xs  text-gray-100 ">
                        2.45 p.m.
                    </div>
                </div>
                <AvatarIcon
                    className="h-7 w-7 md:h-10 md:w-10"
                    name="Timmy Arnold"
                    image="/avatars/avatar2.png"
                />
            </div>
            <div className=" m-2  flex items-start gap-2 ">
                <AvatarIcon
                    className="h-7 w-7 md:h-10 md:w-10"
                    name="Justin Sunderland"
                    image="/avatars/avatar1.png"
                />
                <div className="flex flex-col gap-1">
                    <div className="max-w-[300px] text-pretty rounded-b-full rounded-tr-full border border-white  bg-gradient-to-r  from-bubble to-transparent py-2 pl-3  pr-6 text-xs md:text-sm">
                        <TypingSkeleton />
                    </div>
                </div>
            </div>

            <LazyMotion features={domAnimation}>
                <m.div
                    initial={{ x: '120%' }}
                    animate={{
                        x: 0,
                        transition: {
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                            repeatType: 'mirror',
                        },
                    }}
                    className="absolute bottom-[-90px]  right-2 flex  h-fit w-fit rounded-xl border border-gray-200 bg-gradient-to-l  from-accent to-gray-200 p-[2px] text-gray-500 md:bottom-2 md:w-[350px] md:p-2 "
                >
                    <AvatarIcon
                        className="h-7 w-7 md:h-10 md:w-10"
                        image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                        name="Bonnie Green"
                    />
                    <div className="ms-3  font-normal">
                        <span className="mb-1 text-xs font-semibold text-gray-900 md:text-sm ">
                            Jese Leos
                        </span>
                        <div className="mb-2 line-clamp-1 w-[50dvw] text-xs font-normal md:line-clamp-none md:w-full md:text-sm">
                            Hi Neil, thanks for sharing your thoughts regarding
                            Flowbite.
                        </div>
                    </div>
                </m.div>
            </LazyMotion>
        </>
    );
};
export default BentoPreview;
