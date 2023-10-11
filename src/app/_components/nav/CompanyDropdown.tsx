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
      <div className="flex flex-col  py-3 px-5 gap-2">
        <p className="cursor-pointer">History</p>
        <p className="cursor-pointer">Our Team</p>
        <p className="cursor-pointer">Blog</p>
      </div>
    </div>
  );
};

export default CompanyDropdown;
