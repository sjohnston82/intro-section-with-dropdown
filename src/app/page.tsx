"use client";

import Image from "next/image";
import HeroMobile from "../../public/images/image-hero-mobile.png";
import Navbar from "./_components/nav/Navbar";
import ContextProvider from "./context/Context";
import ClientBanner from "./_components/ClientBanner";

export default function Home() {
  return (
    <ContextProvider>
      <main className="w-[375px] max-w-screen min-h-[100dvh] bg-almost-white overflow-hidden">
        <Navbar />
        <Image src={HeroMobile} alt="Mobile hero image" />
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-center">Make remote work</h1>
          <p className="text-center mx-4 mt-2 font-light">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-almost-black text-almost-white mx-auto mt-8 py-3 px-4 rounded-2xl flex justify-center">
            Learn more
          </button>
          <ClientBanner />
        </div>
      </main>
    </ContextProvider>
  );
}
