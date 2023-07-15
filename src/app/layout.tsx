"use client";
import "./globals.css";
import Navbar from "component/Navbar";

export const metadata = {
  title: "panaverse-dao",
  description: "Generated by create Hassan Khanz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
