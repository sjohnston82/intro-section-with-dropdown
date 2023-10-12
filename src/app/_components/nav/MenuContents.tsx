"use client";

import React, { useState } from "react";
import CaretDown from "../../../../public/images/icon-arrow-down.svg";
import CaretUp from "../../../../public/images/icon-arrow-up.svg";
import Image from "next/image";
import FeaturesDropdown from "./FeaturesDropdown";
import { cn } from "@/app/utils";
import CompanyDropdown from "./CompanyDropdown";

const MenuContents = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4 pt-[79px] pl-6 z-50">
      <div className="flex flex-col">
        <div className="flex items-center gap-4 tracking-wide">
          Features{" "}
          <span className="cursor-pointer" onClick={() => setFeaturesOpen(!featuresOpen)}>
            {featuresOpen ? (
              <Image src={CaretUp} alt="Caret Up" />
            ) : (
              <Image src={CaretDown} alt="Caret Down" />
            )}
          </span>
        </div>
        <FeaturesDropdown featuresOpen={featuresOpen} />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center ml-[1px] gap-4">
          Company{" "}
          <span className="cursor-pointer" onClick={() => setCompanyOpen(!companyOpen)}>
            {companyOpen ? (
              <Image src={CaretUp} alt="Caret Up" />
            ) : (
              <Image src={CaretDown} alt="Caret Down" />
            )}
          </span>
        </div>
        <CompanyDropdown companyOpen={companyOpen} />
      </div>

      <p className="cursor pointer">Careers</p>
      <p className="cursor pointer">About</p>
    </div>
  );
};

export default MenuContents;
