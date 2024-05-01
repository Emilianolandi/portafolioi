import type { Metadata } from "next";
import {  Urbanist} from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar";

const urbanist = Urbanist ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi Portfolio 👨‍🏫:)",
  description: "nuevo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
