// @useClient
import React, { useRef } from 'react';


import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar";
import Header from "@/component/header";

const urbanist = Urbanist({ subsets: ["latin"] });

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
      <head>
        <style>
          {`
            /* Aplica la fuente Urbanist a todo el documento */
            body {
              font-family: ${urbanist.className};
            }
          `}
        </style>
      </head>
      <body>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
