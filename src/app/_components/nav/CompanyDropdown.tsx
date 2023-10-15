"use client";

import { useIntroContext } from "@/app/context/Context";
import React from "react";

const CompanyDropdown = () => {
  const { companyOpen, closeMenus } = useIntroContext();

  return (
    <div
      className={`${
        companyOpen ? "max-h-40" : "invisible max-h-0"
      }  w-full overflow-hidden transition-all duration-500 ease-in-out`}
    >
      <div className="flex flex-col  gap-[18px] pb-[10px] pl-[24px]  pt-5">
        <p
          className="cursor-pointer tracking-[0.015em] text-almost-black hover:font-semibold"
          onClick={closeMenus}
        >
          History
        </p>
        <p
          className="cursor-pointer tracking-[0.015em] text-almost-black hover:font-semibold"
          onClick={closeMenus}
        >
          Our Team
        </p>
        <p
          className="cursor-pointer tracking-[0.015em] text-almost-black hover:font-semibold"
          onClick={closeMenus}
        >
          Blog
        </p>
      </div>
    </div>
  );
};

export default CompanyDropdown;
