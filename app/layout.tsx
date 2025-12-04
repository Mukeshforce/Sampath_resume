import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sampath Arjunan | Enterprise Architect",
  description: "Enterprise Architect at IBM with over 13 years of experience in IT. Specializing in designing robust, scalable, and secure architectures for complex enterprise environments.",
  keywords: ["Enterprise Architect", "IBM", "Cloud Solutions", "Microservices", "Software Architecture"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
