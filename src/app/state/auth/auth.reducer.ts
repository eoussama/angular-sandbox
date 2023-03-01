import { on } from '@ngrx/store';
import { IAuthState } from './auth.type';
import { login, logout } from './auth.action';
import { createRehydrateReducer } from 'src/app/helpers/state.helper';

export const initialState: IAuthState = {
  username: null
};

export const authReducer = createRehydrateReducer(
  'auth',
  initialState,
  on(login, (state, action) => ({ ...state, username: action.username })),
  on(logout, (state) => ({ ...state, username: null }))
);