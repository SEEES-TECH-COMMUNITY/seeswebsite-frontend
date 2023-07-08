import React, { type InputHTMLAttributes, useState, type FC } from "react";
import { LockIcon, EyeIcon } from "@icons/index";

export interface IPasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}
// @Eddy-scion @Victor-Aken Note i extracted the type from the props below 
// eslint-disable-next-line @typescript-eslint/no-unused-vars 
const PasswordInput: FC<IPasswordInputProps> = ({type, ...props}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative w-full h-fit select-none">
      <LockIcon className="w-4 h-auto left-5 absolute inset-y-3" />
      <input
        type={showPassword ? "text" : "password"}
        {...props}
        placeholder="Password"
        className="w-full py-3 placeholder-blue-placeholder-600 text-blue-placeholder-600 rounded-lg border text-bold border-transparent bg-grey-600 pl-10 pr-12 font-sans text-xs placeholder-opacity-70 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
      />
      <EyeIcon 
      onClick={() => setShowPassword(!showPassword)}
      className="w-4 h-auto hover:fill-gray-300 ease-in duration-300 transition-colors fill-transparent cursor-pointer absolute right-5 inset-y-3" />
    </div>
  );
};

export default PasswordInput;
