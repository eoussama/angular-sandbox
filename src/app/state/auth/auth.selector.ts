import { createSelector } from '@ngrx/store';
import { IAppState } from '../app/app.type';
import { IAuthState } from './auth.type';


/**
 * @description
 * Selects the authentication state
 *
 * @param state The app state
 */
export const selectAuthState = (state: IAppState) => state.auth;

/**
 * @description
 * Selects the authenticated user
 */
export const selectAuthUser = createSelector(selectAuthState, (state: IAuthState) => state);

/**
 * @description
 * Selects the authenticated user's name
 */
export const selectAuthUserName = createSelector(selectAuthUser, (state: IAuthState) => state.username ?? '');