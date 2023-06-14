import {AUTH_SLICE} from '@DevEx/constants/sliceConstant';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import uuid from 'react-native-uuid';

export interface EncryptedAuthState {
  tokens: any;
  sessionID?: string | null;
}

const initialState: EncryptedAuthState = {
  tokens: null,
  sessionID: null,
};

const authSlice = createSlice({
  name: AUTH_SLICE,
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<EncryptedAuthState>) => {
      const nextState = {
        ...state,
        ...action.payload,
        sessionID: uuid.v4() as string,
      };

      return nextState;
    },

    clearAuth: () => initialState,
  },
});

export const {setAuth, clearAuth} = authSlice.actions;

export default authSlice.reducer;
