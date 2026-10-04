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
    default: "HydroHub — Pure water for fast moving lives",
    template: "%s · HydroHub",
  },
  description:
    "Water purifiers, dispensers, filters and bottles for homes and offices — installed in 24 hours, monitored for life.",
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
