import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramesh's protfolio",
  description: "Ramesh's portfolio app",
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
  keywords: "portfolio app,portfolio my",
  authors: [{ name: "Ramesh" }],
  verification: {
    google: "fs3fI4RT8B2j8VUznZ2Lcuuzim3ucHDUWh0rHgeUe54",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
