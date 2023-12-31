import './globals.scss'
import {Montserrat} from 'next/font/google'
import React from "react";

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-mont'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} w-full`}>
        {children}
      </body>
    </html>
  )
}
