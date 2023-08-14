import React, { useState } from "react";
import DashIcon from "@src/assets/icons/DashIcon";
import UserIcon from "@src/assets/icons/UsersIcon";
import RequestIcon from "@src/assets/icons/RequestIcon";
import AnnounceIcon from "@src/assets/icons/AnnounceIcon";
import ResourceIcon from "@src/assets/icons/ResourceIcon";
import LogOutIcon from "@src/assets/icons/LogoutIcon";
import Image from "next/image";

const DashSidebar = () => {
  return (
    <section className="flex h-full max-h-fit min-h-screen w-full flex-col overflow-x-visible bg-gray-50 ">
      <div className=" m-w-fit px-auto flex h-16 justify-start space-x-1 overflow-clip break-words border-b border-b-gray-200  font-medium text-gray-500">
        <Image
          src="/auth/logo.png"
          alt="Auth side bar"
          width={500}
          height={500}
          className=" my-auto h-7 w-7 break-words bg-gray-500 "
          priority
        />
        <h1 className="my-auto flex min-w-fit flex-wrap break-words text-sm font-semibold">
          SEEES UNIBEN
        </h1>
      </div>
      <div className=" mt-4 flex h-auto w-full flex-col  break-words">
        <div className="mt-1 flex w-full space-x-1 p-5  pl-8 text-sm text-gray-700 hover:border-l-4  hover:border-blue-400  hover:bg-blue-100">
          <DashIcon className="my-auto h-4 w-4 " />
          <span className="overflow-clip">Dashboard</span>{" "}
        </div>
        <div className="flex w-full space-x-1  p-5 pl-8 text-sm text-gray-700 hover:border-l-4 hover:border-blue-400 hover:bg-blue-100">
          <UserIcon className="my-auto h-4 w-4" />
          <span>Users</span>
        </div>
        <div className="flex w-full space-x-1  p-5  pl-8 text-sm text-gray-700 hover:border-l-4 hover:border-blue-400 hover:bg-blue-100">
          <RequestIcon className="my-auto h-4 w-4" />
          <span className="overflow-clip">Request</span>
        </div>
        <div className="flex w-full space-x-1 p-5  pl-8  text-sm  text-gray-700 hover:border-l-4 hover:border-blue-400 hover:bg-blue-100">
          <AnnounceIcon className="my-auto h-4 w-4" />
          <span className="overflow-clip">Announcement</span>
        </div>
        <div className="flex w-full space-x-1  p-5   pl-8 text-sm text-gray-700 hover:border-l-4 hover:border-blue-400 hover:bg-blue-100">
          <ResourceIcon className="my-auto h-4 w-4" />
          <span className="overflow-clip">Resources</span>
        </div>
      </div>
      <div className="mt-auto flex w-full justify-center space-x-2 bg-red-200 p-4 text-red-500">
        <LogOutIcon className="my-auto h-5 w-5" />
        <span>Logout</span>
      </div>
    </section>
  );
};

export default DashSidebar;
