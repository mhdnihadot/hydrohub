import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";

// Premium free fonts from Fontshare (ITF Free Font License — commercial use OK), self-hosted from app/fonts.
const generalSans = localFont({
  src: [
    { path: "./fonts/GeneralSans-500.woff2", weight: "500" },
    { path: "./fonts/GeneralSans-600.woff2", weight: "600" },
    { path: "./fonts/GeneralSans-700.woff2", weight: "700" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-400.woff2", weight: "400" },
    { path: "./fonts/Satoshi-500.woff2", weight: "500" },
    { path: "./fonts/Satoshi-700.woff2", weight: "700" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Hydro Hub Industries — It all starts with water",
    template: "%s · Hydro Hub",
  },
  description:
    "SIA, India's 1st Dual Hardness Technology shower & tap filter. Reduces hair-fall, protects skin and prevents bacteria. Made in India by Hydro Hub Industries.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${generalSans.variable} ${satoshi.variable}`}>
      <body className="bg-white font-sans text-ink antialiased">
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
        <EnquiryModal />
      </body>
    </html>
  );
}
