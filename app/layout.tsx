import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/custom/Navbar'
import User from '@/components/custom/User'
// import { auth } from "@/auth"; TODO uncomment if necessary use Server actions instead
// import  SessionProvider  from '@/components/custom/SessionProvider'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Chatter',
    description: 'Your most trusted end to end encrypted Chat app',
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    // const session = await auth()
    return (
        <html lang="en">
            <body className={nunito.className}>
                {/* <SessionProvider session={session}> */}
                <main>
                    {/* <Navbar /> */}
                    <User className="fixed top-0 right-0 w-10 h-10" />
                    {children}
                </main>

                {/* </SessionProvider> */}
            </body>
        </html>
    )
}
