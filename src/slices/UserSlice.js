/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { Service } from '../services';

//
export const initialState = {
  loading: false,
  hasErrors: false,
  data: [],
  cloneData: [],
};
// A slice
const userslice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    startLoading: state => {
      state.loading = true;
    },

    getUsers: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUsersFailure: state => {
      state.loading = false;
      // handling Errors
      state.hasErrors = true;
    },
    getCloneData: state => {
      state.cloneData = state.data;
    },
    getDeleteUser: (state, action) => {
      state.cloneData = action.payload;
    },
    getUpdateUser: (state, action) => {
      state.cloneData = action.payload;
    },
    getNewUser: (state, action) => {
      state.cloneData = action.payload;
    },
    searchData: (state, action) => {
      state.cloneData = action.payload;
    },
  },
});

// Actions generated from the slice
const {
  startLoading,
  getUsersFailure,
  getUsers,
  getCloneData,
  getDeleteUser,
  getUpdateUser,
  getNewUser,
  searchData,
} = userslice.actions;

// export user selector to get the slice in any component
export const usersSelector = state => state.users;
// export The reducer
const usersReducer = userslice.reducer;
export default usersReducer;
// Actions
export const fetchGetUsers = () => async dispatch => {
  Service.User.GetUsers().then(res => {
    if (res) {
      dispatch(startLoading());
      dispatch(getUsers(res));
    } else {
      dispatch(getUsersFailure());
    }
  });
};
export const cloneAllData = () => async dispatch => {
  dispatch(getCloneData());
};
export const deleteUser = afterTheDelete => async dispatch => {
  dispatch(getDeleteUser(afterTheDelete));
};
export const updateUser = afterTheUpdate => async dispatch => {
  dispatch(getUpdateUser(afterTheUpdate));
};
export const addNewUser = newUser => async dispatch => {
  dispatch(getNewUser(newUser));
};
export const search = newQuery => async dispatch => {
  dispatch(searchData(newQuery));
};
