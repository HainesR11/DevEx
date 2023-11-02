import {createSlice} from '@reduxjs/toolkit';

import {USER_SLICE} from '@DevEx/constants/sliceConstant';

const initialState = {
  isAuthenticated: false,
  actions: [],
  isFirstVisit: false,
  user: {
    id: 24,
    Name: 'Rhys Haines',
    ProfilePic: '1234.png',
    Email: 'Rhys.haines@gmail.com',
    Following: [
      {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
      {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
      {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
      {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
    ],
    Followers: [
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
