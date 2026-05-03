import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Registry from "./registry";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My App",
  description: "My Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Registry>
          <Navbar />
          <main style={{ paddingTop: "56px" }}>
            {children}
          </main>
          <Footer />
        </Registry>
      </body>
    </html>
  );
}
