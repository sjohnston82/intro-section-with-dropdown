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
      <div className="absolute top-24 rounded-xl bg-white p-3 shadow-[0_0_20px_-12px_#696969]">
        <div className="flex w-full flex-col gap-4 pb-[10px]  pl-6 pt-6">
          <div className="flex w-full items-center gap-4">
            <Image src={TodoImage} alt="Todo Image" className="h-5 w-[18px]" />
            <p className="mt-[2px] cursor-pointer tracking-[0.01em] hover:font-semibold">
              Todo List
            </p>
          </div>
          <div className="flex w-full items-center gap-4">
            <Image
              src={CalendarImage}
              alt="Calendar Image"
              className="-mr-[1px] h-5 w-5"
            />
            <p className="-ml-[2px] mt-[2px] cursor-pointer hover:font-semibold">
              Calendar
            </p>
          </div>
          <div className="flex w-full items-center gap-4">
            <Image
              src={RemindersImage}
              alt="Reminders Image"
              className="h-5  w-[18px]"
            />
            <p className="mt-[2px] cursor-pointer hover:font-semibold">
              Reminders
            </p>
          </div>
          <div className="flex w-full items-center gap-4">
            <Image
              src={PlanningImage}
              alt="Planning Image"
              className="-mr-[2px] h-5 w-5"
            />
            <p className="mt-[2px] cursor-pointer hover:font-semibold">
              Planning
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default FeaturesDropDownDesktop;
