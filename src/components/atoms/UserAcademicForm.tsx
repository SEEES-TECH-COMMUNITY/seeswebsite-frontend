/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { type FC } from 'react';
import { useState } from 'react';
import { Montserrat, Space_Grotesk } from "next/font/google";
import { Button, SelectInput, TextInput } from "@src/components";
import { type InputError } from "@src/utils/types/forms.types";
import { type IFormError, type FormValues } from '@src/pages/complete-account-setup';
import { z } from 'zod';
import { handleErrorValidation } from '@src/utils/function/zodUtils';

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const spaceGrotesk = Space_Grotesk({
  weight: ["500"],
  subsets: ["latin", "latin-ext"],
});


export interface IuserAcademicFormProps {
  formData: FormValues;
  formError: IFormError;
  setFormError: React.Dispatch<React.SetStateAction<IFormError>>;
  setFormData: React.Dispatch<React.SetStateAction<FormValues>>;
  onSubmit: () => void;
  goToNextStep: () => void;
  goToPrevStep: () => void;
}

const UserAcademicForm: React.FC<IuserAcademicFormProps> = ({ formData, onSubmit, goToNextStep, goToPrevStep, setFormData, formError, setFormError }) => {
  const formDataSchema = z.object({
    matNumber: z.string().min(10, { message: "Mat number must be at least 2 characters long" }),
    currentLevel: z.string().min(2, { message: "Current level must be at least 2 characters long" }),
    department: z.string().min(2, { message: "Department must be at least 2 characters long" }),
  })
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.preventDefault();
    setFormError((props) => ({ ...props, matNumber: false, currentLevel: false, department: false }));

    const data = formDataSchema.safeParse({
      matNumber: formData.matNumber,
      currentLevel: formData.currentLevel,
      department: formData.department,
    });
    if (!data.success) {
      const formErrors = data.error.flatten();
      handleErrorValidation(data?.error, setFormError);
    } else {
      goToNextStep();
    }

    // goToNextStep();
  };



  return (
    <form onSubmit={handleSubmit}>
      <div className='lg:w-full mx-auto w-11/12'>
        <h2 className={`${spaceGrotesk.className} text-xl mb-2`}>Academic</h2>
        <div className='flex flex-col space-y-4'>
          <TextInput
            type="text"
            value={formData.matNumber}
            onChange={(e) => setFormData((props) => ({ ...props, matNumber: e.target.value }))}
            errorObj={{ error: formError.matNumber, message: 'Mat number is required' }}
            placeholder="Mat No"
            className="pl-4 text-base"
          />
          <SelectInput
            name="stateOfOrigin"
            value={formData.currentLevel}
            onChange={(e) => setFormData((props) => ({ ...props, currentLevel: e.target.value }))}
            error={formError?.currentLevel}
            errorMessage='Your Current level is required'
            options={[
              "100",
              "200",
              "300",
              "400",
              "500",
            ]}
            placeholder="Current Level"
            className="pl-4 text-base text-bold h-fit w-full rounded-lg border-2 border-transparent bg-grey-600 py-3 pr-12 font-sans text-blue-placeholder-600 placeholder-blue-placeholder-600 placeholder-opacity-70 transition-colors duration-300 ease-in focus:border-blue-500 focus:outline-none focus:ring-blue-500 data-true:border-red-500/75"
          />
          <TextInput
            type="text"
            value={formData.department}
            onChange={(e) => setFormData((props) => ({ ...props, department: e.target.value }))}
            errorObj={{ error: formError.department, message: 'Department is required' }}
            placeholder="Department"
            className="pl-4 pr-4 text-base"
          />

        </div>
        <div className="items-center justify-center gap-4 flex mt-10">
          <Button text="Back" type='button' onClick={goToPrevStep} className="border-2 border-blue-500 px-12 py-2 rounded-xl w-[120px] flex items-center justify-center text-blue-500 text-base bg-white  hover:scale-105 transition duration-150 ease-in-out" />
          <Button text="Next" type='submit' className="px-12 py-2 w-[120px] flex items-center justify-center rounded-xl text-base bg-blue-500 text-white hover:scale-105 transition duration-150 ease-in-out" />
        </div>
      </div>
    </form>
  );
}
export default UserAcademicForm;