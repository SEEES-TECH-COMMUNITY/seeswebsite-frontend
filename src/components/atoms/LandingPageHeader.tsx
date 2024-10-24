/* eslint-disable @typescript-eslint/no-emp`      ``    ty-interface */
import React, { useState, type FC } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import { AnimatePresence, motion } from "framer-motion";

export interface ILandingPageHeaderProps {}

const LandingPageHeader: FC<ILandingPageHeaderProps> = (props) => {
  const [sideBarMenu, setSideBarMenu] = useState<boolean>(false);

  const sideBarVariants = {
    initial: {
      scaleY: 0,
      staggerChildren: 0.9,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
        staggerChildren: 0.09,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 1],
        staggerChildren: 0.09,
      },
    },
  };

  const sideBarLinkVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
    },
    open: {
      y: "0",
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section className="">
      <div className="fixed left-0 top-0 z-10 flex w-screen items-center justify-between border-[1px] border-b-gray-300 bg-white px-4 py-4 shadow-sm md:px-8 lg:px-16">
        <div className="flex items-center">
          <Image
            src="/auth/logo.png"
            alt="SEEES Logo"
            width={500}
            height={500}
            className=" my-auto h-10 w-auto break-words rounded-full"
            priority
          />
          <h1 className="my-auto ml-1 flex min-w-fit flex-wrap break-words text-2xl font-semibold text-blue-600">
            SEEES UNIBEN
          </h1>
        </div>
        <nav className="hidden items-center gap-x-6 text-lg font-semibold lg:flex">
          <div className="cursor-pointer text-[#001242] hover:text-blue-500">
            Home
          </div>
          <div className="cursor-pointer text-[#001242] hover:text-blue-500">
            About
          </div>
          <div className="cursor-pointer text-[#001242] hover:text-blue-500">
            Tools
          </div>
          <div className="cursor-pointer text-[#001242] hover:text-blue-500">
            E-Libary
          </div>
          <div className="cursor-pointer text-[#001242] hover:text-blue-500">
            Contact
          </div>
          <div className="cursor-pointer text-[#001242] hover:text-blue-500">
            Election
          </div>
        </nav>
        <div className="hidden items-center gap-x-6 text-lg font-semibold lg:flex">
          <button className="text-[#001242] hover:text-blue-500">Login</button>
          <button className="translate cursor-pointer rounded-lg bg-blue-500 px-6 py-[6px] font-medium text-white duration-200 ease-in hover:scale-105">
            Sign Up
          </button>
        </div>
        <div className="block text-black lg:hidden">
          <FiMenu
            size="28px"
            className={`cursor-pointer ${sideBarMenu ? "hidden" : "block"}`}
            onClick={() => setSideBarMenu(true)}
          />
        </div>
      </div>
      <AnimatePresence>
        {sideBarMenu && (
          <motion.nav
            variants={sideBarVariants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="fixed z-20 flex h-screen w-full origin-top flex-col bg-white pl-8 pt-6 text-xl font-semibold md:text-2xl"
          >
            <div className="flex items-center justify-end pr-0 md:pr-4">
              <LiaTimesSolid
                size="28px"
                className={`${
                  sideBarMenu ? "block" : "hidden"
                } cursor-pointer transition duration-300 ease-in`}
                onClick={() => setSideBarMenu(false)}
              />
            </div>
            <div className="mb-4 w-fit cursor-pointer py-3 text-[#001242] hover:text-blue-500">
              Home
            </div>
            <div className="mb-4 w-fit cursor-pointer py-3 text-[#001242] hover:text-blue-500">
              About
            </div>
            <div className="mb-4 w-fit cursor-pointer py-3 text-[#001242] hover:text-blue-500">
              Tools
            </div>
            <div className="mb-4 w-fit cursor-pointer py-3 text-[#001242] hover:text-blue-500">
              E-Libary
            </div>
            <div className="mb-4 w-fit cursor-pointer py-3 text-[#001242] hover:text-blue-500">
              Contact
            </div>
            <div className="mt-2 flex flex-col items-start pr-4 text-lg font-semibold">
              <button className="mb-4 w-32 rounded-lg border-[1px] border-blue-600 px-6 py-[8px] text-[#001242] duration-200 ease-in hover:scale-[1.02]">
                Login
              </button>
              <button className="w-32 cursor-pointer rounded-lg bg-blue-500 px-6 py-[8px] font-medium text-white duration-200 ease-in hover:scale-[1.02]">
                Sign Up
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </section>
  );
};
export default LandingPageHeader;
