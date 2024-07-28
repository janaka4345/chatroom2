import { Metadata } from "next";
import { type ReactNode } from "react";
import SocialLogin from "./_components/SocialLogin";
export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms ",
}

export default function layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="container flex flex-col lg:grid lg:grid-cols-2 h-fit lg:h-[calc(100svh-10svh)] items-center justify-center lg:max-w-none  lg:px-0">
                {children}
                <div className="relative bg-blue-400  h-fit lg:h-full flex-col bg-muted p-10 text-black  lg:flex">

                    {/* <h1 className="">TODO carasolu</h1> */}
                    <SocialLogin />

                </div>
            </div>
        </>
    )
}