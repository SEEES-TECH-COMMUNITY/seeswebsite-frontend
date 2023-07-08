import React from "react";
import type { NextPage } from "next";
import { PasswordInput, AuthSideBar, TextInput, Button } from "@src/components";
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
  return (
    <section className={`flex ${montserrat.className}`}>
      <div className="w-5/12 basis-5/12">
        <AuthSideBar />
      </div>
      <div className="flex w-7/12 basis-7/12 items-start justify-between px-12 ">
        <div className="flex min-h-screen w-3/4 flex-col items-center justify-center space-y-6 px-12 pt-24">
          <form className="flex w-full flex-col space-y-6">
            <div className="flex flex-col space-y-3">
              <h1
                className={`text-4xl font-medium tracking-[-0.5px] text-black ${spaceGrotesk.className}`}
              >
                Welcome Back
              </h1>
              <p
                className={`text-sm font-light tracking-[-0.16px] text-grey-700`}
              >
                Continue your academic quest in ease with SEEES
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <TextInput type="email" placeholder="Email" />
              <PasswordInput />
            <h2 className="float-right ml-auto w-fit text-xs font-normal text-blue-600">
              Forgot Password ?
            </h2>
            </div>
            <Button text="Login" />
          </form>
        </div>
      </div>
    </section>
  );
};
export default Page;
