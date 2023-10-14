import Image from "next/image";
import React from "react";
import TodoImage from "../../../../public/images/icon-todo.svg";
import CalendarImage from "../../../../public/images/icon-calendar.svg";
import RemindersImage from "../../../../public/images/icon-reminders.svg";
import PlanningImage from "../../../../public/images/icon-planning.svg";

type FeaturesDropdownProps = {
  featuresOpen: boolean;
};

const FeaturesDropDownDesktop = ({ featuresOpen }: FeaturesDropdownProps) => {
  return (
    featuresOpen && (
      <div className="absolute top-[70px] left-[112px] rounded-xl bg-white p-3 shadow-[0_0_25px_-12px_#696969]">
        <div className="flex w-full flex-col gap-3 py-[7px]  px-[16px] ">
          <div className="flex w-full items-center gap-[14px]">
            <Image src={TodoImage} alt="Todo Image" className="h-4 w-[14px]" />
            <p className="mt-[2px] cursor-pointer text-[14px] font-[400] tracking-[0.01em] hover:font-semibold">
              Todo List
            </p>
          </div>
          <div className="flex w-full items-center gap-[14px]">
            <Image
              src={CalendarImage}
              alt="Calendar Image"
              className=" h-4 w-[18px]"
            />
            <p className="-ml-[2px]  cursor-pointer text-[14px] font-[400] hover:font-semibold">
              Calendar
            </p>
          </div>
          <div className="flex w-full items-center gap-[14px]">
            <Image
              src={RemindersImage}
              alt="Reminders Image"
              className="h-4 w-[14px]"
            />
            <p className=" cursor-pointer text-[14px] font-[400] hover:font-semibold">
              Reminders
            </p>
          </div>
          <div className="flex w-full items-center gap-[14px]">
            <Image
              src={PlanningImage}
              alt="Planning Image"
              className="h-4 w-[14px]"
            />
            <p className=" cursor-pointer text-[14px] font-[400] hover:font-semibold">
              Planning
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default FeaturesDropDownDesktop;
