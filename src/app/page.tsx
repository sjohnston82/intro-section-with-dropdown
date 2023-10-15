"use client";

import Image from "next/image";
import HeroMobile from "../../public/images/image-hero-mobile.png";
import HeroDesktop from "../../public/images/image-hero-desktop.png";
import Navbar from "./_components/nav/Navbar";
import { useIntroContext } from "./context/Context";
import ClientBanner from "./_components/ClientBanner";

export default function Home() {
  const {
    windowSize,
    companyOpen,
    setCompanyOpen,
    featuresOpen,
    setFeaturesOpen,
  } = useIntroContext();

  const closeMenus = () => {
    if (companyOpen) {
      setCompanyOpen(false);
    }
    if (featuresOpen) {
      setFeaturesOpen(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-almost-black" suppressHydrationWarning>
      <main
        onClick={closeMenus}
        className="max-w-screen h-[780px] w-[375px] overflow-hidden bg-almost-white   lg:h-[900px] lg:w-[1440px]"
      >
        <Navbar />
        <div className="lg:flex lg:flex-row-reverse lg:gap-6">
          <Image
            src={windowSize.innerWidth < 1024 ? HeroMobile : HeroDesktop}
            alt="Mobile hero image"
            className="mt-[7px] lg:mr-[130px] lg:mt-[46px] lg:h-[640px] lg:w-1/3"
          />
          <div className="mt-12 lg:ml-[165px] lg:mt-[140px] lg:flex lg:flex-col lg:gap-[52px]">
            {windowSize.innerWidth < 1024 ? (
              <h1 className="text-center text-4xl font-bold tracking-[-0.0125em] lg:text-left lg:text-[80px] lg:leading-tight ">
                Make remote work
              </h1>
            ) : (
              <div className="lg:mt-[30px] lg:flex lg:flex-col lg:gap-2">
                <h1 className="text-center text-4xl font-bold tracking-[-0.015em] lg:text-left lg:text-[80px] lg:text-almost-black ">
                  Make
                </h1>
                <br></br>
                <h1 className="text-center text-4xl font-bold tracking-[-0.015em]  lg:text-left lg:text-[80px] lg:text-almost-black">
                  remote work
                </h1>
              </div>
            )}
            <p className="mx-4 mt-[17px] text-center font-[500]  leading-relaxed tracking-[0.005em] text-medium-gray lg:mx-0 lg:w-[67%] lg:text-left lg:text-[18px] lg:leading-[1.58]">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>

            <button className="mx-auto mt-[24px] flex  justify-center rounded-[15px] bg-almost-black  pb-[11px] pl-[24px] pr-[21px] pt-[13px] font-[500]  text-almost-white hover:-mb-[2px] hover:border hover:border-almost-black hover:bg-almost-white hover:text-almost-black lg:mx-0 lg:-mt-[2px] lg:w-[25.5%] lg:justify-start  lg:pb-[13px] lg:pl-[22px] lg:pr-[19px] lg:pt-[16px] lg:text-[18px] lg:font-semibold">
              &nbsp;&nbsp;Learn more
            </button>

            <ClientBanner />
          </div>
        </div>
      </main>
    </div>
  );
}
