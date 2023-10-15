"use client";

import React, { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import SlideInMenu from "./SlideInMenu";
import { useIntroContext } from "@/app/context/Context";
import MenuContents from "./MenuContents";
import MenuButtons from "./MenuButtons";

const Navbar = () => {
  const { windowSize } = useIntroContext();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && <div className="relative w-full " >
      {windowSize.innerWidth < 1440 && <SlideInMenu />}
      <div className="ml-[17px] flex h-[68px]  items-center justify-between font-bold lg:ml-10 lg:h-[84px]">
        <h1 className="text-[35px] font-bold tracking-[-0.025em] lg:tracking-[-0.01em] text-almost-black">
          snap
        </h1>
        {windowSize.innerWidth < 1024 ? (
          <HamburgerMenu />
        ) : (
          <div className="lg:flex lg:w-[90%] lg:items-center lg:justify-between ">
            <MenuContents />
            <MenuButtons />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
