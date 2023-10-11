import Image from "next/image";
import React from "react";
import Databiz from "../../../public/images/client-databiz.svg";
import Audiophile from "../../../public/images/client-audiophile.svg";
import Meet from "../../../public/images/client-meet.svg";
import Maker from "../../../public/images/client-maker.svg";

const ClientBanner = () => {
  return (
    <div className="flex mt-10 gap-4 h-4 mx-3">
      <Image src={Databiz} alt="Databiz" />
      <Image src={Audiophile} alt="Audiophile" />
      <Image src={Meet} alt="Meet" />
      <Image src={Maker} alt="Maker" />
    </div>
  );
};

export default ClientBanner;
