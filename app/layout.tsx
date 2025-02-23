import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { Analytics } from "@vercel/analytics/react"


const solanel = localFont({
  src: [
    { path: '../public/fonts/SolanelRegular.woff', weight: '500', style: 'normal' },
    { path: '../public/fonts/SolanelRegular.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/SolanelLight.woff', weight: '300', style: 'normal' },
    { path: '../public/fonts/SolanelLight.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/SolanelBold.woff', weight: '700', style: 'normal' },
    { path: '../public/fonts/SolanelBold.woff2', weight: '700', style: 'normal' },
  ],
  variable: "--font-solanel"
})

export const metadata: Metadata = {
  title: "Annie Li",
  description: "Howdy! I’m Annie Li, an electrical engineering student at Texas A&M University. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${solanel.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
