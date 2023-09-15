/* eslint-disable @typescript-eslint/no-empty-interface */
import { EmailIcon } from "@src/assets/icons";
import { type InputError } from "@src/utils/types/forms.types";
import React, { type InputHTMLAttributes, type FC } from "react";
import { twMerge } from "tailwind-merge";
// import { twMerge } from "tailwind-merge";

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputElement["type"];
  error?: boolean;
  errorObj?: InputError;
}

const TextInput: FC<ITextInputProps> = ({
  type,
  error,
  errorObj,
  className,
  ...props
}) => {
  const getInput = () => {
    switch (type) {
      case "email":
        return (
          <div className="relative w-full">
            <EmailIcon className="absolute inset-y-3.5 left-5 my-auto h-auto w-4" />
            <input
              {...props}
              type={type}
              className="text-bold h-fit w-full rounded-lg border-2 border-transparent bg-grey-600 py-3 pl-10 pr-12 font-sans text-xs text-blue-placeholder-600 placeholder-blue-placeholder-600 placeholder-opacity-70 transition-colors duration-300 ease-in focus:border-blue-500 focus:outline-none focus:ring-blue-500 data-true:border-red-500/75"
              data-true={error || errorObj?.error}
              required={false}
            />
          </div>
        );
      default:
        return (
          <input
            {...props}
            type={type}
            className={twMerge(`text-bold h-fit w-full rounded-lg border-2 border-transparent bg-grey-600 py-3 pl-10 pr-12 font-sans text-xs text-blue-placeholder-600 placeholder-blue-placeholder-600 placeholder-opacity-70 transition-colors duration-300 ease-in focus:border-blue-500 focus:outline-none focus:ring-blue-500 data-true:border-red-500/75`, className)}
            data-true={error || errorObj?.error}
          />
        );
    }
  };
  return (
    <div className="flex w-full flex-col space-y-0.5">
      {getInput()}
      {errorObj?.error && (
        <p className="text-xxs text-red-500">{errorObj?.message}</p>
      )}
    </div>
  );
};
export default TextInput;
