
import "./globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import Navbar from "./_components/nav/Navbar";
import ContextProvider from "./context/Context";
import Head from "next/head";
import { Providers } from "./Providers";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Intro Section with Dropdown",
  description: "Intro section with dropdown challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={epilogue.className}>{children}</body>
      </Providers>
    </html>
  );
}
