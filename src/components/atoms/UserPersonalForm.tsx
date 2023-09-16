/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { type FC } from 'react';
import { useState } from 'react';
import { Montserrat, Space_Grotesk } from "next/font/google";
import { Button, SelectInput, TextInput } from "@src/components";
import { type InputError } from "@src/utils/types/forms.types";
import { IFormError, type FormValues } from '@src/pages/complete-account-setup';
import { z } from 'zod';
import { handleErrorValidation } from '@src/utils/function/zodUtils';
import DatePicker from '../ui/DatePicker';

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const spaceGrotesk = Space_Grotesk({
  weight: ["500"],
  subsets: ["latin", "latin-ext"],
});

export interface IuserPersonalFormProps {
  formData: FormValues;
  onSubmit: () => void;
  goToNextStep: () => void;
  formError: IFormError;
  setFormError: React.Dispatch<React.SetStateAction<IFormError>>;
  setFormData: React.Dispatch<React.SetStateAction<FormValues>>;
}

const UserPersonalForm: React.FC<IuserPersonalFormProps> = ({ formData, onSubmit, goToNextStep, setFormData, setFormError, formError }) => {
  const formDatSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters long" }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters long" }),
    dateOfBirth: z.string().min(2, { message: "Date of birth must be at least 2 characters long" }),
    stateOfOrigin: z.string().min(2, { message: "State of origin must be at least 2 characters long" }),
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError((props) => ({ ...props, firstName: false, lastName: false, dateOfBirth: false, stateOfOrigin: false }));

    const data = formDatSchema.safeParse({
      firstName: formData.firstName,
      lastName: formData.lastName,
      dateOfBirth: formData.dateOfBirth,
      stateOfOrigin: formData.stateOfOrigin,
    });
    if (!data.success) {
      const formErrors = data.error.flatten();
      handleErrorValidation(data?.error, setFormError);
    } else {
      goToNextStep();
    }

  };



  return (
    <form onSubmit={handleSubmit}>
      <div className='lg:w-full mx-auto w-11/12'>
          <h2 className={`${spaceGrotesk.className} text-xl mb-2`}>Personal</h2>
        <div className='flex flex-col space-y-4'>
          <TextInput
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData((props) => ({ ...props, firstName: e.target.value }))}
            errorObj={{ error: formError.firstName, message: "Enter a valid first name" }}
            placeholder="First Name"
            className="pl-4 text-base"
          />
          <TextInput
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData((props) => ({ ...props, lastName: e.target.value }))}
            errorObj={{ error: formError.lastName, message: "Enter a valid last name" }}
            placeholder="Last Name"
            className="pl-4 text-base"
          />
          <TextInput
            type="text"
            value={formData.dateOfBirth}
            onChange={(e) => setFormData((props) => ({ ...props, dateOfBirth:  e.target.value }))}
            errorObj={{ error: formError.dateOfBirth, message: "Enter a valid date of birth" }}
            placeholder="Date of Birth"
            className="pl-4 pr-4 text-base"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
          <SelectInput
            name="stateOfOrigin"
            value={formData.stateOfOrigin}
            onChange={(e) => setFormData((props) => ({ ...props, stateOfOrigin: e.target.value }))}
            error={formError?.stateOfOrigin}
            errorMessage="Enter a valid state of origin"
            options={[
              "Abia",
              "Adamawa",
              "Akwa Ibom",
              "Anambra",
              "Bauchi",
            ]}
            placeholder="State Of Origin"
            className="pl-4 text-base text-bold h-fit w-full rounded-lg border-2 border-transparent bg-grey-600 py-3 pr-12 font-sans text-blue-placeholder-600 placeholder-blue-placeholder-600 placeholder-opacity-70 transition-colors duration-300 ease-in focus:border-blue-500 focus:outline-none focus:ring-blue-500 data-true:border-red-500/75"
          />
        </div>
        <div className="items-center justify-center gap-4 flex mt-10">
          <Button type='submit' text="Next" className="px-12 py-2 w-[120px] flex items-center justify-center rounded-xl text-base bg-blue-500 text-white hover:scale-105 transition duration-150 ease-in-out" />
        </div>
      </div>
    </form>
  );
}
export default UserPersonalForm;