import React, { useState, type FC, useEffect } from "react";
import DashIcon from "@src/assets/icons/DashIcon";
import UserIcon from "@src/assets/icons/UsersIcon";
import RequestIcon from "@src/assets/icons/RequestIcon";
import AnnounceIcon from "@src/assets/icons/AnnounceIcon";
import ResourceIcon from "@src/assets/icons/ResourceIcon";
import LogOutIcon from "@src/assets/icons/LogoutIcon";
import { useRouter } from "next/router";

const AdminSidebar: FC = () => {
  const router = useRouter();

  const handleClick = (e: string) => {
    router.push(e);
  };

  return (
    <section className="flex h-full max-h-fit min-h-screen w-full flex-col overflow-x-visible bg-gray-50 ">
      <div className=" mt-4 flex h-auto w-full flex-col break-words">
        <div
          onClick={() => {
            handleClick("/admin_pages/dashboard");
          }}
          className={`mt-1 flex w-full space-x-1 p-5  pl-8 text-sm text-gray-500 hover:border-l-4  hover:bg-gray-300`}
        >
          <DashIcon className="my-auto h-4 w-auto " />
          <span className="overflow-clip">Dashboard</span>{" "}
        </div>
        <div
          onClick={() => {
            handleClick("/admin_pages/users");
          }}
          className={`flex w-full space-x-1  p-5 pl-8 text-sm text-gray-500 hover:border-l-4 hover:bg-gray-300`}
        >
          <UserIcon className="my-auto h-4 w-auto" />
          <span>Users</span>
        </div>
        <div
          onClick={() => {
            handleClick("/admin_pages/requests");
          }}
          className={`flex w-full  space-x-1  p-5  pl-8 text-sm text-gray-500  hover:bg-gray-300`}
        >
          <RequestIcon className="my-auto h-4 w-auto" />
          <span className="overflow-clip">Request</span>
        </div>
        <div
          onClick={() => handleClick("/admin_pages/announcements")}
          className={`flex w-full space-x-1 p-5  pl-8 text-sm text-gray-500  hover:border-l-4 hover:bg-gray-300`}
        >
          <AnnounceIcon className="my-auto h-4 w-auto" />
          <span className="overflow-clip">Announcement</span>
        </div>
        <div
          onClick={() => handleClick("/admin_pages/resources")}
          className={`flex w-full space-x-1  p-5   pl-8 text-sm text-gray-500 hover:border-l-4 hover:bg-gray-300`}
        >
          <ResourceIcon className="my-auto h-4 w-auto" />
          <span className="overflow-clip">Resources</span>
        </div>
      </div>
      <div className="mt-auto flex w-full justify-center space-x-2 bg-red-200 p-4 text-red-500">
        <LogOutIcon className="my-auto h-5 w-auto" />
        <span>Logout</span>
      </div>
    </section>
  );
};

export default AdminSidebar;
