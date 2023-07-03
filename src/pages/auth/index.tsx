import React from "react";
import type { NextPage } from "next";
import AuthSideBar from "@src/components/atoms/AuthSideBar";

const Page: NextPage = () => {
  return (
    <div className="w-5/12">
      <AuthSideBar />
    </div>
  );
};
export default Page;
