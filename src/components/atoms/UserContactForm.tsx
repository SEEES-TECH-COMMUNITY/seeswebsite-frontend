/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { type FC } from 'react';
import { useState } from 'react';
import { Montserrat, Space_Grotesk } from "next/font/google";
import { Button, TextInput } from "@src/components";
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


export interface IuserContactFormProps {
  formData: FormValues;
  setFormData: React.Dispatch<React.SetStateAction<FormValues>>;
  formError: IFormError;
  setFormError: React.Dispatch<React.SetStateAction<IFormError>>;
  onSubmit: () => void;
  goToNextStep: () => void;
  goToPrevStep: () => void;
}

const UserContactForm: React.FC<IuserContactFormProps> = ({ formData, onSubmit, goToNextStep, goToPrevStep, setFormData, formError, setFormError }) => {
  const formDataSchema = z.object({
    address: z.string().min(10, { message: "Address must be at least 10 characters long" }),
    phone: z.string().min(11, { message: "Phone number must be at least 11 characters long" }),
    nextOfKin: z.string().min(2, { message: "Next of kin must be at least 2 characters long" }),
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.preventDefault();
    setFormError((props) => ({ ...props, address: false, phone: false, nextOfKin: false }));
    const data = formDataSchema.safeParse({
      address: formData.address,
      phone: formData.phone,
      nextOfKin: formData.nextOfKin,
    });
    if (!data.success) {
      handleErrorValidation(data?.error, setFormError);
    } else {
      onSubmit();
    }
  };



  return (
    <form onSubmit={handleSubmit}>
      <div className='lg:w-full mx-auto w-11/12'>
        <h2 className={`${spaceGrotesk.className} text-xl mb-2`}>Contact</h2>
        <div className='flex flex-col space-y-4'>
          <TextInput
            type="text"
            value={formData.address}
            onChange={(e) => setFormData((props) => ({ ...props, address: e.target.value }))}
            errorObj={{ error: formError.address, message: 'Address is required' }}
            placeholder="Address"
            className="pl-4 text-base"
          />
          <TextInput
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData((props) => ({ ...props, phone: e.target.value }))}
            errorObj={{ error: formError.phone, message: 'Phone number is required' }}
            placeholder="Phone Number"
            className="pl-4 text-base"
          />
          <TextInput
            type="text"
            value={formData.nextOfKin}
            onChange={(e) => setFormData((props) => ({ ...props, nextOfKin: e.target.value }))}
            errorObj={{ error: formError.nextOfKin, message: 'Next of kin is required' }}
            placeholder="Next Of Kin"
            className="pl-4 pr-4 text-base"
          />

        </div>
        <div className="items-center justify-center gap-4 flex mt-10">
          <Button text="Back" type='button' onClick={goToPrevStep} className="border-2 border-blue-500 px-12 py-2 rounded-xl w-[120px] flex items-center justify-center text-blue-500 text-base bg-white  hover:scale-105 transition duration-150 ease-in-out" />
          <Button text="Submit" type='submit' className="px-12 py-2 w-[120px] flex items-center justify-center rounded-xl text-base bg-blue-500 text-white hover:scale-105 transition duration-150 ease-in-out" />
        </div>
      </div>
    </form>
  );
}
export default UserContactForm;