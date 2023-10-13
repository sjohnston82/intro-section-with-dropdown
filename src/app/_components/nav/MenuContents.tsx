"use client";

import React, { useState } from "react";
import CaretDown from "../../../../public/images/icon-arrow-down.svg";
import CaretUp from "../../../../public/images/icon-arrow-up.svg";
import Image from "next/image";
import FeaturesDropdown from "./FeaturesDropdown";
import { cn } from "@/app/utils";
import CompanyDropdown from "./CompanyDropdown";
import { useIntroContext } from "@/app/context/Context";
import FeaturesDropDownDesktop from "./FeaturesDropDownDesktop";

const MenuContents = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const { windowSize } = useIntroContext();
  return (
    <div className="z-50 flex flex-col gap-4 pl-6 pt-[79px] lg:my-auto lg:ml-[7px] lg:mt-[10px] lg:h-full lg:w-full lg:flex-row lg:items-center lg:gap-9 lg:pl-0 lg:pt-0">
      <div className="lg:flex lg:h-full lg:items-center lg:justify-center">
        <div
          onClick={() => setFeaturesOpen(!featuresOpen)}
          className="flex cursor-pointer items-center gap-4 tracking-[0.015em] text-almost-black hover:font-semibold lg:items-center lg:gap-2 lg:text-[15px] lg:font-[500] lg:tracking-[-0.025em] lg:text-medium-gray "
        >
          Features{" "}
          <span
            className="cursor-pointer hover:font-semibold"
            onClick={() => setFeaturesOpen(!featuresOpen)}
          >
            {featuresOpen ? (
              <Image src={CaretUp} alt="Caret Up" />
            ) : (
              <Image src={CaretDown} alt="Caret Down" />
            )}
          </span>
        </div>
        {windowSize.innerWidth < 1024 ? (
          <FeaturesDropdown featuresOpen={featuresOpen} />
        ) : (
          <FeaturesDropDownDesktop featuresOpen={featuresOpen} />
        )}
      </div>

      <div className="flex flex-col">
        <div
          className="ml-[1px] flex cursor-pointer items-center gap-4 tracking-[0.015em] text-almost-black hover:font-semibold lg:gap-2 lg:text-[15px] lg:font-[500] lg:tracking-[-0.025em] lg:text-medium-gray"
          onClick={() => setCompanyOpen(!companyOpen)}
        >
          Company{" "}
          <span
            className="cursor-pointer"
            onClick={() => setCompanyOpen(!companyOpen)}
          >
            {companyOpen ? (
              <Image src={CaretUp} alt="Caret Up" className="hover:scale-115" />
            ) : (
              <Image src={CaretDown} alt="Caret Down" />
            )}
          </span>
        </div>
        <CompanyDropdown companyOpen={companyOpen} />
      </div>

      <p className="cursor-pointer tracking-[0.015em] text-almost-black hover:font-semibold lg:-ml-4 lg:text-[15px] lg:font-[500]  lg:tracking-[-0.025em] lg:text-medium-gray">
        Careers
      </p>
      <p className="mt-[2px] cursor-pointer tracking-[0.015em] text-almost-black hover:font-semibold lg:ml-[2px] lg:mt-0  lg:text-[15px]  lg:font-[500] lg:tracking-[-0.025em] lg:text-medium-gray">
        About
      </p>
    </div>
  );
};

export default MenuContents;
