"use client"

import Image from "next/image";
import HeroMobile from '../../public/images/image-hero-mobile.png'
import Navbar from "./_components/nav/Navbar";
import ContextProvider from "./context/Context";

export default function Home() {
  return (
    <ContextProvider>
    <main className="w-[375px] bg-almost-white">
      <Navbar />
      <Image src={HeroMobile} alt="Mobile hero image"  />
    </main>

    </ContextProvider>
  );
}
