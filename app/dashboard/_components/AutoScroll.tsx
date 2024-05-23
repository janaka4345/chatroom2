'use client'
import { useEffect, useRef } from "react"

const AutoScroll = () => {
    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log('rerenderd autoscroll');
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        return () => { }
    }, [targetRef.current?.offsetTop])

    return (
        <div ref={targetRef} />
    )
}
export default AutoScroll