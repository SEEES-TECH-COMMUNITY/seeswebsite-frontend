enum ApiRoutes {
  signup = "/accounts/signup",
  signin = "/accounts/signin",
  logout = "/accounts/logout",
  complete_signup = "/accounts/complete-signup",
  get_account = "/accounts/get-account",
  get_user = "/accounts/get-user",
  get_all_user = "/accounts/get-all-users",
  refresh = "/accounts/refresh",
  confirm_email = "/accounts/confirmEmail/{confirmationCode}",
  resend_confirmation_email = "/accounts/resendEmailVerificationCode",
  reset_password =  "/api/v1/accounts/resetPassword/{token}",
  forgot_password =  "/accounts/forgotPassword?email={email}",
  get_all_announcements = "/announcement/get-all-announcement",
  get_announcement = "/announcement/get-announcement?announcementID={id}",
  
}
export default ApiRoutes;
