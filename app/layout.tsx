import { auth } from '@/auth'; //TODO uncomment if necessary use Server actions instead
import Navbar from '@/components/custom/Navbar';
import SessionProvider from '@/components/custom/SessionProvider';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import WSComponent from './dashboard/_components/WSComponent';
import './globals.css';
import { cn } from '@/lib/utils';

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
            <body className={cn(nunito.className, 'bg-gradient-to-b via-slate-200 from-white  to-accent')}>
                <SessionProvider session={session}>
                    <main >
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
