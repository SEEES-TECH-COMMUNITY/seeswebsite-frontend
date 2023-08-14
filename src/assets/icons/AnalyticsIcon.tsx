import React, { type FC } from "react";

interface IAnalyticsIcon {
  className?: string;
}

const AnalyticsIcon: FC<IAnalyticsIcon> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6667 17.8333V23.1667M21.3333 15.1667V23.1667M16 9.83333V23.1667M10.4 28.5H21.6C23.8402 28.5 24.9603 28.5 25.816 28.064C26.5686 27.6805 27.1805 27.0686 27.564 26.316C28 25.4603 28 24.3402 28 22.1V10.9C28 8.65979 28 7.53969 27.564 6.68404C27.1805 5.93139 26.5686 5.31947 25.816 4.93597C24.9603 4.5 23.8402 4.5 21.6 4.5L10.4 4.5C8.15979 4.5 7.03969 4.5 6.18404 4.93597C5.43139 5.31947 4.81947 5.93139 4.43597 6.68404C4 7.53969 4 8.65979 4 10.9L4 22.1C4 24.3402 4 25.4603 4.43597 26.316C4.81947 27.0686 5.43139 27.6805 6.18404 28.064C7.03969 28.5 8.15979 28.5 10.4 28.5Z"
        stroke="#7E7E7E"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AnalyticsIcon;
