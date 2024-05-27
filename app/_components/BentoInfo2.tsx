'use client';
import { LazyMotion, domAnimation, useAnimationFrame } from 'framer-motion';
import { useEffect, useRef } from 'react';

const BentoInfo = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    let rotate = 0;
    useAnimationFrame((time, delta) => {
        // const rotate = Math.sin((time + delta) / 10000) * 200
        // const rotate = -time / 10000 * 200;
        // const rotate = -(time %) / 10000 * 200;
        time = time / 1000;
        // const rotate = 30 * Math.floor(time / 3) * (Math.floor(time / 3)) + Math.PI * 0.5 * (Math.floor(time / 3));
        rotate = 90 * Math.floor(time / 3);
        // const rotate = 1;
        // const y = (1 + Math.sin(t / 1000)) * -50;
        // boxRef.current ? boxRef?.current?.style.setProperty('transform', `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`) : null;
        // boxRef.current ? boxRef?.current?.style.setProperty('transform', ` rotateX(${rotate}deg) rotateY(${rotate}deg)`) : null;
        if (Math.floor(time) % 3 === 0) {
            rotate += rotate + ((time % 3) * 100 - 1) * (90 / (100 - 1)) + 1;
            console.log({ rotate });

            boxRef?.current?.style.setProperty(
                'transform',
                `translateX(30px) rotateY(${rotate}deg)`
            );
        } else {
            console.log(rotate);

            boxRef?.current?.style.setProperty(
                'transform',
                `translateX(30px) rotateY(${rotate}deg)`
            );
        }
    });

    return (
        <>
            <LazyMotion features={domAnimation}>
                <div
                    ref={boxRef}
                    style={{
                        transformStyle: 'preserve-3d',
                    }}
                    className="relative h-[200px] w-[600px] "
                >
                    <div
                        style={{
                            transform: 'rotateY(0deg) translateZ(300px)',
                        }}
                        className=" absolute left-0  top-0 flex h-[200px] w-[600px] flex-col items-center justify-center  bg-white"
                    >
                        <p className=" mb- text-lg font-normal text-accent-foreground sm:px-16  lg:text-xl ">
                            Get your besties even closer
                        </p>
                        <h1 className=" text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
                            Your <span className="text-primary">FRIENDS</span>{' '}
                            are <br /> just a{' '}
                            <span className="text-primary">TAP</span> away
                        </h1>
                    </div>
                    <div
                        style={{
                            transform: 'rotateY(90deg) translateZ(300px)',
                        }}
                        className="absolute flex h-[200px] w-[600px] flex-col items-center justify-center  bg-green-500"
                    >
                        <p className=" mb- text-lg font-normal text-accent-foreground sm:px-16 lg:text-xl ">
                            Get your besties even closer
                        </p>
                        <h1 className=" text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
                            Your <span className="text-primary">FRIENDS</span>{' '}
                            are <br /> just a{' '}
                            <span className="text-primary">TAP</span> away
                        </h1>
                    </div>
                    <div
                        style={{
                            transform: 'rotateY(180deg) translateZ(300px)',
                        }}
                        className="absolute flex h-[200px] w-[600px] items-center justify-center  bg-blue-500"
                    >
                        3
                    </div>
                    <div
                        style={{
                            transform: 'rotateY(-90deg) translateZ(300px)',
                        }}
                        className="absolute flex h-[200px] w-[600px] items-center justify-center  bg-yellow-500"
                    >
                        4
                    </div>
                    <div
                        style={{
                            transform: 'rotateX(90deg) translateZ(300px)',
                        }}
                        className="absolute flex h-[200px] w-[600px] items-center justify-center  bg-cyan-500"
                    >
                        5
                    </div>
                    <div
                        style={{
                            transform: 'rotateX(90deg) translateZ(300px)',
                        }}
                        className="absolute flex h-[200px] w-[600px] items-center justify-center  bg-pink-500"
                    >
                        6
                    </div>
                </div>
            </LazyMotion>
        </>
    );
};
export default BentoInfo;
