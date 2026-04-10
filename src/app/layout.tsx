import BootstrapScripts from "../components/BootstrapScripts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energetic - Quality Products and Services",
  description:
    "Experience the quality with Energetic! We provide premium gym equipment, court flooring, sauna & steam rooms, smart lockers, and jacuzzis in Abu Dhabi, UAE.",
  keywords:
    "gym equipment, court flooring, sauna, steam rooms, smart lockers, jacuzzi, Abu Dhabi, UAE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Poppins:400,600,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/css/responsive.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <BootstrapScripts />
      </body>
    </html>
  );
}
