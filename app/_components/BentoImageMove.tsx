'use client'
import Image from 'next/image';
import { LazyMotion, domAnimation, useAnimationFrame } from "framer-motion";
import { useEffect, useRef } from "react";


const BentoImageMove = () => {
    const boxRef = useRef<HTMLDivElement>(null)
    let rotate = 0
    useAnimationFrame((time, delta) => {
        const rotate = -time / 10000 * 200;

        boxRef?.current?.style.setProperty('transform', `rotateY(${rotate}deg)`)

    });
    return (
        <LazyMotion features={domAnimation} >
            <div ref={boxRef}
                style={{
                    transformStyle: "preserve-3d"
                }}
                className="w-[600px] h-[280px] relative "
            >
                <div
                    style={{
                        transform: 'rotateY(0deg) translateZ(300px)',
                    }}
                    className=" absolute top-0  left-0 w-[600px] flex justify-center flex-col items-center h-[280px]   "
                >

                    <Image
                        src="/image1.png"
                        alt="banner iamge"
                        fill
                        className=" object-cover hue-rotate-15 saturate-50 "
                    />

                </div>
                <div
                    style={{
                        transform: 'rotateY(90deg) translateZ(300px)'
                    }}
                    className="absolute w-[600px] flex-col flex justify-center items-center h-[280px]  rounded-xl "

                >
                    <Image
                        src="/image2.jpg"
                        alt="banner iamge"
                        fill
                        className=" object-cover hue-rotate-15 saturate-50"
                    />
                </div>
                <div
                    style={{
                        transform: 'rotateY(180deg) translateZ(300px)'
                    }}
                    className="absolute w-[600px] flex justify-center items-center h-[280px]  rounded-xl "

                >
                    <Image
                        src="/image3.png"
                        alt="banner iamge"
                        fill
                        className=" object-cover hue-rotate-15 saturate-50"
                    />
                </div>
                <div
                    style={{
                        transform: 'rotateY(-90deg) translateZ(300px)'
                    }}
                    className="absolute w-[600px] flex justify-center items-center h-[280px]  rounded-xl "

                >
                    <Image
                        src="/image4.jpg"
                        alt="banner iamge"
                        fill
                        className=" object-cover hue-rotate-15 saturate-50"
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
        </LazyMotion>

    );
};
export default BentoImageMove;
