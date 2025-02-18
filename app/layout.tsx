import type { Metadata } from "next";
import {Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
  display: "swap",
  //weight: "100 200 300 400 500 600 700 800 900"
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ['latin'],
  variable: "--font-space-grotesk",
  display: "swap",
  //weight: "100 200 300 400 500 600 700 800 900"
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
