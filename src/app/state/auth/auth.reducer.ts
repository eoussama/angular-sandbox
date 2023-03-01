import { on } from '@ngrx/store';
import { IAuthState } from './auth.type';
import { login, logout } from './auth.action';
import { createRehydrateReducer } from 'src/app/helpers/state.helper';
import { StateKey } from 'src/app/enums/state.enum';

export const initialState: IAuthState = {
  username: null
};

export const authReducer = createRehydrateReducer(
  StateKey.auth,
  initialState,
  on(login, (state, action) => ({ ...state, username: action.username })),
  on(logout, (state) => ({ ...state, username: null }))
);