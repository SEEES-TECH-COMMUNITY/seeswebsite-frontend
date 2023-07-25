import React, { FormEvent, useState } from "react";
import type { NextPage } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import useMultistepForm from "@src/utils/hooks/useMultistepForm";
import UserPersonalForm from "@src/components/atom/UserPersonalForm";
import UserAcademicForm from "@src/components/atom/UserAcademicForm";
import UserContactForm from "@src/components/atom/UserContactForm";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const spaceGrotesk = Space_Grotesk({
  weight: ["500"],
  subsets: ["latin", "latin-ext"],
});


const Page: NextPage = () => {
  const { steps, currentStepIndex, step, prevStep, nextStep} = useMultistepForm([<UserPersonalForm />, <UserAcademicForm />, <UserContactForm /> ]);


  function handleSubmit(e: FormEvent){
    e.preventDefault();
    nextStep();
  }

  return (
    <section className={`flex justify-center ${montserrat.className}`}>
      <div className="w-[580px] pt-14">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className={`text-center text-4xl ${spaceGrotesk.className}`}>
              Complete Account Setup
            </h1>
            <p
              className={`mt-2 w-3/4 text-center text-sm font-light tracking-[-0.16px] text-grey-700`}
            >
              We need some more information to set-up your account correctly.
            </p>
          </div>
          <div></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
              <div className="flex items-center justify-center gap-x-6 mb-12 mt-6">
                <div className="flex items-center justify-center flex-col">
                  <div className={`text-2xl font-medium h-10 w-10 flex items-center justify-center bg-grey-700 rounded-full text-white ${ currentStepIndex == 0 && 'bg-blue-600'}`}>1</div>
                  <p className={`text-grey-700 ${ currentStepIndex == 0 && 'text-blue-600'}`}>Personal</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <div className={`text-2xl font-medium h-10 w-10 flex items-center justify-center bg-grey-700 rounded-full text-white ${ currentStepIndex === 1 && 'bg-blue-600'}`}>2</div>
                  <p className=" text-grey-700">Academic</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <div className="text-2xl font-medium h-10 w-10 flex items-center justify-center bg-grey-700 rounded-full text-white">3</div>
                  <p className=" text-grey-700">Contact</p>
                </div>
              </div>
              <div>{step}</div>
              <div className="items-center justify-center gap-4 flex mt-10">
                  <button type="button" className={` border-2 border-blue-500 px-12 py-2 rounded-xl text-blue-500 ${ currentStepIndex === 0 && 'hidden'} hover:scale-105 transition duration-150 ease-in-out`} onClick={prevStep}>Back</button>
                  <button type="submit" className="px-12 py-2 rounded-xl bg-blue-500 text-white hover:scale-105 transition duration-150 ease-in-out">{ currentStepIndex >= steps.length - 1 ? 'Submit' : 'Next'}</button>
              </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Page;
