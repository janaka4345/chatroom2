import { auth } from '@/auth'; //TODO uncomment if necessary use Server actions instead
import Navbar from '@/components/custom/Navbar';
import SessionProvider from '@/components/custom/SessionProvider';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
// import { Poppins } from 'next/font/google';
import WSComponent from './dashboard/_components/WSComponent';
import './globals.css';

// const poppins = Poppins({ subsets: ['latin'], weight: ['400', '800'] });

export const metadata: Metadata = {
    title: 'Chatter',
    description: 'Your most trusted end-to-end encrypted Chat app',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    return (
        <html lang="en">
            <body
                // className={poppins.className}
                style={{
                    background:
                        // 'radial-gradient(circle at 0px 0px, rgba(34,193,195,1) 0%, rgba(45,245,253,0) 100%)',
                        'white',
                }}
            >
                <SessionProvider session={session}>
                    <main>
                        <Navbar />
                        {session?.user && <WSComponent />}
                        {children}
                    </main>
                    <Toaster />
                </SessionProvider>
            </body>
        </html>
    );
}
