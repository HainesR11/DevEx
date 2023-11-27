import {createSlice} from '@reduxjs/toolkit';

import {USER_SLICE} from '@DevEx/constants/sliceConstant';

const initialState = {
  isAuthenticated: false,
  actions: [],
  isDarkMode: false,
  isFirstVisit: false,
  user: {
    id: 24,
    username: 'HainesR11',
    name: 'Rhys Haines',
    profilePic: '1234.png',
    email: 'Rhys.haines@gmail.com',
    following: [
      {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
      {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
      {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
      {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
    ],
    followers: [
      {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
      {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
      {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
      {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
      {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
      {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
    ],
  },
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
