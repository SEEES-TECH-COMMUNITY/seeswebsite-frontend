import React, { useState } from "react";
import type { NextPage } from "next";
import { AuthSideBar, Button, PasswordInput, TextInput } from "@src/components";
import { Montserrat, Space_Grotesk } from "next/font/google";
import { InputError } from "@src/utils/types/forms.types";
import { z } from "zod";
import { useForgotPasswordMutation } from "@src/utils/services/ApiService";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
});
const spaceGrotesk = Space_Grotesk({
  weight: ["500"],
  subsets: ["latin", "latin-ext"],
});

const Page: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<InputError>({
    error: false,
    message: ""
  });
  const [error, setError] = useState<boolean>(false);
  const emailSchema = z.string().email({ message: "Invalid email address" });
  const [forget] = useForgotPasswordMutation();
  const {push} = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError({
      error: false,
      message: ""
    });
    try {
      const emailData = emailSchema.parse(email);
      forget(email).unwrap().then((res) => {
        console.log(res);
        if (res.success) {
         void push('/auth/reset-password')
        }
      }).catch((err) => {
        setError(true);
      });
    } catch (err: unknown) {
      const errObj = err as z.ZodError;
      console.log(errObj?.errors);
      if (errObj?.errors?.length > 0) {
        errObj?.errors?.forEach((error) => {
          setEmailError({
            error: true,
            message: error.message,
          });
        });
      }
    }
  }
  return (
    <section className={`flex flex-row ${montserrat.className}`}>
      <div className="w-5/12 basis-5/12 block">
        <AuthSideBar />
      </div>
      <div className="flex w-7/12 basis-7/12 items-start justify-between px-12">
        <div className="flex min-h-screen w-3/4 flex-col items-center justify-center space-y-6 px-12 pt-24">
          <form onSubmit={handleSubmit} className="flex w-full flex-col space-y-8">
            <div className="flex flex-col space-y-3">
              <h1 className={`text-4xl font-medium tracking-[-0.5px] text-black ${spaceGrotesk.className}`}>
                Reset Password
              </h1>
              <p className={`text-sm font-light tracking-[-0.16px] text-grey-700`}>
                Please type email to receive reset link
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <span>
                <TextInput
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  error={emailError.error}
                  errorObj={emailError}
                />
                {error && (
                  <p className="text-xs text-red-500 mt-3">
                    Account Does Not Exist
                  </p>
                )}
              </span>
              <Button text="Reset" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}


export default Page;