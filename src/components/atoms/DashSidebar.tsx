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
    <section className="flex h-full min-h-screen w-full min-w-fit flex-col bg-gray-50 ">
      <div className=" flex h-full space-x-2 border-b border-b-gray-200 py-3 pl-5 font-medium text-gray-500">
        <Image
          src="/auth/logo.png"
          alt="Auth side bar"
          width={500}
          height={500}
          className="my-auto h-5 w-5 bg-gray-500 "
          priority
        />
        <h1>SEEES UNIBEN</h1>
      </div>
      <div className=" mt-8 flex h-full flex-col items-start ">
        <div className="my-auto flex w-full space-x-1 p-5 pl-8 text-sm  text-gray-500">
          <DashIcon className="my-auto h-4 w-4 " />
          <span>Dashboard</span>{" "}
        </div>
        <div className="my-auto flex w-full space-x-1 p-5 pl-8 text-sm text-gray-500">
          <UserIcon className="my-auto h-4 w-4" />
          <span>Users</span>
        </div>
        <div className="my-auto flex w-full space-x-1 p-5 pl-8 text-sm text-gray-500">
          <RequestIcon className="my-auto h-4 w-4" />
          <span>Request</span>
        </div>
        <div className="w-fulltext-sm my-auto flex space-x-1 p-5  pl-8 text-gray-500">
          <AnnounceIcon className="my-auto h-4 w-4" />
          <span>Announcement</span>
        </div>
        <div className="my-auto flex w-full space-x-1  p-5 pl-8 text-sm text-gray-500">
          <ResourceIcon className="my-auto h-4 w-4" />
          <span>Resources</span>
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


