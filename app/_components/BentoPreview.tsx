'use client';
import AvatarIcon from '@/components/custom/AvatarIcon';
import UserAvatar from '@/components/custom/UserAvatar';
import { LazyMotion, domAnimation, m } from 'framer-motion';
const BentoPreview = () => {
    return (
        <>
            <div className="m-2 mt-4  flex items-start gap-2 ">
                <UserAvatar
                    name="Justin Sunderland"
                    image="/avatars/avatar1.png"
                />
                <div className="flex flex-col gap-1">
                    <div className="max-w-[300px] text-pretty rounded-b-full rounded-tr-full border border-white  bg-gradient-to-r  from-bubble to-transparent py-2 pl-3  pr-6 text-sm">
                        <p>Hi how u doing?</p>
                    </div>
                    <div className="ml-auto text-xs text-gray-100 ">
                        2.23 p.m.
                    </div>
                </div>
            </div>
            <div className="m-2 flex items-start justify-end gap-2">
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
                <UserAvatar
                    name="Timmy Arnold"
                    image="/avatars/avatar2.png"
                />
            </div>
            <div className=" m-2  flex items-start gap-2 ">
                <UserAvatar
                    name="Justin Sunderland"
                    image="/avatars/avatar1.png"
                />
                <div className="flex flex-col gap-1">
                    <div className="max-w-[300px] text-pretty rounded-b-full rounded-tr-full border border-white  bg-gradient-to-r  from-bubble to-transparent py-2 pl-3  pr-6 text-sm">
                        <p>...</p>
                    </div>
                </div>
            </div>

            <LazyMotion features={domAnimation}>
                <m.div
                    initial={{ x: '100%' }}
                    animate={{
                        x: 0,
                        transition: {
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                            repeatType: 'loop',
                        },
                    }}
                    className=" absolute bottom-2 right-2  flex h-fit w-[350px] rounded-xl border  border-gray-200 bg-gradient-to-l from-accent to-gray-200 p-2 text-gray-500 shadow"
                >
                    <AvatarIcon
                        image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                        name="Bonnie Green"
                    />
                    <div className="ms-3 text-sm font-normal">
                        <span className="mb-1 text-sm font-semibold text-gray-900 ">
                            Jese Leos
                        </span>
                        <div className="mb-2 text-pretty text-sm font-normal">
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
