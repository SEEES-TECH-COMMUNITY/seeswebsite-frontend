/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { type ButtonHTMLAttributes, type FC } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const Button: FC<IButtonProps> = ({className, text,...props}) => {
  return (
    <button {...props} className={`text-bold w-full rounded-lg border border-transparent bg-blue-600 py-3 pl-10 pr-12 font-sans text-xs text-white placeholder-opacity-70 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ${className ?? ''}`}>
      {text}
    </button>
  );
}
export default Button;