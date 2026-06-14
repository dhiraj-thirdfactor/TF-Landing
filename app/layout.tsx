import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelCircle } from "geist/font/pixel";
import "./globals.css";

export const metadata: Metadata = {
  title: "Third Factor | Instant Identity Verification for Regulated Markets",
  description:
    "Full-stack platform for fast, secure, and compliant onboarding. Trusted by banks, fintechs, and telecoms across regulated markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelCircle.variable} h-full antialiased`}
    >
      <body className="flex flex-col">{children}</body>
    </html>
  );
}
