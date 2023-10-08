"use client";

import { useIntroContext } from "@/app/context/Context";
import React from "react";

const HamburgerMenu = () => {
  const { navOpen, setNavOpen } = useIntroContext();
  return (
    <div
      className=" flex flex-col gap-1 items-center justify-center bg-green-200 p-2 cursor-pointer"
      onClick={() => setNavOpen(!navOpen)}
    >
      <span className="h-[2px] bg-almost-black w-6"></span>
      <span className="h-[2px] bg-almost-black w-6"></span>
      <span className="h-[2px] bg-almost-black w-6"></span>
    </div>
  );
};

export default HamburgerMenu;
