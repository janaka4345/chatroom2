import type { Metadata } from "next";
import {  Nunito } from "next/font/google";
import "./globals.css";


const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatter",
  description: "Your most trusted end to end encrypted Chat app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
