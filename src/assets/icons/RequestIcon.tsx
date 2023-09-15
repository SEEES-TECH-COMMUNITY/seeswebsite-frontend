import React, { type FC } from "react";
import { twMerge } from "tailwind-merge";

interface IRequestIcon {
  className?: string;
}

const RequestIcon: FC<IRequestIcon> = ({ className, ...props }) => {
  return (
    <svg
      {...props}
      className={twMerge("h-6 w-auto stroke-[#7E7E7E]", className)}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.165 15.9365H7.66504C6.26948 15.9365 5.57169 15.9365 5.0039 16.1088C3.72549 16.4966 2.72508 17.497 2.33728 18.7754C2.16504 19.3432 2.16504 20.041 2.16504 21.4365M19.165 21.4365V15.4365M16.165 18.4365H22.165M14.665 7.93652C14.665 10.4218 12.6503 12.4365 10.165 12.4365C7.67976 12.4365 5.66504 10.4218 5.66504 7.93652C5.66504 5.45124 7.67976 3.43652 10.165 3.43652C12.6503 3.43652 14.665 5.45124 14.665 7.93652Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RequestIcon;
