const BentoMessage = () => {
    return (
        <div className="relative mx-auto flex h-[168px]  w-[168px] items-center justify-center  overflow-hidden rounded-lg">
            <div className="absolute left-1/2 top-1/2 z-0 h-8 w-[120px]  origin-top-left animate-spin-slow  bg-gradient-to-t  from-white" />
            <div className="z-10 h-40 w-40 rounded-lg bg-red-500"></div>
        </div>
    );
};
export default BentoMessage;
