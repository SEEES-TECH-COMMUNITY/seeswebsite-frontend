/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { type SelectHTMLAttributes, type FC } from "react";

import { cn } from "@utils/function/styleMerger";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select/select";
export interface ISelectInputProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[] | Array<{ text: string; value: string }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  placeholder: string;
  name: string;
  className?: string;
  error?: boolean;
  errorMessage?: string;
  loading?: boolean;
}

const SelectInput: FC<ISelectInputProps> = ({
  options,
  onChange,
  value,
  placeholder,
  name,
  className,
  error,
  errorMessage,
  loading,
  ...props
}) => {
  const handleChange = (value: string) => {
    const e = {
      target: {
        value,
        name,
      },
    };
    onChange(e as unknown as React.ChangeEvent<HTMLSelectElement>);
  };
  return loading ? (
    <span>Loading ....</span>
  ) : (
    <span className="flex flex-col space-y-2">
      <Select
        onValueChange={handleChange}
        defaultValue={value}
      >
        <SelectTrigger
          className={cn("bg-primary-200 border-animation  data-details:text-blue-placeholder-600 data-details:text-opacity-70 appearance-none rounded-lg w-full data-true:ring-primary-890 text-secondary-500 outline-none focus-within:ring-[#C4C4C4]  focus-within:data-true:ring-primary-890  data-true:ring-1 focus-within:ring-1 focus-within:outline-none focus:outline-none focus-visible:outline-none transition-all duration-300 ease-in text-xs", className)}
          data-true={error}
          data-details={value?.length === 0}
        >
          <SelectValue className="text-inherit text-xs" placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="max-h-72">
          <SelectGroup>
            <SelectItem className="text-xs" value="">
              {placeholder}
            </SelectItem>
            {options?.map((val: string | { text: string; value: string }) => (
              <SelectItem className="text-xs" key={typeof val === "object" ? val?.value : val} value={`${typeof val === "object" ? val?.value : val}`}>
                {typeof val === "object" ? val?.text : val}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && (
        <p className="text-xxs text-red-500">{errorMessage}</p>
      )}
    </span>
  );
};
export default SelectInput;