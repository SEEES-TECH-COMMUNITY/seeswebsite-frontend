export interface LoginBody {
  email: string;
  candidatePassword: string;
}
export interface SignupBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
export interface CompleteAccountBody {
  username: string;
  department: string;
  address: string;
  middleName: string;
  phoneNumber: string;
  level: string;
  matNumber: string;
  nextOfKin: string;
  stateOfOrigin: string;
  dateOfBirth: string;
}
export interface resendEmailVerificationCodeBody {
  email: string;
}
export interface resetPasswordBody {
  password: string;
  passwordConfirm: string;
}
export interface LoginResponse {
  response: {
    success: true;
    tokens: {
      access_tokens: string;
      refresh_tokens: string;
    };
  };
}
