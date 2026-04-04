import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "./components/navigation/SiteHeader/SiteHeader";
import Footer from "./components/navigation/Footer/Footer";

export const metadata: Metadata = {
  title: "Jessie Krebs",
  description: "Custom courses and events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adobeKey = process.env.ADOBE_KEY;

  return (
    <html lang="en">
      <head>
        {adobeKey ? (
          <>
            <link rel="preconnect" href="https://use.typekit.net" />
            <link rel="stylesheet" href={adobeKey} />
          </>
        ) : null}
      </head>
      <body>
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}