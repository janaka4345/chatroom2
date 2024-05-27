'use client';
import {
    LazyMotion,
    domAnimation,
    useAnimate,
    usePresence,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
const BentoInfo = () => {
    // const box1ref = useRef<HTMLMotionProps>(null)
    const box2ref = useRef<HTMLDivElement>(null);
    const box3ref = useRef<HTMLDivElement>(null);

    const [box1Ref, animate] = useAnimate();
    const [isPresent, safeToRemove] = usePresence();
    useEffect(() => {
        if (isPresent) {
            const enterAnimation = async () => {
                await animate(box1Ref.current, { x: 100 }, { duration: 3 });
            };
            enterAnimation();
        } else {
            const exitAnimation = async () => {
                await animate(box1Ref.current, { x: -100 }, { duration: 3 });
                safeToRemove();
            };

            exitAnimation();
        }

        return () => {};
    }, [isPresent]);

    return (
        <>
            <LazyMotion features={domAnimation}>
                <div
                    ref={box1Ref}
                    //  initial={{ rotateX: 0, y: 0 }}
                    //  animate={{ rotateX: 90, y: '-100%', transition: { repeatDelay: 4, duration: 3, repeat: Infinity, ease: "easeInOut", } }}
                    className="absolute inset-0 mx-auto  flex h-full w-full flex-col items-center justify-center  rounded-3xl bg-green-500 text-xl "
                >
                    <p className=" mb-4 text-lg font-normal text-accent-foreground sm:px-16 lg:px-48 lg:text-xl ">
                        Get your besties even closer
                    </p>
                    <h1 className=" text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
                        Your <span className="text-primary">FRIENDS</span> are{' '}
                        <br /> just a <span className="text-primary">TAP</span>{' '}
                        away
                    </h1>
                </div>

                {/* <div
                    // initial={{ x: '100%' }}
                    // animate={{ x: 0, transition: { repeatDelay: 3, delay: 1, duration: 3, repeat: Infinity, ease: "easeInOut", } }}
                    className="absolute inset-0 mx-auto origin-bottom flex h-full w-full flex-col items-center justify-center  rounded-3xl bg-green-500 text-xl ">
                    <p className=" mb-4 text-lg font-normal text-accent-foreground sm:px-16 lg:px-48 lg:text-xl ">
                        Get your besties even closer
                    </p>
                    <h1 className=" text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
                        Yr <span className="text-primary">FNDS</span> are <br />{' '}
                        just a <span className="text-primary">TAP</span> away
                    </h1>
                </div> */}
            </LazyMotion>
        </>
    );
};
export default BentoInfo;
