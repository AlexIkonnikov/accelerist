import { createSlice } from '@reduxjs/toolkit';
import type { UserInitialState } from './types';
import {signUpRequest, signInRequest} from './thunk';

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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInRequest.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(signInRequest.fulfilled, (state, action) => {
      const { user, accessToken } = action.payload;
      state = { accessToken, ...user };
      return state;
    });
  },
});

export default userSlice.reducer;
export const userSliceActions = userSlice.actions;
