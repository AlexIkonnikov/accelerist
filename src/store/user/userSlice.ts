import { createSlice } from '@reduxjs/toolkit';
import type { UserInitialState } from './types';
import {signUpRequest, signInRequest} from './thunk';
import toast from './../../utils/Toaster';

const initialState: UserInitialState = {
  accessToken: null,
  status: 'init',
  user: {
    id: '',
    email: '',
    firstName: null,
    lastName: null,
    isAuthorized: false,
    imported: false,
    teamId: '',
    role: '',
    linkedinLink: null,
    isReceivingNotifications: false,
    avatarKey: null,
    loggedInAt: '',
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInRequest.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(signInRequest.rejected, (state) => {
      toast.error('Email or password incorrect. Please try again.');
      state.status = 'done';
    });
    builder.addCase(signInRequest.fulfilled, (state, action) => {
      const { user, accessToken } = action.payload;
      return {...state, accessToken, status: 'done', user: {...user}};
    });

    builder.addCase(signUpRequest.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(signUpRequest.rejected, (state) => {
      toast.error('User already exists.');
      state.status = 'done';
    });
    builder.addCase(signUpRequest.fulfilled, (state, action) => {
      const { user, accessToken } = action.payload;
      return {...state, accessToken, status: 'done', user: {...user}};
    });
  },
});

export default userSlice.reducer;
export const userSliceActions = {...userSlice.actions, signInRequest, signUpRequest};
