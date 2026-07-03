import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: `${profile.name}, ${profile.title} at ${profile.company}. ${profile.location}.`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
