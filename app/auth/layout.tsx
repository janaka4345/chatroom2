import { Metadata } from "next";
import { type ReactNode } from "react";
export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms ",
}

export default function layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="container  hidden h-[calc(100svh-10svh)] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                {children}
                <div className="relative bg-blue-400 hidden h-full flex-col bg-muted p-10 text-black dark:border-r lg:flex">
                    {/* <div className="absolute inset-0 bg-zinc-900" /> */}
                    <h1 className="">TODO carasolu</h1>
                </div>
            </div>
        </>
    )
}