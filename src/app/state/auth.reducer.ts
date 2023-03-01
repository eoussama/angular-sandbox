import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.action';
import { UserState } from './auth.type';

export const initialState: UserState = {
  username: null
};

export const userReducer = createReducer(
  initialState,
  on(login, (state, action) => ({ ...state, username: action.username })),
  on(logout, (state) => ({ ...state, username: null }))
);