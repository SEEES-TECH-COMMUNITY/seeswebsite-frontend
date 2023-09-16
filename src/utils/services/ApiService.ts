/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  type BaseQueryApi,
  type FetchArgs,
  createApi,
  fetchBaseQuery,
  type FetchBaseQueryMeta,
  type FetchBaseQueryError,
  type BaseQueryFn,
} from "@reduxjs/toolkit/query/react";
import ApiRoutes from "../constants/routes";
import type {
  SignupBody,
  LoginBody,
  CompleteAccountBody,
  resendEmailVerificationCodeBody,
  resetPasswordBody,
  LoginResponse,
  RefreshResponse,
  ICompleteAccountResponse,
} from "@app-types/api";
import {
  getFromLocalStorage,
  getWithExpiry,
  removeFromLocalStorage,
  saveToLocalStorage,
  setWithExpiry,
} from "../function/storageUtils";
import {
  ACCESS_TOKEN_NAME,
  REFRESH_TOKEN_NAME,
  TOKEN_STORAGE_DURATION,
} from "../constants/keys";
import { Router } from "next/router";
import { redirect } from "next/navigation";

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
  prepareHeaders: (headers, api) => {
    let token = getFromLocalStorage<string>(ACCESS_TOKEN_NAME);
    if (typeof token === "string") {
      headers.set("authorization", `Bearer ${token}`);
    } else {
      token = getWithExpiry<string>(REFRESH_TOKEN_NAME).value ?? "";
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithResult: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    removeFromLocalStorage(ACCESS_TOKEN_NAME);
    const refreshResult = await baseQuery(
      {
        url: ApiRoutes.refresh,
        method: "POST",
      },
      api,
      extraOptions
    );
    if (refreshResult.error?.status !== 401) {
      // setWithExpiry<string>(
      //   ACCESS_TOKEN_NAME,
      //   refreshResult.data?.access_token ?? "",
      //   3600000
      // );
      const res = refreshResult?.error?.data as RefreshResponse;
      saveToLocalStorage(ACCESS_TOKEN_NAME, res.response.access_tokens);
      const originalRequest = await baseQuery(args, api, extraOptions);
      return originalRequest;
    } else {
      removeFromLocalStorage(ACCESS_TOKEN_NAME);
      removeFromLocalStorage(REFRESH_TOKEN_NAME);
      window.location.href = "/auth/login";
      return refreshResult;
    }
  } else {
    return result;
  }
};
const ApiService = createApi({
  reducerPath: "apiService",
  baseQuery: baseQueryWithResult,
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
      transformResponse: (response: ICompleteAccountResponse) =>
        response.response,
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
      transformResponse: (response: ICompleteAccountResponse) => response.response,
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
