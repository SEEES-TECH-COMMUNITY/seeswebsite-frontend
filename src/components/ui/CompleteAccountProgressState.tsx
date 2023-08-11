/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useState, type FC } from 'react';
import { Montserrat, Space_Grotesk } from "next/font/google";

export interface ICompleteAccountProgressStateProps {
  totalSteps: number;
  currentStep: number;
}


const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const spaceGrotesk = Space_Grotesk({
  weight: ["500"],
  subsets: ["latin", "latin-ext"],
});

const CompleteAccountProgressState: FC<ICompleteAccountProgressStateProps> = ({ totalSteps, currentStep }) => {
 

  return (
    <section className={`${montserrat.className}`}>
      <div className="mb-12 mt-6 flex items-center justify-center gap-x-8">
        <div className="flex flex-col items-center justify-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full text-2xl font-medium text-white ${ currentStep === 1 ? 'bg-blue-600' : 'bg-grey-700'} `}
          >
            1
          </div>
          <p className={` ${ currentStep === 1 ? 'text-blue-600' : 'text-grey-700'}`}>Personal</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full text-2xl font-medium text-white ${ currentStep === 2 ? 'bg-blue-600' : 'bg-grey-700'} `}
          >
            2
          </div>
          <p className={` ${ currentStep === 2 ? 'text-blue-600' : 'text-grey-700'}`}>Academic</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div  className={`flex h-10 w-10 items-center justify-center rounded-full text-2xl font-medium text-white ${ currentStep === 3 ? 'bg-blue-600' : 'bg-grey-700'} `}>
            3
          </div>
          <p className={` ${ currentStep === 3 ? 'text-blue-600' : 'text-grey-700'}`}>Contact</p>
        </div>
      </div>
    </section>
  );
}
export default CompleteAccountProgressState;

