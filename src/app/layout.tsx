
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Roboto_Slab, Poppins } from "next/font/google";
import Footer from "./components/Footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo/neil-logo.png",
    apple: "/logo/neil-logo.png",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/EV_NYFF_4.jpeg",
        width: 1080,
        height: 719,
        alt: "Neil Life Foundation community gathering",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/EV_NYFF_4.jpeg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.variable} ${poppins.variable} ${robotoSlab.className} ${poppins.className} flex min-h-screen flex-col font-roboto antialiased`}
      >
        <header>
        <Navbar/>
        </header>
        <main className="w-full flex-grow">
        {children}
        </main>
        <footer className="mt-auto">
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
