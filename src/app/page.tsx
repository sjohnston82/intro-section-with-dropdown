"use client";

import Image from "next/image";
import HeroMobile from "../../public/images/image-hero-mobile.png";
import Navbar from "./_components/nav/Navbar";
import ContextProvider from "./context/Context";
import ClientBanner from "./_components/ClientBanner";

export default function Home() {
  return (
    <ContextProvider>
      <div className="flex justify-center items-center w-full min-h-screen bg-almost-black">
        <main className="w-[375px] h-[780px] max-w-screen   bg-almost-white overflow-hidden">
          <Navbar />
          <Image
            src={HeroMobile}
            alt="Mobile hero image"
            className="mt-[7px]"
          />
          <div className="mt-12">
            <h1 className="text-4xl font-bold text-center tracking-[-0.0125em]">
              Make remote work
            </h1>
            <p className="text-center mx-4 mt-[17px] text-medium-gray tracking-[0.005em] leading-relaxed font-[500]">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>

            <button className="bg-almost-black text-almost-white font-[500]  mx-auto mt-[24px] pt-[13px] pb-[11px] pl-[24px] pr-[21px]  rounded-[15px] flex justify-center hover:bg-almost-white hover:text-almost-black hover:border hover:border-almost-black hover:-mb-[2px]">
              Learn more
            </button>

            <ClientBanner />
          </div>
        </main>
      </div>
    </ContextProvider>
  );
}
