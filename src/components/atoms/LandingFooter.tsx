/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { type FC } from 'react';
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

export interface ILandingFooterProps {
}

const LandingFooter: FC<ILandingFooterProps> = () => {
  return (
    <section className="bg-[#001242] px-5 pb-6 pt-16 md:px-8">
        <div className="flex flex-col justify-between gap-6 text-white md:flex md:flex-row">
          <div className="flex w-full md:w-1/3 flex-col gap-y-1">
            <h1 className="text-xl">SEEES UNIBEN</h1>
            <p className=" text-gray-500">
              Empowering electrical engineering students through a comprehensive
              and dynamic educational experience.
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <h1 className="text-xl">IMPORTANT LINKS</h1>
            <div className=" text-gray-500">
              <ul className="">
                <li className=" w-fit cursor-pointer hover:text-blue-500">
                  About
                </li>
                <li className=" w-fit cursor-pointer hover:text-blue-500">
                  Admission
                </li>
                <li className=" w-fit cursor-pointer hover:text-blue-500">
                  Learning Resources
                </li>
                <li className=" w-fit cursor-pointer hover:text-blue-500">
                  News
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <h1 className="text-xl">CONTACTS INFO</h1>
            <p className=" text-gray-500">
              Get notified whenever we post learning material and news. We will
              also notify you from time to time when we make updates to serve
              you better.
            </p>
            <div>
              <ul>
                <li className="flex cursor-pointer items-center gap-x-1 hover:text-blue-500">
                  <HiOutlineMail className="text-xl" />
                  <a href="">seees@uniben.edu</a>
                </li>
                <li className=" flex cursor-pointer items-center gap-x-1 hover:text-blue-500">
                  <AiOutlineLinkedin className="text-xl" />
                  <a
                    href="https://www.linkedin.com/company/seees-uniben/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()}, SEEES UNIBEN </p>
        </div>
      </section>
  );
}
export default LandingFooter;