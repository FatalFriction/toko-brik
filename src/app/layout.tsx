import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/session/SessionProvider";
import NavMenu from "@/components/nav/nav-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TOKO KELONTONG BRIK",
  description: "Sebuah toko klontong ingin masuk ke abad 21, mereka ingin menjual barang mereka online",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NavMenu/>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
