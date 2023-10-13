"use client";

import React, { useState } from "react";
import TodoImage from "../../../../public/images/icon-todo.svg";
import CalendarImage from "../../../../public/images/icon-calendar.svg";
import RemindersImage from "../../../../public/images/icon-reminders.svg";
import PlanningImage from "../../../../public/images/icon-planning.svg";
import Image from "next/image";
import { cn } from "@/app/utils";

type FeaturesDropdownProps = {
  featuresOpen: boolean;
};

const FeaturesDropdown = ({ featuresOpen }: FeaturesDropdownProps) => {
  return (
    <div
      className={`${
        featuresOpen ? "max-h-48" : "max-h-0 invisible"
      }  transition-all duration-500 ease-in-out overflow-hidden w-full`}
    >
      <div className="flex flex-col pt-6 pb-[10px] pl-6  gap-4 w-full">
        <div className="flex gap-4 items-center w-full">
          <Image src={TodoImage} alt="Todo Image" className="h-5 w-[18px]" />
          <p className="mt-[2px] tracking-[0.01em] hover:font-semibold cursor-pointer">
            Todo List
          </p>
        </div>
        <div className="flex gap-4 items-center w-full">
          <Image
            src={CalendarImage}
            alt="Calendar Image"
            className="h-5 w-5 -mr-[1px]"
          />
          <p className="mt-[2px] -ml-[2px] hover:font-semibold cursor-pointer">
            Calendar
          </p>
        </div>
        <div className="flex gap-4 items-center w-full">
          <Image
            src={RemindersImage}
            alt="Reminders Image"
            className="h-5  w-[18px]"
          />
          <p className="mt-[2px] hover:font-semibold cursor-pointer">
            Reminders
          </p>
        </div>
        <div className="flex gap-4 items-center w-full">
          <Image
            src={PlanningImage}
            alt="Planning Image"
            className="h-5 w-5 -mr-[2px]"
          />
          <p className="mt-[2px] hover:font-semibold cursor-pointer">
            Planning
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDropdown;
