"use client";

import React from "react";
import TodoImage from "../../../../public/images/icon-todo.svg";
import CalendarImage from "../../../../public/images/icon-calendar.svg";
import RemindersImage from "../../../../public/images/icon-reminders.svg";
import PlanningImage from "../../../../public/images/icon-planning.svg";
import Image from "next/image";
import { useIntroContext } from "@/app/context/Context";

const FeaturesDropdown = () => {
  const { featuresOpen, closeMenus } = useIntroContext();

  return (
    <div
      className={`${
        featuresOpen ? "max-h-48" : "invisible max-h-0"
      }  w-full overflow-hidden transition-all duration-500 ease-in-out lg:transition-none`}
    >
      <div className="flex w-full flex-col gap-4 pb-[10px]  pl-6 pt-6">
        <div className="flex w-full items-center gap-4" onClick={closeMenus}>
          <Image src={TodoImage} alt="Todo Image" className="h-5 w-[18px]" />
          <p className="mt-[2px] cursor-pointer tracking-[0.01em] text-almost-black hover:font-semibold">
            Todo List
          </p>
        </div>
        <div className="flex w-full items-center gap-4" onClick={closeMenus}>
          <Image
            src={CalendarImage}
            alt="Calendar Image"
            className="-mr-[1px] h-5 w-5"
          />
          <p className="-ml-[2px] mt-[2px] cursor-pointer text-almost-black hover:font-semibold">
            Calendar
          </p>
        </div>
        <div className="flex w-full items-center gap-4" onClick={closeMenus}>
          <Image
            src={RemindersImage}
            alt="Reminders Image"
            className="h-5  w-[18px]"
          />
          <p className="mt-[2px] cursor-pointer text-almost-black hover:font-semibold">
            Reminders
          </p>
        </div>
        <div className="flex w-full items-center gap-4" onClick={closeMenus}>
          <Image
            src={PlanningImage}
            alt="Planning Image"
            className="-mr-[2px] h-5 w-5"
          />
          <p className="mt-[2px] cursor-pointer text-almost-black hover:font-semibold">
            Planning
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDropdown;
