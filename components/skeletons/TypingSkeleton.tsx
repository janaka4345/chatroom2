const TypingSkeleton = () => {
    return (
        <div className="relative flex flex-row gap-1 items-end justify-start py-1 ">
            <span className="animate-blink delay-200 w-2 h-2 md:w-3 md:h-3 scale-75 bg-gray-700 rounded-full" />
            <span className="animate-blink delay-500 w-2 h-2 md:w-3 md:h-3  scale-75 bg-gray-700 rounded-full" />
            <span className="animate-blink delay-700 w-2 h-2 md:w-3 md:h-3 scale-75 bg-gray-700 rounded-full" />
        </div>
    )
}
export default TypingSkeleton