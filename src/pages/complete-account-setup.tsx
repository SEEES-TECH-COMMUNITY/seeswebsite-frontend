import React, { FormEvent, useEffect, useState } from "react";
import type { NextPage } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import { Button, TextInput } from "@src/components";
import { InputError } from "@src/utils/types/forms.types";
import CompleteAccountProgressState from "@src/components/ui/CompleteAccountProgressState";
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

export interface FormValues {
  // Define form field types here
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  stateOfOrigin: string;
  matNumber: string;
  currentLevel: string;
  department: string;
  address: string;
  phone: string;
  nextOfKin: string;
}

const Page: NextPage = () => {
  const totalSteps = 3;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormValues>({
    // Initialize form fields
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    stateOfOrigin: '',
    matNumber: '',
    currentLevel: '',
    department: '',
    address: '',
    phone: '',
    nextOfKin: '',
  });

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goToPrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    switch (currentStep) {
      case 1:
        submitPersonalForm(formData);
        break;
      case 2:
        submitAcademicForm(formData);
        break;
      case 3:
        submitContactForm(formData);
        break;
      default:
        break;
    }
  };

  const submitPersonalForm = (formData: FormValues) => {
    // Perform API call for Step 1 using formData
    // console.log('Step 1 Submitted:', formData);
  };

  const submitAcademicForm = (formData: FormValues) => {
    // Perform API call for Step 2 using formData
    // console.log('Step 2 Submitted:', formData);
  };

  const submitContactForm = (formData: FormValues) => {
    // Perform API call for Step 2 using formData
    // console.log('Step 3 Submitted:', formData);
  };






  function renderCurrentStep(currentStep: number) {
  switch (currentStep) {
    case 1:
      return (
        <UserPersonalForm formData={formData} onSubmit={handleSubmit} setFormData={setFormData} goToNextStep={goToNextStep} />
      );
      break;
    case 2:
      return (
        <UserAcademicForm formData={formData} onSubmit={handleSubmit} setFormData={setFormData} goToPrevStep={goToPrevStep} goToNextStep={goToNextStep} />
      );
      break;
    case 3:
      return(
        <UserContactForm formData={formData} onSubmit={handleSubmit} setFormData={setFormData} goToPrevStep={goToPrevStep} goToNextStep={goToNextStep} />
      );
      break;

    default:
      return (
        <UserPersonalForm formData={formData} onSubmit={handleSubmit} setFormData={setFormData} goToNextStep={goToNextStep} />
      );
  }
}



  return (
    <section className={`flex justify-center ${montserrat.className}`}>
      <div className="w-[450px] pt-16">
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
        </div>
        <CompleteAccountProgressState totalSteps={totalSteps} currentStep={currentStep} />
        {renderCurrentStep(currentStep)}
      </div>
    </section>
  );
};
export default Page;
