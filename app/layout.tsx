import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banker's Ville",
  description: 'Welcome to Banker\'s Ville',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#1A0B2E]">{children}</body>
    </html>
  )
}
