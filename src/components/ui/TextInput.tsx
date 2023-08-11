/* eslint-disable @typescript-eslint/no-empty-interface */
import { EmailIcon } from "@src/assets/icons";
import { type InputError } from "@src/utils/types/forms.types";
import React, { type InputHTMLAttributes, type FC } from 'react';
import { twMerge } from "tailwind-merge";

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement>{
  type: HTMLInputElement['type'];
  error?: boolean
  errorObj: InputError;
}

const TextInput: FC<ITextInputProps> = ({ type, error, errorObj,className,  ...props}) => {
  const getInput = () => {
    switch (type) {
      case 'email':
        return (
          <div className="relative w-full">
            <EmailIcon className="w-4 h-auto left-5 absolute inset-y-3.5 my-auto" />
            <input
              {...props}
              type={type}
              className="w-full py-3 rounded-lg border-2 h-fit placeholder-blue-placeholder-600 text-blue-placeholder-600 text-bold border-transparent bg-grey-600 pl-10 pr-12 font-sans text-xs placeholder-opacity-70 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ease-in duration-300 transition-colors data-true:border-red-500/75"
              data-true={error || errorObj.error}
              required={false}
            />
          </div>
        );
      default:
        return (
          <input
            {...props}
            type={type}
            className={twMerge('w-full py-3 rounded-lg h-fit border-2 placeholder-blue-placeholder-600 text-blue-placeholder-600 text-bold border-transparent bg-grey-600 pl-10 pr-12 font-sans text-xs placeholder-opacity-70 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ease-in duration-300 transition-colors data-true:border-red-500/75', className)}
            data-true={error || errorObj.error}
          />
        );
    }
  }
  return (
    <div className="flex w-full flex-col space-y-0.5">
      {getInput()}
      {errorObj.error && (
        <p className="text-xxs text-red-500">
          {errorObj.message}
        </p>
      )}
    </div>
  )
}
export default TextInput;