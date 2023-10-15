"use client"

import { useIntroContext } from "@/app/context/Context";

const CompanyDropdownDesktop = () => {

  const { companyOpen } = useIntroContext();

  return (
    companyOpen && (
      <div className="absolute left-[305px] top-[70px] max-w-[117px] whitespace-nowrap rounded-xl bg-white px-[26px] py-5 shadow-[0_0_35px_-12px_#696969]">
        <div className="flex flex-col  gap-[12px]   ">
          <p className="cursor-pointer text-[14px] font-[400] tracking-[0.015em] text-almost-black hover:font-semibold">
            History
          </p>
          <p className="cursor-pointer text-[14px] font-[400] tracking-[0.015em] text-almost-black hover:font-semibold">
            Our Team
          </p>
          <p className="cursor-pointer text-[14px] font-[400] tracking-[0.015em] text-almost-black hover:font-semibold">
            Blog
          </p>
        </div>
      </div>
    )
  );
};

export default CompanyDropdownDesktop;
