import React, { type FC } from "react";
import { twMerge } from "tailwind-merge";

interface IUserIcon {
  className?: string;
}

const UsersIcon: FC<IUserIcon> = ({ className, ...props }) => {
  return (
    <svg
      {...props}
      className={twMerge("h-6 w-auto stroke-[#7E7E7E]", className)}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.165 21.2622V19.2622C22.165 17.3984 20.8903 15.8323 19.165 15.3882M15.665 3.55297C17.131 4.14635 18.165 5.58352 18.165 7.26221C18.165 8.9409 17.131 10.3781 15.665 10.9714M17.165 21.2622C17.165 19.3984 17.165 18.4666 16.8606 17.7315C16.4546 16.7514 15.6759 15.9727 14.6958 15.5667C13.9607 15.2622 13.0288 15.2622 11.165 15.2622H8.16504C6.30127 15.2622 5.36939 15.2622 4.63431 15.5667C3.65419 15.9727 2.8755 16.7514 2.46952 17.7315C2.16504 18.4666 2.16504 19.3984 2.16504 21.2622M13.665 7.26221C13.665 9.47135 11.8742 11.2622 9.66504 11.2622C7.4559 11.2622 5.66504 9.47135 5.66504 7.26221C5.66504 5.05307 7.4559 3.26221 9.66504 3.26221C11.8742 3.26221 13.665 5.05307 13.665 7.26221Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UsersIcon;
