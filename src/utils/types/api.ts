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
    success: boolean;
    tokens: {
      access_tokens: string;
      refresh_tokens: string;
    };
    active: boolean;
  };
}

export interface RefreshResponse {
  response: {
    access_tokens: string;
    refresh_tokens: string;
  };
}

export interface ICompleteAccountResponse {
  response: {
    success: true;
    data: { message: string };
  };
}
export interface IForgotPassword {
  response: {
    success: boolean;
    message: string;
  };
}

export interface IUser {
  response: {
    success: true;
    data: {
      _id: string;
      userID: string;
      firstName: string;
      lastName: string;
      email: string;
      role: string;
      confirmationCode: string;
      confirmationCodeExpires: string;
      active: true;
      createdAt: string;
      updatedAt: string;
      address: string;
      dateOfBirth: string;
      department: string;
      level: number;
      matNumber: string;
      nextOfKin: string;
      phoneNumber: number | string;
      stateOfOrigin: string;
      username: string;
      passwordResetExpires: string;
      passwordResetToken: string;
    };
  };
}

export interface IAnnouncements {
  _id: string;
  author: string;
  body: string;
  createdAt: string;
  topic: string;
  updatedAt: string;
}
