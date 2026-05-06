
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Roboto_Slab, Poppins } from "next/font/google";
import Footer from "./components/Footer";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Neil Life Foundation",
  description: "Official website of Neil Life Foundation",
  icons: {
    icon: "/logo/neil-logo.png",
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
