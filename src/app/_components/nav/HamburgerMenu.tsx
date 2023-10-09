"use client";

import { useIntroContext } from "@/app/context/Context";
import React from "react";
import { cn } from "../../utils";

const HamburgerMenu = () => {
  const { navOpen, setNavOpen } = useIntroContext();

  const burgerBar =
    "h-[2px] bg-almost-black w-6 transition ease transform duration-300";
  return (
    <div
      className=" flex flex-col  gap-1 items-center  justify-center  p-2 cursor-pointer"
      onClick={() => setNavOpen(!navOpen)}
    >
      <span
        className={cn(`${burgerBar}`, {
          "rotate-45 translate-y-[7px] w-6": navOpen,
        })}
      ></span>
      <span
        className={cn(`${burgerBar}`, {
          "opacity-0": navOpen,
        })}
      ></span>
      <span
        className={cn(`${burgerBar}`, {
          "-rotate-45 -translate-y-[5px] w-6": navOpen,
        })}
      ></span>
    </div>
  );
};

export default HamburgerMenu;
