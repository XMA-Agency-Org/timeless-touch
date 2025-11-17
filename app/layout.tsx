import "./globals.css";
import { Providers } from "@/components/providers";
import ScrollToTop from "@/components/ScrollToTop";

import { Inter, Krub } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
});

const krub = Krub({
  subsets: ["latin"],
  variable: "--font-krub",
  weight: ["500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable} ${krub.variable}`}>
        <Providers>{children}</Providers>
        <ScrollToTop />
      </body>
    </html>
  );
}
