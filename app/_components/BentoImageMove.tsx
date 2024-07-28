'use client';
import { useAnimationFrame } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';



const BentoImageMove = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    useAnimationFrame((time, _) => {
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
            className="relative mx-auto h-[calc(100dvh/5-8px)] w-[calc((100dvw-64px))] md:h-[calc(85dvh/2-12px)] md:w-[calc((100dvw-160px)/2)] "
        >
            <MobileDiv />
            <LaptopDiv />
        </div>
    );
};

function LaptopDiv() {
    return (<>
        <div
            style={{
                transform:
                    'rotateY(0deg) translateZ(calc((100dvw - 160px)/4))',  //translateZ(calc((100dvw - 160px)/4)) must be equal to image Width/2. this div rotateY around he corner not middle
            }}
            className=" absolute hidden md:flex  flex-col items-center justify-center h-[calc(85dvh/2-12px)] w-[calc((100dvw-160px)/2)]"
        >
            <Image
                loading="lazy"
                decoding="async"
                sizes="(min-width: 780px) calc(50vw - 80px), calc(100vw - 32px)"
                src="/image1.png"
                alt="banner image"
                fill
                className=" object-cover "
            />
        </div>
        <div
            style={{
                transform:
                    'rotateY(90deg) translateZ(calc((100dvw - 160px)/4)) ', //translateZ(calc((100dvw - 160px)/4)) must be equal to image Width/2. this div rotateY around he corner not middle
            }}
            className="absolute hidden md:flex  flex-col items-center justify-center rounded-xl h-[calc(85dvh/2-12px)]  w-[calc((100dvw-160px)/2)] "
        >
            <Image
                loading="lazy"
                decoding="async"
                sizes="(min-width: 780px) calc(50vw - 80px), calc(100vw - 32px)"
                src="/image2.jpg"
                alt="banner image"
                fill
                className=" object-cover"
            />
        </div>
        <div
            style={{
                transform:
                    'rotateY(180deg) translateZ(calc((100dvw - 160px)/4))',  //translateZ(calc((100dvw - 160px)/4)) must be equal to image Width/2. this div rotateY around he corner not middle
            }}
            className="absolute hidden md:flex  items-center justify-center rounded-xl h-[calc(85dvh/2-12px)]  w-[calc((100dvw-160px)/2)] "
        >
            <Image
                loading="lazy"
                decoding="async"
                sizes="(min-width: 780px) calc(50vw - 80px), calc(100vw - 32px)"
                src="/image3.png"
                alt="banner image"
                fill
                className=" object-cover"
            />
        </div>
        <div
            style={{
                transform:
                    'rotateY(-90deg) translateZ(calc((100dvw - 160px)/4))',  //translateZ(calc((100dvw - 160px)/4)) must be equal to image Width/2. this div rotateY around he corner not middle
            }}
            className="absolute hidden md:flex  items-center justify-center rounded-xl h-[calc(85dvh/2-12px)]  w-[calc((100dvw-160px)/2)] "
        >
            <Image
                loading="lazy"
                decoding="async"
                sizes="(min-width: 780px) calc(50vw - 80px), calc(100vw - 32px)"
                src="/image4.jpg"
                alt="banner image"
                fill
                className=" object-cover"
            />
        </div>
    </>)
}
function MobileDiv() {
    return (<>
        <div
            style={{
                transform:
                    'rotateY(0deg) translateZ(calc((100dvw - 64px)/2))',  //translateZ(calc((100dvw - 160px)/4)) must be equal to image Width/2. this div rotateY around he corner not middle
            }}
            className=" absolute md:hidden flex  h-[calc(100dvh/5-8px)] w-[calc((100dvw-64px))] flex-col items-center justify-center    "
        >
            <Image
                loading="lazy"
                decoding="async"
                sizes="(min-width: 780px) calc(50vw - 80px), calc(100vw - 32px)"
                src="/image1.png"
                alt="banner image"
                fill
                className=" object-cover "
            />
        </div>
        <div
            style={{
                transform:
                    'rotateY(90deg) translateZ(calc((100dvw - 64px)/2)) ', //translateZ(calc((100dvw - 160px)/4)) must be equal to image Width/2. this div rotateY around he corner not middle
            }}
            className="absolute md:hidden flex h-[calc(100dvh/5-8px)]  w-[calc((100dvw-64px))] flex-col items-center justify-center rounded-xl md:h-[calc(85dvh/2-12px)]  md:w-[calc((100dvw-160px)/2)] "
        >
            <Image
                loading="lazy"
                decoding="async"
                sizes="(min-width: 780px) calc(50vw - 80px), calc(100vw - 32px)"
                src="/image2.jpg"
                alt="banner image"
                fill
                className=" object-cover"
            />
        </div>
        <div
            style={{
                transform:
                    'rotateY(180deg) translateZ(calc((100dvw - 64px)/2))',  //translateZ(calc((100dvw - 160px)/4)) must be equal to image Width/2. this div rotateY around he corner not middle
            }}
            className="absolute md:hidden flex h-[calc(100dvh/5-8px)] w-[calc((100dvw-64px))] items-center justify-center rounded-xl md:h-[calc(85dvh/2-12px)]  md:w-[calc((100dvw-160px)/2)] "
        >
            <Image
                loading="lazy"
                decoding="async"
                sizes="(min-width: 780px) calc(50vw - 80px), calc(100vw - 32px)"
                src="/image3.png"
                alt="banner image"
                fill
                className=" object-cover"
            />
        </div>
        <div
            style={{
                transform:
                    'rotateY(-90deg) translateZ(calc((100dvw - 64px)/2))',  //translateZ(calc((100dvw - 160px)/4)) must be equal to image Width/2. this div rotateY around he corner not middle
            }}
            className="absolute md:hidden flex h-[calc(100dvh/5-8px)] w-[calc((100dvw-64px))] items-center justify-center rounded-xl md:h-[calc(85dvh/2-12px)]  md:w-[calc((100dvw-160px)/2)] "
        >
            <Image
                loading="lazy"
                decoding="async"
                sizes="(min-width: 780px) calc(50vw - 80px), calc(100vw - 32px)"
                src="/image4.jpg"
                alt="banner image"
                fill
                className=" object-cover"
            />
        </div>
    </>)
}
export default BentoImageMove;
