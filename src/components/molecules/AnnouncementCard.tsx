/* eslint-disable @typescript-eslint/no-empty-interface */
import Link from "next/link";
import React, { type FC } from "react";

export interface IAnnouncementCardProps {
  _id: string;
  author: string;
  body: string;
  createdAt: string;
  topic: string;
  updatedAt: string;
}

const AnnouncementCard: FC<IAnnouncementCardProps> = (props) => {
  return (
    <Link
      href={`/dashboard/announcements/${props._id}`}
      className="flex flex-col space-y-1 rounded-md p-4 shadow-xl"
    >
      <h1 className="text-2xl text-blue-600">{props.topic}</h1>
      <p className="">{props.author}</p>
    </Link>
  );
};
export default AnnouncementCard;
