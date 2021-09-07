import {createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user: null
  },

  reducers: {
    LoginIn: (state, action) => {
      state.user = action.payload;
    },
    LogOut: (state) => {
      state.user = null
    }
  },


});

export const {LoginIn, LogOut} = userSlice.actions;

export const selectUser = (state) =>  state.user.user;

console.log("Selector",selectUser);


export default userSlice.reducer;
