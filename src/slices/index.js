import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './UserSlice';

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
