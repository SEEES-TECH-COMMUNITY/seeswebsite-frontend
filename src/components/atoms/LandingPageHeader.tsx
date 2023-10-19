/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useState, type FC } from 'react';
import Image from "next/image";
import { FiMenu } from 'react-icons/fi';
import { LiaTimesSolid } from 'react-icons/lia';
import { AnimatePresence, motion } from 'framer-motion';


export interface ILandingPageHeaderProps {
}

const LandingPageHeader: FC<ILandingPageHeaderProps> = (props) => {

  const [sideBarMenu, setSideBarMenu ] = useState<boolean>(false);

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
      }
    }
  };

  const sideBarLinkVariants = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.5,
      }
    },
    open: {
      y: '0',
      transition: {
        duration: 0.7,
      }
    }
  }


  return (
    <section className=''>
      <div className="flex items-center justify-between w-screen border-[1px] border-b-gray-300 shadow-sm py-4 px-4 md:px-8 lg:px-16 fixed top-0 left-0 z-10 bg-white">
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
        <nav className="hidden lg:flex items-center gap-x-8 text-lg font-semibold">
          <div className="text-[#001242] cursor-pointer hover:text-blue-500">Home</div>
          <div className="text-[#001242] cursor-pointer hover:text-blue-500">About</div>
          <div className="text-[#001242] cursor-pointer hover:text-blue-500">Tools</div>
          <div className="text-[#001242] cursor-pointer hover:text-blue-500">E-Libary</div>
          <div className="text-[#001242] cursor-pointer hover:text-blue-500">Contact</div>
        </nav>
        <div className="hidden lg:flex items-center gap-x-6 text-lg font-semibold">
          <button className="text-[#001242] hover:text-blue-500">Login</button>
          <button className="bg-blue-500 text-white font-medium px-6 py-[6px] rounded-lg cursor-pointer hover:scale-105 translate duration-200 ease-in">Sign Up</button>
        </div>
        <div className='text-black block lg:hidden'>
          <FiMenu size='28px' className={`cursor-pointer ${ sideBarMenu ? 'hidden' : 'block'}`} onClick={ () => setSideBarMenu(true)}/>
        </div>
      </div>
      <AnimatePresence>
        { sideBarMenu && (
            <motion.nav variants={sideBarVariants} animate='animate' initial='initial' exit='exit' className="flex flex-col font-semibold fixed z-20 bg-white w-full h-screen pl-8 pt-6 text-xl md:text-2xl origin-top">
            <div className='flex items-center justify-end pr-0 md:pr-4'>
              <LiaTimesSolid size='28px' className={`${ sideBarMenu ? 'block' : 'hidden' } cursor-pointer transition duration-300 ease-in`} onClick={ () => setSideBarMenu(false)}/>
            </div>
            <div className="text-[#001242] cursor-pointer hover:text-blue-500 w-fit mb-4 py-3">Home</div>
            <div className="text-[#001242] cursor-pointer hover:text-blue-500 w-fit mb-4 py-3">About</div>
            <div className="text-[#001242] cursor-pointer hover:text-blue-500 w-fit mb-4 py-3">Tools</div>
            <div className="text-[#001242] cursor-pointer hover:text-blue-500 w-fit mb-4 py-3">E-Libary</div>
            <div className="text-[#001242] cursor-pointer hover:text-blue-500 w-fit mb-4 py-3">Contact</div>
            <div className="flex flex-col items-start pr-4 text-lg font-semibold mt-2">
              <button className="text-[#001242] border-[1px] border-blue-600 mb-4 px-6 py-[8px] hover:scale-[1.02] w-32 rounded-lg duration-200 ease-in">Login</button>
              <button className="bg-blue-500 text-white font-medium px-6 py-[8px] w-32 rounded-lg cursor-pointer hover:scale-[1.02] duration-200 ease-in">Sign Up</button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </section>
  );
}
export default LandingPageHeader;