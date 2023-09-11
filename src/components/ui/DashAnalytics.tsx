import React, { useState } from "react";
import { Montserrat, Space_Grotesk } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const spaceGrotesk = Space_Grotesk({
  weight: ["500"],
  subsets: ["latin", "latin-ext"],
});

interface DashAnalyticsProps {
  className: string;
  text?: string;
  number: number;
}

const DashAnalytics = ({
  className,
  text,
  number,
  ...props
}: DashAnalyticsProps) => {
  return (
    <div
      {...props}
      className={`mb-5 flex min-h-min w-52 flex-col space-y-6 rounded-lg border-2 border-blue-300 bg-blue-100 px-3 py-6 ${className}`}
    >
      <p className=" justify-items-start font-medium text-gray-600">{text}</p>
      <span
        className={`justify-items-start align-bottom text-2xl font-semibold text-gray-600 ${spaceGrotesk.className}`}
      >
        {number}
      </span>
    </div>
  );
};

export default DashAnalytics;
