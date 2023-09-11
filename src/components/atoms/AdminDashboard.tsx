import React, { type FC } from "react";
import { Montserrat, Space_Grotesk } from "next/font/google";
import AnalyticsIcon from "@src/assets/icons/AnalyticsIcon";
import AnnounceIcon from "@src/assets/icons/AnnounceIcon";
import DashAnalytics from "../ui/DashAnalytics";

export interface IAdminDashboardProps {}

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const spaceGrotesk = Space_Grotesk({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});

const AdminDashboard: FC<IAdminDashboardProps> = () => {
  return (
    <div className="flex min-h-screen w-full flex-col space-y-6">
      <div className="flew-wrap mx-auto flex  w-11/12 flex-col">
        <div className="my-auto mt-6 flex space-x-1">
          <AnalyticsIcon className=" h-6 w-auto" />
          <h2 className=" mb-3 text-2xl text-gray-600 ">Analytics</h2>
        </div>

        <div className="flex flex-wrap justify-between ">
          <DashAnalytics
            number={5}
            text="New Request"
            className={" border-blue-300 bg-blue-100"}
          />
          <DashAnalytics
            number={102}
            text="Total Number Of users"
            className={"border-orange-300 bg-orange-100"}
          />
          <DashAnalytics
            number={143}
            text="Number Of Resources"
            className={"border-green-300 bg-green-100"}
          />
          <DashAnalytics
            number={13}
            text="Number of Requests"
            className={"border-grey-700 bg-white"}
          />
        </div>
        <div className="my-auto mt-6 flex justify-between text-gray-500 ">
          <div className="flex">
            <AnnounceIcon className="my-auto h-6 w-auto" />
            <h2
              className={`my-auto text-2xl text-gray-600  ${spaceGrotesk.className}`}
            >
              Announcements
            </h2>
          </div>
          <span>view all</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
