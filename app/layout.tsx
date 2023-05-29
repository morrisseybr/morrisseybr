import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MorrisseyBR",
  description: "Personal blog of MorrisseyBR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}
          px-8
          md:px-20
          lg:px-40`}
      >
        <header className="py-4 md:py-6 lg:py-8 flex justify-between">
          <Image
            src="/images/logo-white.png"
            width={40}
            height={40}
            alt="MorrisseyBR"
          />
          <nav className="flex gap-4 items-center">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
