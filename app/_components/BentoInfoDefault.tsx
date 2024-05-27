'use client';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';

import Autoplay from 'embla-carousel-autoplay';

const BentoInfo = () => {
    return (
        <Carousel
            opts={{
                align: 'start',
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 3000,
                    stopOnInteraction: false,
                }),
            ]}
            orientation="vertical"
            className="h-full w-full overflow-hidden"
        >
            <CarouselContent className="-mt-1 h-[200px]">
                <CarouselItem className="pt-1 md:basis-1/2">
                    <div className="mx-auto flex h-[calc(85dvh/3-12px)] w-full flex-col items-center justify-center  rounded-3xl border border-gray-100 bg-opacity-10 bg-gradient-to-b from-accent/80  to-gray-200 bg-clip-padding text-xl backdrop-blur-lg backdrop-filter ">
                        <p className=" mb-4 text-lg font-normal text-gray-900 sm:px-16  lg:text-xl ">
                            Get your besties even closer
                        </p>
                        <h1 className=" text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
                            Your <span className="text-primary">FRIENDS</span>{' '}
                            are <br /> just a{' '}
                            <span className="text-primary">TAP</span> away
                        </h1>
                    </div>
                </CarouselItem>
                <CarouselItem className="pt-1 md:basis-1/2">
                    <div className="mx-auto flex  h-[calc(85dvh/3-12px)]   w-full flex-col items-center justify-center  rounded-3xl border border-gray-100 bg-opacity-10 bg-gradient-to-b from-accent/80  to-gray-200 bg-clip-padding text-xl backdrop-blur-lg backdrop-filter ">
                        <p className=" mb-4 text-lg font-normal text-gray-900 sm:px-16  lg:text-xl ">
                            Connect with the people who matter the most
                        </p>
                        <h1 className=" text-center text-4xl  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
                            <span className="uppercase text-primary">
                                Conversations
                            </span>{' '}
                            that <br />{' '}
                            <span className="uppercase text-primary">
                                Click
                            </span>
                        </h1>
                    </div>
                </CarouselItem>
                <CarouselItem className="pt-1 md:basis-1/2">
                    <div className="mx-auto flex  h-[calc(85dvh/3-12px)]   w-full flex-col items-center justify-center  rounded-3xl border border-gray-100 bg-opacity-10 bg-gradient-to-b from-accent/80  to-gray-200 bg-clip-padding text-xl backdrop-blur-lg backdrop-filter ">
                        <p className=" mb-4 text-lg font-normal text-gray-900 sm:px-16  lg:text-xl ">
                            Chat with features that bring you closer.
                        </p>
                        <h1 className=" text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
                            Beyond{' '}
                            <span className="uppercase text-primary">Text</span>
                            ing
                        </h1>
                    </div>
                </CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    );
};
export default BentoInfo;
