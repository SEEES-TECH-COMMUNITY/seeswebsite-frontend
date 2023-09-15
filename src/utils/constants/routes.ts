enum ApiRoutes {
  signup = "/accounts/signup",
  signin = "/accounts/signin",
  logout = "/accounts/logout",
  complete_signup = "/accounts/complete-signup",
  get_account = "/accounts/get-account",
  refresh = "/accounts/refresh",
  confirm_email = "/accounts/confirmEmail/{confirmationCode}",
  resend_confirmation_email = "/accounts/resendEmailVerificationCode",
  reset_password =  "/api/v1/accounts/resetPassword/{token}",
  forgot_password =  "/accounts/forgotPassword?email={email}",
  
}
export default ApiRoutes;
