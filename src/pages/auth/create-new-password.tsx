import React, { useState } from "react";
import type { NextPage } from "next";
import { PasswordInput, AuthSideBar, TextInput, Button } from "@src/components";
import { Montserrat, Space_Grotesk } from "next/font/google";
import { type ZodError, z } from "zod";
import { type InputError } from "@src/utils/types/forms.types";
const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const spaceGrotesk = Space_Grotesk({
  weight: ["500"],
  subsets: ["latin", "latin-ext"],
});

const Page: NextPage = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<InputError>({
    error: false,
    message: "",
  });
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<InputError>({
    error: false,
    message: "",
  });

  // These two below are for api based errors
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const userSchema = z.object({
    password: z
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
        message:
          "Password must contain at least 8 characters, one uppercase, one lowercase and one number",
      }).nonempty(),
    confrim_password: z.string().refine((data) => data === password, {
      message: "Passwords do not match",
    }),
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userLoginData = userSchema.parse({ confirmPassword, password });
      console.log(userLoginData);
    } catch (err: unknown) {
      const errObj = err as ZodError;
      console.log(errObj.errors);
      if (errObj?.errors?.length > 0) {
        errObj?.errors?.forEach((error) => {
          if (error.path[0] === "confrim_password") {
            setConfirmPasswordError({
              error: true,
              message: error.message,
            });
          }
          if (error.path[0] === "password") {
            console.log(error.message)
            setPasswordError({
              error: true,
              message: error.message,
            });
          }
        });
      }
    }
  };
  return (
    <section className={`flex ${montserrat.className}`}>
      <div className="w-5/12 basis-5/12">
        <AuthSideBar />
      </div>
      <div className="flex w-7/12 basis-7/12 items-start justify-between px-12 ">
        <div className="flex min-h-screen w-3/4 flex-col items-center justify-center space-y-6 px-12 pt-24">
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col space-y-6"
          >
            <div className="flex flex-col space-y-3">
              <h1
                className={`text-4xl font-medium tracking-[-0.5px] text-black ${spaceGrotesk.className}`}
              >
                Create New Password
              </h1>
              <p
                className={`text-sm font-light tracking-[-0.16px] text-grey-700`}
              >
                Please Enter the OTP Code sent to your email
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={error}
                placeholder="New password"
                errorObj={passwordError}
              />
              <PasswordInput
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={confirmPasswordError.error}
                placeholder="Confirm password"
                errorObj={confirmPasswordError}
              />
              {error && (
                <p className="text-xs text-red-500">
                  Invalid email or password
                </p>
              )}
            </div>
            <Button text="Login" type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};
export default Page;
