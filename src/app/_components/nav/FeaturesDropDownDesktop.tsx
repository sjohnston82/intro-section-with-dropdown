"use client"

import Image from "next/image";
import React from "react";
import TodoImage from "../../../../public/images/icon-todo.svg";
import CalendarImage from "../../../../public/images/icon-calendar.svg";
import RemindersImage from "../../../../public/images/icon-reminders.svg";
import PlanningImage from "../../../../public/images/icon-planning.svg";
import { useIntroContext } from "@/app/context/Context";


const FeaturesDropDownDesktop = () => {

  const { featuresOpen } = useIntroContext();

  return (
    featuresOpen && (
      <div className="absolute left-[112px] top-[70px] max-w-[156px] rounded-xl bg-white p-3 shadow-[0_0_25px_-12px_#696969]">
        <div className="flex w-full flex-col gap-3 px-[16px]  py-[7px] ">
          <div className="flex w-full items-center gap-[14px]">
            <Image src={TodoImage} alt="Todo Image" className="h-4 w-[14px]" />
            <p className="mt-[2px] cursor-pointer text-[14px] font-[400] tracking-[0.01em] text-almost-black hover:font-semibold">
              Todo List
            </p>
          </div>
          <div className="flex w-full items-center gap-[14px]">
            <Image
              src={CalendarImage}
              alt="Calendar Image"
              className=" h-4 w-[16px]"
            />
            <p className="-ml-[2px]  cursor-pointer text-[14px] font-[400] text-almost-black hover:font-semibold">
              Calendar
            </p>
          </div>
          <div className="flex w-full items-center gap-[14px]">
            <Image
              src={RemindersImage}
              alt="Reminders Image"
              className="h-4 w-[14px]"
            />
            <p className=" cursor-pointer text-[14px] font-[400] text-almost-black hover:font-semibold">
              Reminders
            </p>
          </div>
          <div className="flex w-full items-center gap-[14px]">
            <Image
              src={PlanningImage}
              alt="Planning Image"
              className="h-4 w-[14px]"
            />
            <p className=" cursor-pointer text-[14px] font-[400] text-almost-black hover:font-semibold">
              Planning
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default FeaturesDropDownDesktop;
