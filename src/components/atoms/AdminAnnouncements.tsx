import { useGetAllAnnouncementsQuery } from "@src/utils/services/ApiService";
import React, { type FC } from "react";
import { AnnouncementCard } from "../molecules";
import { useAppSelector } from "@src/utils/hooks/useRedux";

const AdminAnnouncement: FC = () => {
  const { data } = useGetAllAnnouncementsQuery(undefined);
  const { user } = useAppSelector((state) => state.user);
  const showCreate = user?.role === "admin";
  return (
    <div>
      {" "}
      {
        showCreate&& (
          <div className="flex justify-end">
            <button className="btn btn-primary">Create</button>
          </div>
        )
      }
      <div className="grid lg:grid-cols-3 p-4 gap-4 cursor-pointer">
        {data?.map((announcement) => (
          <AnnouncementCard {...announcement} key={announcement._id} />
        ))}
      </div>
    </div>
  );
};

export default AdminAnnouncement;
