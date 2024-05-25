import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
const BentoInfo = () => {
    return (

        <Carousel
            opts={{
                align: "start",
            }}
            orientation="vertical"
            className="w-full "
        >
            <CarouselContent className="-mt-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="pt-1 md:basis-1/2">

                        <div className="mx-auto absolute inset-0  flex h-full w-full flex-col items-center justify-center  rounded-3xl bg-green-500 text-xl "
                        >
                            <p className=" mb-4 text-lg font-normal text-accent-foreground sm:px-16 lg:px-48 lg:text-xl ">
                                Get your besties even closer
                            </p>
                            <h1 className=" text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
                                Your <span className="text-primary">FRIENDS</span> are <br />{' '}
                                just a <span className="text-primary">TAP</span> away
                            </h1>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};
export default BentoInfo;
