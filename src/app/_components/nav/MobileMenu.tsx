"use client";

import React from "react";
import { cn } from "../../utils";
import { useIntroContext } from "@/app/context/Context";

const MobileMenu = () => {
  const { navOpen } = useIntroContext();
  return (
    <div
      className={cn(
        "w-2/3 bg-almost-white min-h-screen ml-auto absolute right-0 transition-all ease-in duration-200 transform ",
        {
          "-right-[250px]": !navOpen,
        }
      )}
    >
      MobileMenu
    </div>
  );
};

export default MobileMenu;
