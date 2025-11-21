import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Energetic Contracting LLC | Gym Equipment & Fitness Solutions in Abu Dhabi, UAE",
  description: "Leading supplier of gym equipment, fitness solutions, sauna & steam rooms in Abu Dhabi, UAE. Professional installation, maintenance & supply services for commercial gyms, corporate fitness centers & home gyms.",
  keywords: "gym equipment Abu Dhabi, fitness equipment UAE, gym equipment supplier Abu Dhabi, commercial gym equipment UAE, sauna steam room Abu Dhabi, fitness solutions UAE, gym flooring Abu Dhabi, smart lockers UAE, access control gates Abu Dhabi",
  openGraph: {
    title: "Energetic Contracting LLC | Gym Equipment Abu Dhabi, UAE",
    description: "Leading supplier of gym equipment, fitness solutions, sauna & steam rooms in Abu Dhabi, UAE",
    url: "https://energetic.ae",
    siteName: "Energetic Contracting LLC",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Energetic Contracting LLC | Gym Equipment Abu Dhabi",
    description: "Leading supplier of gym equipment & fitness solutions in Abu Dhabi, UAE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://energetic.ae",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <StructuredData />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
