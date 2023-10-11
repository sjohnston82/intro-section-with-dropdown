import Image from "next/image";
import React from "react";
import Databiz from "../../../public/images/client-databiz.svg";
import Audiophile from "../../../public/images/client-audiophile.svg";
import Meet from "../../../public/images/client-meet.svg";
import Maker from "../../../public/images/client-maker.svg";

const ClientBanner = () => {
  return (
    <div className="flex mt-[43px] gap-[4px]   items-center">
      <Image src={Databiz} alt="Databiz" className=" scale-[.72] h-5" />
      <Image src={Audiophile} alt="Audiophile" className="-ml-[2px] scale-[.72]" />
      <Image src={Meet} alt="Meet" className="ml-[1.5px] scale-[.72]" />
      <Image src={Maker} alt="Maker" className="mr-[1px] scale-[.72]" />
    </div>
  );
};

export default ClientBanner;
