import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.action';
import { IAuthState } from './auth.type';

export const initialState: IAuthState = {
  username: null
};

export const authReducer = createReducer(
  initialState,
  on(login, (state, action) => ({ ...state, username: action.username })),
  on(logout, (state) => ({ ...state, username: null }))
);