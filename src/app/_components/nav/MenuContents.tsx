"use client";

import React, { useState } from "react";
import CaretDown from "../../../../public/images/icon-arrow-down.svg";
import CaretUp from "../../../../public/images/icon-arrow-up.svg";
import Image from "next/image";
import FeaturesDropdown from "./FeaturesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import { useIntroContext } from "@/app/context/Context";
import FeaturesDropDownDesktop from "./FeaturesDropDownDesktop";
import CompanyDropdownDesktop from "./CompanyDropdownDesktop";

const MenuContents = () => {
  const {
    windowSize,
    featuresOpen,
    setFeaturesOpen,
    companyOpen,
    setCompanyOpen,
  } = useIntroContext();

  const openFeaturesMenu = () => {
    if (companyOpen && windowSize.innerWidth > 1023) {
      setCompanyOpen(false);
    }
    setFeaturesOpen(!featuresOpen);
  };

  const openCompanyMenu = () => {
    if (featuresOpen && windowSize.innerWidth > 1023) {
      setFeaturesOpen(false);
    }
    setCompanyOpen(!companyOpen);
  };

  return (
    <div className="z-50 flex flex-col gap-4 pl-6 pt-[79px] lg:my-auto lg:ml-[7px] lg:mt-[10px] lg:h-full lg:w-full lg:max-w-[375px] lg:flex-row lg:items-center lg:gap-9 lg:pl-0 lg:pt-0">
      <div className="lg:flex lg:h-full lg:items-center lg:justify-center">
        <div
          onClick={() => openFeaturesMenu()}
          className="flex cursor-pointer items-center gap-4 tracking-[0.015em] text-almost-black hover:font-semibold lg:items-center lg:gap-2 lg:text-[15px] lg:font-[500] lg:tracking-[-0.025em] lg:text-medium-gray lg:hover:text-almost-black "
        >
          Features{" "}
          <span className="cursor-pointer hover:font-semibold">
            {featuresOpen ? (
              <Image src={CaretUp} alt="Caret Up" />
            ) : (
              <Image src={CaretDown} alt="Caret Down" />
            )}
          </span>
        </div>
        {windowSize.innerWidth < 1024 ? (
          <FeaturesDropdown />
        ) : (
          <FeaturesDropDownDesktop />
        )}
      </div>

      <div className="flex flex-col">
        <div
          className="ml-[1px] flex cursor-pointer items-center gap-4 tracking-[0.015em] text-almost-black hover:font-semibold lg:gap-2 lg:text-[15px] lg:font-[500] lg:tracking-[-0.025em] lg:text-medium-gray lg:hover:text-almost-black"
          onClick={() => openCompanyMenu()}
        >
          Company{" "}
          <span className="cursor-pointer">
            {companyOpen ? (
              <Image src={CaretUp} alt="Caret Up" className="hover:scale-115" />
            ) : (
              <Image src={CaretDown} alt="Caret Down" />
            )}
          </span>
        </div>
        {windowSize.innerWidth < 1024 ? (
          <CompanyDropdown />
        ) : (
          <CompanyDropdownDesktop />
        )}
      </div>

      <p className="cursor-pointer tracking-[0.015em] text-almost-black hover:font-semibold  lg:text-[15px] lg:font-[500]  lg:tracking-[-0.025em] lg:text-medium-gray lg:hover:text-almost-black">
        Careers
      </p>
      <p className="mt-[2px] cursor-pointer tracking-[0.015em] text-almost-black hover:font-semibold lg:ml-[2px] lg:mt-0  lg:text-[15px]  lg:font-[500] lg:tracking-[-0.025em] lg:text-medium-gray lg:hover:text-almost-black">
        About
      </p>
    </div>
  );
};

export default MenuContents;
