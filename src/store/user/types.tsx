export interface UserInitialState {
  error: IErrors;
  accessToken: null | string;
  user: IUser;
  status: 'init' | 'pending' | 'done';
}

export interface IErrors {
  signInError: string,
  signUpError: string
}

export interface UserCredential {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  email: string;
  firstName: null | string;
  lastName: null | string;
  isAuthorized: boolean;
  imported: boolean;
  teamId: string;
  role: string;
  linkedinLink: null | string;
  isReceivingNotifications: boolean;
  avatarKey: null;
  loggedInAt: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface ChangePasswordPayload {
  password: string;
  passwordConfirmation: string;
}

export interface EmailPayload {
  email: string;
}

export interface signedUrlPayload {
  key: string;
}
