import { createAction, props } from '@ngrx/store';


export enum AuthAction {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout'
}


export const login = createAction(AuthAction.Login, props<{ id: number, username: string }>());
export const logout = createAction(AuthAction.Logout);