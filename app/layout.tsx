import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AI IQ Test Registration | Dabble College",
  description:
    "Register for the DexLabs AI IQ Test by Dabble College and discover your child's AI readiness score, report, counselling pathway, and admission benefit eligibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark h-full scroll-smooth font-sans", geist.variable)}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}