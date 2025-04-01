import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramesh's protfolio",
  description: "Ramesh's portfolio app",
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
  keywords:
    "portfolio app,portfolio my, Entry-Level Software Engineer,Fresher Developer,Job-Seeking Developer,Open to Work,Available for Remote Work,Web Developer,Next.js Developer,Full Stack Developer,Frontend Developer,MERN Stack Developer,Tech Enthusiast",
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
