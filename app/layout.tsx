import type { Metadata } from "next";
import { Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DESCRIPTION =
  "BDE Management Consulting overbrugt de kloof tussen strategie en realisatie voor (semi-)overheden en de gereguleerde private sector.";

// Site-wide metadata. Pages set their own title ("<Page> | BDE Management Consulting"); the homepage uses the default.
// The browser-tab icons come from app/favicon.ico, app/icon.svg and app/apple-icon.png (Next.js file conventions).
export const metadata: Metadata = {
  metadataBase: new URL("https://bde-consulting.com"),
  title: "BDE Management Consulting | Van strategie naar realisatie",
  description: DESCRIPTION,
  applicationName: "BDE Management Consulting",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "BDE Management Consulting",
    title: "BDE Management Consulting | Van strategie naar realisatie",
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Enable scroll reveals before first paint (no flash); without JS everything stays visible */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('reveal-ready')" }} />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink m-0 p-0">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
