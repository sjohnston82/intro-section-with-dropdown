"use client";

import { useIntroContext } from "@/app/context/Context";
import React from "react";
import { cn } from "../../utils";
import MobileMenu from "./MobileMenu";

const SlideInMenu = () => {
  const { navOpen, setNavOpen } = useIntroContext();
  return (
    <div className="relative z-40">
      <div
        className={cn("bg-black opacity-60  w-full min-h-screen absolute", {
          hidden: !navOpen,
        })}
      ></div>
      <MobileMenu />
    </div>
  );
};

export default SlideInMenu;
