import React from "react";

const MenuButtons = () => {
  return (
    <div className="mt-[30px] flex flex-col justify-center gap-[13px] ml-6 mr-[20px] ">
      <p className="text-center cursor-pointer -ml-[2px] text-almost-black text-[15px] hover:font-semibold tracking-tight">
        Login
      </p>
      <button className="w-full border border-1  text-[15px] tracking-tight text-almost-black  border-almost-black rounded-[14px]  pt-[9px] pb-[8px] hover:border-2 hover:font-semibold">
        Register
      </button>
    </div>
  );
};

export default MenuButtons;
