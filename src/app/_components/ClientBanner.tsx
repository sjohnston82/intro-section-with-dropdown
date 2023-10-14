import Image from "next/image";
import React from "react";
import Databiz from "../../../public/images/client-databiz.svg";
import Audiophile from "../../../public/images/client-audiophile.svg";
import Meet from "../../../public/images/client-meet.svg";
import Maker from "../../../public/images/client-maker.svg";

const ClientBanner = () => {
  return (
    <div className="z-0 mt-[43px] flex   items-center gap-[4px] lg:mt-[56px] lg:w-full lg:gap-10">
      <Image
        src={Databiz}
        alt="Databiz"
        className=" h-5 scale-[.72] lg:scale-100"
      />
      <Image
        src={Audiophile}
        alt="Audiophile"
        className="-ml-[2px] scale-[.72] lg:ml-0 lg:scale-100"
      />
      <Image
        src={Meet}
        alt="Meet"
        className="ml-[1.5px] scale-[.72] lg:ml-0 lg:scale-100"
      />
      <Image
        src={Maker}
        alt="Maker"
        className="mr-[1px] scale-[.72] lg:ml-0 lg:scale-100"
      />
    </div>
  );
};

export default ClientBanner;
