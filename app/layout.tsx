import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { FC } from "react";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body className={`${ibmPlexSans.className} antialiased p-4 xl:p-6 m-auto xl:max-w-[1440px] 2xl:max-w-[1920px]`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
