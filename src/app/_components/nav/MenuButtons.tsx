import React from "react";

const MenuButtons = () => {
  return (
    <div className="group ml-6 mr-[20px] mt-[30px] flex flex-col justify-center gap-[13px] lg:m-0 lg:-mb-[1px]  lg:mr-[42px]  lg:flex-row lg:items-center lg:gap-10">
      <p className="-ml-[2px] cursor-pointer text-center text-[15px] tracking-tight text-almost-black hover:font-semibold lg:text-[15px] lg:font-[500] lg:tracking-[-0.025em] lg:text-medium-gray lg:hover:text-almost-black lg:group-hover:-mr-[1px]">
        Login
      </p>
      <button className="border-1 w-full rounded-[14px] border border-almost-black pb-[8px] pt-[9px] text-[15px] tracking-tight  text-almost-black hover:border-2 hover:font-semibold  lg:ml-[1px] lg:max-w-[100px]   lg:border-medium-gray lg:px-5 lg:text-[15px] lg:font-[500]  lg:tracking-[-0.025em] lg:text-medium-gray lg:shadow-inner lg:hover:text-almost-black ">
        Register
      </button>
    </div>
  );
};

export default MenuButtons;
