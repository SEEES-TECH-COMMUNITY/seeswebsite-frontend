/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { type FC } from 'react';
import { useState } from 'react';
import { Montserrat, Space_Grotesk } from "next/font/google";
import { Button, TextInput } from "@src/components";
import { InputError } from "@src/utils/types/forms.types";
import { FormValues } from '@src/pages/complete-account-setup';

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
  onSubmit: () => void;
  goToNextStep: () => void;
  goToPrevStep: () => void;
}

const UserContactForm: React.FC<IuserContactFormProps> = ({ formData, onSubmit, goToNextStep, goToPrevStep }) => {

  const [address, setAddress] = useState<string>("");
  const [addressError, setAddressError] = useState<InputError>({
    error: false,
    message: "",
  });

  const [phone, setPhone] = useState<string>("");
  const [phoneError, setPhoneError] = useState<InputError>({
    error: false,
    message: "",
  });

  const [nextOfKin, setNextOfKin] = useState<string>("");
  const [nextOfKinError, setNextOfKinError] = useState<InputError>({
    error: false,
    message: "",
  });


  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
    goToNextStep();
  };



  return (
    <form onSubmit={handleSubmit}>
          <div>
              <div>
                <h2 className={`${spaceGrotesk.className} text-xl mb-2`}>Contact</h2>
                <TextInput 
                  type="text" 
                  value={address} 
                  onChange={ (e) => setAddress(e.target.value)}  
                  error={error}
                  errorObj={addressError} 
                  placeholder="Address" 
                  className="pl-4 text-base mb-3"
                />
                <TextInput 
                  type="tel" 
                  value={phone} 
                  onChange={ (e) => setPhone(e.target.value)}  
                  error={error}
                  errorObj={phoneError} 
                  placeholder="Phone Number" 
                  className="pl-4 text-base mb-3"
                />
                <TextInput 
                  type="text" 
                  value={nextOfKin} 
                  onChange={ (e) => setNextOfKin(e.target.value)}  
                  error={error}
                  errorObj={nextOfKinError} 
                  placeholder="Next Of Kin" 
                  className="pl-4 pr-4 text-base mb-3"
                />

              </div>
              <div className="items-center justify-center gap-4 flex mt-10">
                  <Button text="Back" onClick={goToPrevStep}  className="border-2 border-blue-500 px-12 py-2 rounded-xl w-[120px] flex items-center justify-center text-blue-500 text-base bg-white  hover:scale-105 transition duration-150 ease-in-out"/>
                  <Button text="Next" className="px-12 py-2 w-[120px] flex items-center justify-center rounded-xl text-base bg-blue-500 text-white hover:scale-105 transition duration-150 ease-in-out"/>
              </div>
          </div>
        </form>
  );
}
export default UserContactForm;