import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { FC } from "react";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DeepRef",
  description:
    "DeepRef is an AI-powered note-taking app that transforms your research into interactive learning experiences.",
};

const RootLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.className} antialiased p-4 lg:p-6`}>{children}</body>
    </html>
  );
};

export default RootLayout;
