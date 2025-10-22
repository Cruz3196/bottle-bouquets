import type { Metadata } from "next";
import Navbar from "../app/Components/Navbar/Navbar.jsx";
import Footer from "../app/Components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bottle Bouquets",
  description: "A beautiful collection of bottle bouquets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="pastel">
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};