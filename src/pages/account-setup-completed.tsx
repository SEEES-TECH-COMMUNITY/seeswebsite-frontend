import React from "react";
import type { NextPage } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import { Button } from "@src/components";



const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const spaceGrotesk = Space_Grotesk({
  weight: ["500"],
  subsets: ["latin", "latin-ext"],
});

const Page: NextPage = () => {
  return (
    <section className={`${montserrat.className}`}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className={`text-center text-4xl ${spaceGrotesk.className}`}>
          Account Setup Complete
          </h1>
          <p
            className={`mt-2 w-3/4 text-center text-sm font-light tracking-[-0.16px] text-grey-700 ${montserrat.className}`}
          >
            Thank you for completing your account.
          </p>
          <Button text="Go To Dashboard" className="mt-8 text-base bg-blue-500 text-white hover:scale-105 transition duration-150 ease-in-out w-[240px] rounded-xl" />
        </div>
      </div>
    </section>
  );
};
export default Page;
