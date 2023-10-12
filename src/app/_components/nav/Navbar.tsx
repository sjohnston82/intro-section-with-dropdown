"use client";

import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import SlideInMenu from "./SlideInMenu";
import { useIntroContext } from "@/app/context/Context";
import { cn } from "@/app/utils";

const Navbar = () => {
  const { navOpen } = useIntroContext();
  return (
    <div className="relative w-full">
      <SlideInMenu />
      <div className="h-[68px]  ml-[17px] font-bold flex justify-between items-center">
        <h1 className="text-[35px] tracking-[-0.025em] font-bold">snap</h1>
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
