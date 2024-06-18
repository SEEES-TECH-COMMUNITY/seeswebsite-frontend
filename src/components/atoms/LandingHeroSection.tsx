/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { type FC } from 'react';
import { motion} from 'framer-motion';
import Image from "next/image";
import NutIcon from "@src/assets/icons/NutIcon";

export interface ILandingHeroSectionProps {
}

const LandingHeroSection: FC<ILandingHeroSectionProps> = (props) => {
  return (
    
    <section className="mt-[88px] min-h-[89vh] items-center justify-between gap-x-2 px-5 py-12 sm:flex-col md:flex md:flex-row  md:px-10 md:py-0  lg:px-20">
    <motion.div
      className="mb-5 w-full md:mb-0 lg:w-1/2"
      initial={{ y: -100, opacity: 0.3 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 2.5,
        bounce: 0.4,
        ease: "easein",
      }}
    >
      <h1 className=" mb-3 w-full text-center text-2xl font-black md:w-[90%] md:text-left md:text-4xl md:font-semibold xl:text-5xl">
        Explore Electrical and Electronics Engineering in{" "}
        <span className="  text-blue-900">UNIBEN</span>
      </h1>
      <p className=" mb-3 w-full text-center text-sm font-medium text-gray-700 md:text-left md:text-base lg:text-xl">
        The Official Website of the UNIBEN Chapter of SEEES. Empowering
        Electrical and Electronics Engineering Students: Your Hub for
        Knowledge, Connections, and Opportunities.
      </p>
      <div className="text-center md:text-left">
        <button className="translate mr-4 rounded-md bg-blue-600 px-8 py-2 text-white duration-200 ease-in hover:scale-[1.02] md:mr-8">
          Sign Up
        </button>
        <button className="rounded-md border-2 border-blue-500 px-8 py-2 text-base font-semibold text-blue-600 duration-200 ease-in hover:scale-[1.02]">
          Explore
        </button>
      </div>
      <div className=" hidden items-center justify-start pl-8 pt-4 md:flex">
        <NutIcon width={"60"} height={"60"} rotateDirection={-360} />
        <NutIcon width={"80"} height={"80"} rotateDirection={360} />
        <NutIcon width={"40"} height={"40"} rotateDirection={-360} />
      </div>
    </motion.div>
    <motion.div
      className="flex w-full items-center justify-end lg:w-1/2"
      initial={{ y: 100, opacity: 0.3 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 2.5, bounce: 0.4 }}
    >
      <Image src="/books.avif" alt="Home Image" width={800} height={400} />
    </motion.div>
  </section>
  );
}
export default LandingHeroSection;