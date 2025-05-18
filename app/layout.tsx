import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
})

const playFair = Playfair_Display({
  variable: "--font-playFair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "VoidLoop",
  description: "A classy and featureful landing page for a music production company",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playFair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
