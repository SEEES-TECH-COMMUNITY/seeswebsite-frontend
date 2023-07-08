import React, { useState } from "react";
import type { NextPage } from "next";
import { PasswordInput, AuthSideBar, TextInput, Button } from "@src/components";
import { Montserrat, Space_Grotesk } from "next/font/google";
import { ZodError, z } from "zod";
const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const spaceGrotesk = Space_Grotesk({
  weight: ["500"],
  subsets: ["latin", "latin-ext"],
});
export interface InputError {
  error: boolean;
  message: string;
}

const Page: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<InputError>({
    error: false,
    message: "",
  });

  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<InputError>({
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
      }),
    email: z.string().email({ message: "Invalid email address" }),
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userLoginData = userSchema.parse({ email, password });
      console.log(userLoginData);
    } catch (err: unknown) {
      const errObj = err as ZodError;
      console.log(errObj.errors);
      if (errObj?.errors?.length > 0) {
        errObj?.errors?.forEach((error) => {
          if (error.path[0] === "email") {
            setEmailError({
              error: true,
              message: error.message,
            });
          } else {
            setEmailError({
              error: false,
              message: "",
            });
          }
          if (error.path[0] === "password") {
            console.log(error.message)
            setPasswordError({
              error: true,
              message: error.message,
            });
          } else {
            setPasswordError({
              error: false,
              message: "",
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
                Welcome Back
              </h1>
              <p
                className={`text-sm font-light tracking-[-0.16px] text-grey-700`}
              >
                Continue your academic quest in ease with SEEES
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <TextInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                error={error}
                errorObj={emailError}
              />
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={error}
                errorObj={passwordError}
              />
              {error && (
                <p className="text-xs text-red-500">
                  Invalid email or password
                </p>
              )}
            </div>
            <h2 className="float-right ml-auto w-fit text-xs font-normal text-blue-600">
              Forgot Password ?
            </h2>
            <Button text="Login" type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};
export default Page;
