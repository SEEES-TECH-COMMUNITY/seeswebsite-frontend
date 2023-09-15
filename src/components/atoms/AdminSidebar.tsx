import React, { useState, type FC, useEffect } from "react";
import DashIcon from "@src/assets/icons/DashIcon";
import UserIcon from "@src/assets/icons/UsersIcon";
import RequestIcon from "@src/assets/icons/RequestIcon";
import AnnounceIcon from "@src/assets/icons/AnnounceIcon";
import ResourceIcon from "@src/assets/icons/ResourceIcon";
import LogOutIcon from "@src/assets/icons/LogoutIcon";
import { useRouter } from "next/router";
import Link from "next/link";

const AdminSidebar: FC = () => {
  const { pathname } = useRouter();
  const paths = [
    {
      path: "",
      name: "Dashboard",
      Icon: DashIcon,
    },
    {
      path: "/users",
      name: "Users",
      Icon: UserIcon,
    },
    {
      path: "/requests",
      name: "Requests",
      Icon: RequestIcon,
    },
    {
      path: "/announcements",
      name: "Announcements",
      Icon: AnnounceIcon,
    },
    {
      path: "/resources",
      name: "Resources",
      Icon: ResourceIcon,
    },
  ];

  return (
    <section className="flex h-full min-h-[90vh] justify-between w-full flex-col overflow-x-visible bg-gray-50 ">
      <div className="pt-4 flex h-auto w-full flex-col break-words space-y-4">
        {
          paths.map(({ path, name, Icon }) => (
            <Link key={`/dashboard${path}`} href={`/dashboard${path}`} >
              <div
                className="flex w-full space-x-2 p-5  pl-8 text-sm text-gray-500 border-l-4 border-l-transparent stroke-[#7E7E7E] hover:stroke-blue-600 hover:border-l-blue-600 hover:text-blue-600  hover:bg-blue-600/[0.15] data-true:bg-blue-600/[0.15] transition-colors ease-in duration-500 items-center data-true:stroke-blue-600 data-true:border-l-blue-600 data-true:text-blue-600"
                data-true={pathname === `/dashboard${path}` || (pathname?.includes(path) && path !== '')}
              >
                <Icon className="h-6 w-auto stroke-inherit" />
                <span className="overflow-clip">{name}</span>{" "}
              </div>
            </Link>
          ))
        }
      </div>
      <div className="flex w-full justify-center space-x-2 bg-red-200 p-4 text-red-500">
        <LogOutIcon className="my-auto h-5 w-auto" />
        <span>Logout</span>
      </div>
    </section>
  );
};

export default AdminSidebar;
