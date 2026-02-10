import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"]
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600", "700"]
});

export const metadata: Metadata = {
  title: "CV Karya Mandiri Teknik | Jasa Konstruksi & Renovasi Bandung",
  description:
    "CV Karya Mandiri Teknik melayani jasa konstruksi, renovasi, interior, dan maintenance untuk Bandung & sekitarnya sejak 2019."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-base text-ink antialiased">{children}</body>
    </html>
  );
}
