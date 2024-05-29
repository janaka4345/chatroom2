const TypingSkeleton = () => {
    return (
        <div className="relative flex flex-row items-end justify-start gap-1 py-1 ">
            <span className="h-2 w-2 scale-75 animate-blink rounded-full bg-gray-700 delay-200 md:h-3 md:w-3" />
            <span className="h-2 w-2 scale-75 animate-blink rounded-full bg-gray-700  delay-500 md:h-3 md:w-3" />
            <span className="h-2 w-2 scale-75 animate-blink rounded-full bg-gray-700 delay-700 md:h-3 md:w-3" />
        </div>
    );
};
export default TypingSkeleton;
