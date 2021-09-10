import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signIn, signUp } from './../../services/api';
import type { UserCredential, UserInitialState } from './types';

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

const signUpRequest = createAsyncThunk('user/signUpRequest', async (data: UserCredential) => {
  const response = await signUp(data);
  return response.data;
});

const signInRequest = createAsyncThunk('user/signInRequest', async (data: UserCredential) => {
  const response = await signIn(data);
  return response.data;
});

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
      return { accessToken, ...user };
    });
  },
});

export const userSliceActions = {...userSlice.actions, signUpRequest, signInRequest};
export default userSlice.reducer;
