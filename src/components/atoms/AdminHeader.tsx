/* eslint-disable @typescript-eslint/no-empty-interface */
import Image from "next/image";
import React, { type FC } from "react";
import { Montserrat, Space_Grotesk } from "next/font/google";
import AdminIcon from "@src/assets/icons/AdminIcon";
import { useSelector } from "react-redux";
import { RootState } from "@src/utils/services/store";
export interface IAdminHeaderProps {}

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const spaceGrotesk = Space_Grotesk({
  weight: ["500"],
  subsets: ["latin", "latin-ext"],
});

const AdminHeader: FC<IAdminHeaderProps> = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className="flex">
      <div className="w-1/6">
        <div className=" m-w-fit flex h-16 justify-center space-x-1 overflow-clip break-words border-b border-b-gray-200 bg-gray-50 align-middle font-medium text-gray-500">
          <Image
            src="/auth/logo.png"
            alt="Auth side bar"
            width={500}
            height={500}
            className=" my-auto h-7 w-auto break-words bg-gray-500"
            priority
          />
          <h1 className="my-auto flex min-w-fit flex-wrap break-words text-lg font-semibold">
            SEEES UNIBEN
          </h1>
        </div>
      </div>

      {/*HHHHHHHHH*/}
      <div className="w-5/6">
        <div className=" h-16 min-w-min border-b border-b-gray-200">
          <div className="mx-auto flex h-full w-11/12 justify-between ">
            <div
              className={`my-auto text-lg font-normal text-gray-500 ${spaceGrotesk.className}`}
            >
              Hello, {user?.user?.username}
            </div>
            <div className="my-auto flex space-x-1">
              <span className="my-auto text-gray-400 capitalize">{user?.user?.role}</span>
              <AdminIcon className="my-auto h-10 w-auto rounded-full bg-orange-200 pt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
