import {createSlice} from '@reduxjs/toolkit';

import {USER_SLICE} from '@DevEx/constants/sliceConstant';

const initialState = {
  isAuthenticated: false,
  actions: [],
};

const userSlice = createSlice({
  name: USER_SLICE,
  initialState,
  reducers: {
    setUser: (state, action) => {
      const nextState = {
        ...state,
        ...action.payload,
        isFirstVisit: false,
      };
      return nextState;
    },

    clearUser: () => {
      return {
        ...initialState,
        isFirstVisit: false,
      };
    },

    resetUser: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const {setUser, clearUser, resetUser} = userSlice.actions;

export default userSlice.reducer;
