import React, { useState, type FC } from "react";
import UsersIcon from "@src/assets/icons/UsersIcon";

const AdminUser: FC = () => {
  return (
    <div className="mx-auto mt-8 w-11/12">
      <div className="flex">
        <UsersIcon className="h-6 w-6" />
        <span>Users</span>
      </div>
      <div className="mt-4 flex w-full justify-between">
        <input
          placeholder="search"
          type="text"
          className="text-bold h-fit w-[70%] rounded-lg border-2 border-transparent bg-grey-600 py-3 pl-10 pr-12 font-sans text-xs text-blue-placeholder-600 placeholder-blue-placeholder-600 placeholder-opacity-70 transition-colors duration-300 ease-in focus:border-blue-500 focus:outline-none focus:ring-blue-500 data-true:border-red-500/75"
        />
        <div className="m-auto h-auto w-[10%] rounded-lg bg-grey-600 p-2">
          <span></span>
          <span>Filter</span>
        </div>
        <div className="h-auto w-[10%] rounded-lg bg-blue-600"></div>
      </div>
    </div>
  );
};

export default AdminUser;
