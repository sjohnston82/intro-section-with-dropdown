import React from "react";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <div className="h-16 bg-blue-300 px-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">snap</h1>
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
