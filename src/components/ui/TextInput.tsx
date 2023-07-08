/* eslint-disable @typescript-eslint/no-empty-interface */
import { EmailIcon } from "@src/assets/icons";
import React, { type InputHTMLAttributes, type FC } from 'react';

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement>{
  type: HTMLInputElement['type'];
}

const TextInput: FC<ITextInputProps> = ({type, ...props}) => {
  switch (type) {
    case 'email':
      return (
        <div className="relative w-full">
          <EmailIcon className="w-4 h-auto left-5 absolute inset-y-3" />
        <input
          {...props}
          type={type}
            className="w-full py-3 rounded-lg placeholder-blue-placeholder-600 text-blue-placeholder-600 border text-bold border-transparent bg-grey-600 pl-10 pr-12 font-sans text-xs placeholder-opacity-70 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
        </div>
      );
    default:
      return (
        <input
          {...props}
          type={type}
          className="w-full py-3 rounded-lg placeholder-blue-placeholder-600 text-blue-placeholder-600 border text-bold border-transparent bg-grey-600 pl-10 pr-12 font-sans text-xs placeholder-opacity-70 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
        />
      );
  }
}
export default TextInput;