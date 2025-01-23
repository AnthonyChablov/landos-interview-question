import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Everything Good About Wine",
  description: "What would you like to know?",
};

/**
 * RootLayout Component
 *
 * @description
 * - The root layout of the application that wraps around the main content
 * - Applies global styles and custom fonts using Next.js' `next/font` API
 * - Includes a `Nav` component for navigation and a `Footer` component for page footnotes
 * - Ensures the application is responsive and styled globally with `globals.css`
 *
 * @example
 * <RootLayout>
 *   <MainContent />
 * </RootLayout>
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
