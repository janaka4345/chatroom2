'use client';
import { useAnimationFrame } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const BentoImageMove = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    let rotate = 0;
    useAnimationFrame((time, delta) => {
        const rotate = (-time / 10000) * 200;

        boxRef?.current?.style.setProperty(
            'transform',
            `rotateY(${rotate}deg)`
        );
    });
    return (
        <div
            ref={boxRef}
            style={{
                transformStyle: 'preserve-3d',
            }}
            className="relative h-[calc(100dvh/5-8px)] w-[calc((100dvw-32px))] md:h-[calc(85dvh/2-12px)] md:w-[calc((100dvw-160px)/2)] "
        >
            <div
                style={{
                    transform: 'rotateY(0deg) translateZ(calc((100dvw - 160px)/4))',
                }}
                className=" absolute left-0  top-0 flex h-[calc(100dvh/5-8px)] w-[calc((100dvw-32px))] md:h-[calc(85dvh/2-12px)] md:w-[calc((100dvw-160px)/2)] flex-col items-center justify-center   "
            >
                <Image
                    src="/image1.png"
                    alt="banner image"
                    fill
                    className=" object-cover "
                />
            </div>
            <div
                style={{
                    transform: 'rotateY(90deg) translateZ(calc((100dvw - 160px)/4))',
                }}
                className="absolute flex h-[calc(100dvh/5-8px)] w-[calc((100dvw-32px))] md:h-[calc(85dvh/2-12px)] md:w-[calc((100dvw-160px)/2)] flex-col items-center justify-center  rounded-xl "
            >
                <Image
                    src="/image2.jpg"
                    alt="banner image"
                    fill
                    className=" object-cover"
                />
            </div>
            <div
                style={{
                    transform: 'rotateY(180deg) translateZ(calc((100dvw - 160px)/4))',
                }}
                className="absolute flex h-[calc(100dvh/5-8px)] w-[calc((100dvw-32px))] md:h-[calc(85dvh/2-12px)] md:w-[calc((100dvw-160px)/2)] items-center justify-center  rounded-xl "
            >
                <Image
                    src="/image3.png"
                    alt="banner image"
                    fill
                    className=" object-cover"
                />
            </div>
            <div
                style={{
                    transform: 'rotateY(-90deg) translateZ(calc((100dvw - 160px)/4))',
                }}
                className="absolute flex h-[calc(100dvh/5-8px)] w-[calc((100dvw-32px))] md:h-[calc(85dvh/2-12px)] md:w-[calc((100dvw-160px)/2)] items-center justify-center  rounded-xl "
            >
                <Image
                    src="/image4.jpg"
                    alt="banner image"
                    fill
                    className=" object-cover"
                />
            </div>
            {/* <div
                        style={{
                            transform: 'rotateX(90deg) translateZ(300px)'
                        }}
                        className="absolute w-[600px] flex justify-center items-center h-[280px]  rounded-xl "

                    >5</div>
                    <div
                        style={{
                            transform: 'rotateX(90deg) translateZ(300px)'
                        }}
                        className="absolute w-[600px] flex justify-center items-center h-[280px]  rounded-xl "

                    >6</div> */}
        </div>
    );
};
export default BentoImageMove;
