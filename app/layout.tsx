import type { Metadata } from "next";
import {  Nunito } from "next/font/google";
import "./globals.css";
// import { auth } from "@/auth"; TODO uncomment if necessary use Server actions instead
// import  SessionProvider  from '@/components/custom/SessionProvider'



const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatter",
  description: "Your most trusted end to end encrypted Chat app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await auth()
  return (
    <html lang="en">
      <body className={nunito.className}>
      {/* <SessionProvider session={session}> */}
        {children}
        {/* </SessionProvider> */}
        </body>
    </html>
  );
}
