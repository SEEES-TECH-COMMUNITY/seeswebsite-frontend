/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { ReactElement, type FC, useState } from 'react';

// export interface IuseMultistepFormProps {
// }

const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  function nextStep(){
      setCurrentStepIndex( currentStep => {
        if( currentStep >= steps.length - 1){
          return currentStep;
        }
        return currentStep + 1;
      })
  }

  function prevStep(){
      setCurrentStepIndex( currentStep => {
        if( currentStep <= 0 ){
          return currentStep;
        }
        return currentStep - 1;
      })
  }

  function goToStep(index: number){
      setCurrentStepIndex(index);
  }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    nextStep,
    prevStep,
    goToStep,
    steps,
  };
}
export default useMultistepForm;