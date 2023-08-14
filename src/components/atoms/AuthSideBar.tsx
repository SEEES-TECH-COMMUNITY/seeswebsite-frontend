/* eslint-disable @typescript-eslint/no-empty-interface */
import Image from "next/image";
import React, { type FC } from "react";
import { Montserrat, Space_Grotesk } from "next/font/google";
export interface IAuthSideBarProps {}
const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const spaceGrotesk = Space_Grotesk({
  weight: ["600"],
  subsets: ["latin", "latin-ext"],
});
const AuthSideBar: FC<IAuthSideBarProps> = () => {
  return (
    <section className="h-full min-h-screen w-full bg-grey-400 px-12 py-8">
      <div className="flex items-center space-x-2">
        <Image
          src="/auth/logo.png"
          alt="Auth side bar"
          width={500}
          height={500}
          className="h-14 w-14"
          priority
        />
        <div className="flex flex-col space-y-0.5">
          <h2
            className={`text-2xl font-semibold tracking-[-0.5px] text-blue-600 ${spaceGrotesk.className}`}
          >
            SEEES
          </h2>
          <p
            className={`text-grey-800 text-sm font-light tracking-[-0.16px] ${montserrat.className}`}
          >
            Society Of Electrical Electronics <br />
            Engineering Students
          </p>
        </div>
      </div>
    </section>
  );
};
export default AuthSideBar;
