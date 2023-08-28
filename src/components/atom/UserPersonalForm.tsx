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

export interface IuserPersonalFormProps {
  formData: FormValues; 
  onSubmit: () => void;
  goToNextStep: () => void;
}

const UserPersonalForm: React.FC<IuserPersonalFormProps> = ({ formData, onSubmit, goToNextStep }) => {

  const [firstName, setFirstName] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<InputError>({
    error: false,
    message: "",
  });

  const [lastName, setLastName] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<InputError>({
    error: false,
    message: "",
  });

  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [dateOfBirthError, setDateOfBirthError] = useState<InputError>({
    error: false,
    message: "",
  });

  const [stateOfOrigin, setStateOfOrigin] = useState<string>("");
  const [stateOfOriginError, setStateOfOriginError] = useState<InputError>({
    error: false,
    message: "",
  });

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
    goToNextStep();
    console.log('submitted');
  };



  return (
    <form onSubmit={handleSubmit}>
          <div>
              <div>
                <h2 className={`${spaceGrotesk.className} text-xl mb-2`}>Personal</h2>
                <TextInput 
                  type="text" 
                  value={firstName} 
                  onChange={ (e) => setFirstName(e.target.value)}  
                  error={error}
                  errorObj={firstNameError} 
                  placeholder="First Name" 
                  className="pl-4 text-base mb-3"
                />
                <TextInput 
                  type="text" 
                  value={lastName} 
                  onChange={ (e) => setLastName(e.target.value)}  
                  error={error}
                  errorObj={lastNameError} 
                  placeholder="Last Name" 
                  className="pl-4 text-base mb-3"
                />
                <TextInput 
                  type="date" 
                  value={dateOfBirth} 
                  onChange={ (e) => setDateOfBirth(e.target.value)}  
                  error={error}
                  errorObj={dateOfBirthError} 
                  placeholder="Date of Birth" 
                  className="pl-4 pr-4 text-base mb-3"
                />

                {/* Udoka i guess you're using the UI libary you talked about here. */}
                 <TextInput 
                  type="text" 
                  value={stateOfOrigin} 
                  onChange={ (e) => setStateOfOrigin(e.target.value)}  
                  error={error}
                  errorObj={stateOfOriginError} 
                  placeholder="State Of Origin" 
                  className="pl-4 text-base mb-3"
                />
              </div>
              <div className="items-center justify-center gap-4 flex mt-10">
                  <Button text="Next" className="px-12 py-2 w-[120px] flex items-center justify-center rounded-xl text-base bg-blue-500 text-white hover:scale-105 transition duration-150 ease-in-out"/>
              </div>
          </div>
        </form>
  );
}
export default UserPersonalForm;