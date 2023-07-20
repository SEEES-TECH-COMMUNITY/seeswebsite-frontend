import React, { useState} from "react";
import type { NextPage } from "next";
import { AuthSideBar } from "@src/components";
import { Montserrat, Space_Grotesk } from "next/font/google";

const montserrat = Montserrat({
    weight: ["400"],
    subsets: ["latin", "latin-ext"],
  });
  const spaceGrotesk = Space_Grotesk({
    weight: ["500"],
    subsets: ["latin", "latin-ext"],
  });

  const Page: NextPage = () => {

    return(
        <section className={`flex flex-row ${montserrat.className}`}>
            <div className="w-5/12 basis-5/12 block">
                <AuthSideBar />
            </div>           
            <div className="flex w-7/12 basis-7/12 items-start justify-between px-12">
                <div className="flex min-h-screen w-3/4 flex-col items-center justify-center space-y-6 px-12 pt-24">
                    <form className="flex w-full flex-col space-y-6">
                        <div className="flex flex-col space-y-3">
                            <h1 className={`text-4xl font-medium tracking-[-0.5px] text-black ${spaceGrotesk.className}`}>
                                Verify Email
                            </h1>
                            <p className={`text-sm font-light tracking-[-0.16px] text-grey-700`}>
                                Please Enter the OTP Code sent to your email
                            </p>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <input type="password" className="w-full py-3 rounded-lg border-2 h-fit placeholder-blue-placeholder-600 text-blue-placeholder-600 text-bold border-transparent bg-grey-600 pl-4 pr-12 font-sans text-md placeholder-opacity-70 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ease-in duration-300 transition-colors data-true:border-red-500/75" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
  }


  export default Page;