import User from '@/components/custom/User';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import WSComponent from './dashboard/_components/WSComponent';
import { auth } from '@/auth'; //TODO uncomment if necessary use Server actions instead
import SessionProvider from '@/components/custom/SessionProvider';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/custom/Navbar';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Chatter',
    description: 'Your most trusted end to end encrypted Chat app',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    return (
        <html lang="en">
            <body className={nunito.className}>
                <SessionProvider session={session}>
                    <main>
                        <Navbar />
                        {session?.user && <WSComponent />}
                        <User className="fixed right-0 top-0 z-50 h-10 w-10" />
                        {children}
                    </main>
                    <Toaster />
                </SessionProvider>
            </body>
        </html>
    );
}
