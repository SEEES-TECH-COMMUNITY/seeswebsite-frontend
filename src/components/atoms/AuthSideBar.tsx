/* eslint-disable @typescript-eslint/no-empty-interface */
import Image from "next/image";
import React, { type FC } from 'react';
import {Montserrat, Space_Grotesk} from "next/font/google"
export interface IAuthSideBarProps {
}
const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin", "latin-ext"]
})
const spaceGrotesk = Space_Grotesk({
  weight: ["600"],
  subsets: ["latin", "latin-ext"]
})
const AuthSideBar: FC<IAuthSideBarProps> = () => {
  return (
    <section className="w-full min-h-screen h-full bg-grey-400 px-12 py-8">
      <div className="flex space-x-2 items-center">
        <Image
          src="/auth/logo.png"
          alt="Auth side bar"
          width={500}
          height={500}
          className="w-14 h-14"
          priority
        />
        <div className="flex flex-col space-y-0.5">
          <h2 className={`text-2xl font-semibold text-blue-600 tracking-[-0.5px] ${spaceGrotesk.className}`}>SEEES</h2>
          <p className={`text-grey-800 text-sm font-light tracking-[-0.16px] ${montserrat.className}`}>
            Society Of Electrical Electronics <br />
            Engineering Students
          </p>
        </div>
      </div>
    </section>
  );
}
export default AuthSideBar;