import { createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signUp } from './../../services/api';
import type { UserCredential } from './types';

export const signUpRequest = createAsyncThunk(
  'user/signUpRequest',
  async (data: UserCredential, { rejectWithValue }) => {
    try {
      const response = await signUp(data);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const signInRequest = createAsyncThunk(
  'user/signInRequest',
  async (data: UserCredential, { rejectWithValue }) => {
    try {
      const response = await signIn(data);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);
