import React, { type FC } from "react";

interface ILogoutIcon {
  className?: string;
}

const LogOutIcon: FC<ILogoutIcon> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 15L19.5 10M19.5 10L14.5 5M19.5 10H7.5M7.5 1H6.3C4.61984 1 3.77976 1 3.13803 1.32698C2.57354 1.6146 2.1146 2.07354 1.82698 2.63803C1.5 3.27976 1.5 4.11984 1.5 5.8V14.2C1.5 15.8802 1.5 16.7202 1.82698 17.362C2.1146 17.9265 2.57354 18.3854 3.13803 18.673C3.77976 19 4.61984 19 6.3 19H7.5"
        stroke="#FF5959"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LogOutIcon;
