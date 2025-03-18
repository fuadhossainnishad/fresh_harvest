import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreProvider from "../store/StoreProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
// ${geistSans.variable} ${geistMono.variable}
//Geist, Geist_Mono

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Fresh Harvest",
  description: "Developed By Fuad Hossain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${rubik.className}  antialiased overflow-x-hidden scroll-smooth`}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
