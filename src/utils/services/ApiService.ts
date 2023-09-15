/* eslint-disable @typescript-eslint/no-unused-vars */
import { type BaseQueryApi, type FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ApiRoutes from "../constants/routes";
import type {
  SignupBody,
  LoginBody,
  CompleteAccountBody,
  resendEmailVerificationCodeBody,
  resetPasswordBody,
  LoginResponse,
} from "@app-types/api";
import { getFromLocalStorage } from "../constants/tokenName";
import { ACCESS_TOKEN_NAME } from "../constants/keys";

const ApiHeaders = {
  Accept: "application/json",
};
const baseUrl = "https://seees-backend.cyclic.app/api/v1";
type ApiMethods = "POST" | "GET" | "PUT" | "DELETE" | "PATCH";

const createRequest = (
  url: string,
  method: ApiMethods
): { url: string; headers: Record<string, string>; method: ApiMethods } => ({
  url,
  headers: ApiHeaders,
  method,
});
const postRequest = <T>(
  url: string,
  method: ApiMethods,
  body: T
): {
  url: string;
  headers: Record<string, string>;
  method: string;
  body: T;
} => ({
  url,
  headers: ApiHeaders,
  method,
  body,
});
const requestWithHeader = (
  url: string,
  method: string,
  headers: Record<string, unknown>
): { url: string; headers: Record<string, unknown>; method: string } => ({
  url,
  headers,
  method,
});
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = getFromLocalStorage<string>(ACCESS_TOKEN_NAME);

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithResult = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: Record<string, string>) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    const refreshResult = await baseQuery(ApiRoutes.refresh, api, extraOptions);
    console.log(refreshResult);
    return refreshResult;
    // result = await baseQuery(args, api, extraOptions);
    } else {
    return result;
    }
};
const ApiService = createApi({
  reducerPath: "apiService",
  baseQuery: baseQuery,
  tagTypes: ["Post", "Get", "Patch"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body: SignupBody) =>
        postRequest<SignupBody>(ApiRoutes.signin, "POST", body),
      invalidatesTags: ["Post"],
    }),
    signIn: builder.mutation({
      query: (body: LoginBody) =>
        postRequest<LoginBody>(ApiRoutes.signin, "POST", body),
      transformResponse: (response: LoginResponse) => response.response,
      invalidatesTags: ["Post"],
    }),
    logout: builder.mutation({
      query: () => createRequest(ApiRoutes.logout, "POST"),
      invalidatesTags: ["Post"],
    }),
    completeSignup: builder.mutation({
      query: (body: CompleteAccountBody) =>
        postRequest<CompleteAccountBody>(
          ApiRoutes.complete_signup,
          "POST",
          body
        ),
      invalidatesTags: ["Post"],
    }),
    getAccount: builder.query({
      query: () => createRequest(ApiRoutes.get_account, "GET"),
      providesTags: ["Get"],
    }),
    refresh: builder.mutation({
      query: () => createRequest(ApiRoutes.refresh, "POST"),
      invalidatesTags: ["Post"],
    }),
    confirmEmail: builder.mutation({
      query: (confirmationCode: string) =>
        createRequest(
          ApiRoutes.confirm_email.replace(
            "{confirmationCode}",
            confirmationCode
          ),
          "GET"
        ),
      invalidatesTags: ["Get"],
    }),
    resendConfirmationEmail: builder.mutation({
      query: (body: resendEmailVerificationCodeBody) =>
        postRequest<resendEmailVerificationCodeBody>(
          ApiRoutes.resend_confirmation_email,
          "POST",
          body
        ),
      invalidatesTags: ["Post"],
    }),
    resetPassword: builder.mutation({
      query: ({ token, body }: { token: string; body: resetPasswordBody }) =>
        postRequest<resetPasswordBody>(
          ApiRoutes.reset_password.replace("{token}", token),
          "PATCH",
          body
        ),
      invalidatesTags: ["Patch"],
    }),
    forgotPassword: builder.mutation({
      query: (email: string) =>
        createRequest(
          ApiRoutes.forgot_password.replace("{email}", email),
          "POST"
        ),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useLogoutMutation,
  useCompleteSignupMutation,
  useGetAccountQuery,
  useRefreshMutation,
  useConfirmEmailMutation,
  useResendConfirmationEmailMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
} = ApiService;
export default ApiService;
