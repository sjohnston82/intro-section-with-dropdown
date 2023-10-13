import React from "react";

type CompanyDropdownProps = {
  companyOpen: boolean;
};

const CompanyDropdown = ({ companyOpen }: CompanyDropdownProps) => {
  return (
    <div
      className={`${
        companyOpen ? "max-h-40" : "max-h-0 invisible"
      }  transition-all duration-500 ease-in-out overflow-hidden w-full`}
    >
      <div className="flex flex-col  pt-5 pb-[10px] pl-[24px]  gap-[18px]">
        <p className="cursor-pointer tracking-[0.015em] hover:font-semibold">
          History
        </p>
        <p className="cursor-pointer tracking-[0.015em] hover:font-semibold">
          Our Team
        </p>
        <p className="cursor-pointer tracking-[0.015em] hover:font-semibold">
          Blog
        </p>
      </div>
    </div>
  );
};

export default CompanyDropdown;
