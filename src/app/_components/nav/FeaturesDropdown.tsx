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
        featuresOpen ? "max-h-40" : "max-h-0 invisible"
      }  transition-all duration-500 ease-in-out overflow-hidden w-full`}
    >
      <div className="flex flex-col py-3 px-5 gap-2">
        <div className="flex gap-3 items-center">
          <Image src={TodoImage} alt="Todo Image" />
          <p className="mt-1">Todo List</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={CalendarImage} alt="Calendar Image" />
          <p className="mt-1">Calendar</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={RemindersImage} alt="Reminders Image" />
          <p className="mt-1">Reminders</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={PlanningImage} alt="Planning Image" />
          <p className="mt-1">Planning</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDropdown;
