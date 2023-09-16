import React, { FormEvent, useEffect, useState } from "react";
import type { NextPage } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import { Button, TextInput } from "@src/components";
import { InputError } from "@src/utils/types/forms.types";
import CompleteAccountProgressState from "@src/components/ui/CompleteAccountProgressState";
import UserPersonalForm from "@src/components/atoms/UserPersonalForm";
import UserAcademicForm from "@src/components/atoms/UserAcademicForm";
import UserContactForm from "@src/components/atoms/UserContactForm";
import { useCompleteSignupMutation } from "@src/utils/services/ApiService";
import { useRouter } from "next/router";


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
export interface IFormError{
  firstName: boolean;
  lastName: boolean;
  dateOfBirth: boolean;
  stateOfOrigin: boolean;
  matNumber: boolean;
  currentLevel: boolean;
  department: boolean;
  address: boolean;
  phone: boolean;
  nextOfKin: boolean;
}

const Page: NextPage = () => {
  const totalSteps = 3;
  const [currentStep, setCurrentStep] = useState(1);
  const [completeSignUp] = useCompleteSignupMutation();
  const [formData, setFormData] = useState<FormValues>({
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
  const [formError, setFormError] = useState<IFormError>({
    firstName: false,
    lastName: false,
    dateOfBirth: false,
    stateOfOrigin: false,
    matNumber: false,
    currentLevel: false,
    department: false,
    address: false,
    phone: false,
    nextOfKin: false,
  });
  const {push} = useRouter();
  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goToPrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    completeSignUp({
      username: `${formData.firstName} ${formData.lastName}`,
      dateOfBirth: formData.dateOfBirth,
      stateOfOrigin: formData.stateOfOrigin,
      matNumber: formData.matNumber,
      level: formData.currentLevel,
      middleName: '',
      phoneNumber: formData.phone,
      department: formData.department,
      address: formData.address,
      nextOfKin: formData.nextOfKin,
    })
    .unwrap()
    .then((res) => {
      if(res.success){
        void push('/dashboard');
      }
    }).catch((err) => console.log(err));
  };



  function renderCurrentStep(currentStep: number) {
  switch (currentStep) {
    case 1:
      return (
        <UserPersonalForm formData={formData} onSubmit={handleSubmit} setFormError={setFormError} formError={formError} setFormData={setFormData} goToNextStep={goToNextStep} />
      );
      break;
    case 2:
      return (
        <UserAcademicForm formData={formData} onSubmit={handleSubmit} setFormError={setFormError} formError={formError} setFormData={setFormData} goToPrevStep={goToPrevStep} goToNextStep={goToNextStep} />
      );
      break;
    case 3:
      return(
        <UserContactForm formData={formData} onSubmit={handleSubmit} setFormError={setFormError} formError={formError} setFormData={setFormData} goToPrevStep={goToPrevStep} goToNextStep={goToNextStep} />
      );
      break;

    default:
      return (
        <UserPersonalForm formData={formData} onSubmit={handleSubmit} setFormData={setFormData} setFormError={setFormError} formError={formError} goToNextStep={goToNextStep} />
      );
  }
}



  return (
    <section className={`flex justify-center ${montserrat.className} select-none`}>
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
