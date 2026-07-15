import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const onest = localFont({
  src: '../public/fonts/Onest.woff2',
  variable: "--font-onest",
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Annie Li",
  description: "Howdy! I’m Annie Li, an electrical engineering student at Texas A&M University.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable} antialiased`}
      >
        <div className="w-full bg-background text-foreground">
          <div className="mx-auto flex min-h-dvh w-full max-w-[770px] flex-col items-center gap-8 p-4 font-onest">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
