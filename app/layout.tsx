import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import ClientLoadingScreen from "./components/ClientLoadingScreen";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "VIRSA | Punjabi Cultural Society • TIET",
  description: "Preserving and celebrating Punjab's living heritage, folk arts, Bhangra, Giddha, and vibrant cultural traditions at Thapar Institute of Engineering & Technology.",
  keywords: ["Virsa", "Punjabi Cultural Society", "Thapar", "TIET", "Bhangra", "Giddha", "Virsa Mela", "Sham-e-Virasat", "Punjab Heritage"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${poppins.variable} bg-[#08080a] text-zinc-100 antialiased selection:bg-amber-500/30 selection:text-amber-200 min-h-screen flex flex-col`}
      >
        <ClientLoadingScreen />
        <main className="flex-1 w-full">{children}</main>
      </body>
    </html>
  );
}
