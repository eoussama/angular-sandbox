import { createSelector } from '@ngrx/store';
import { IAppState } from '../app/app.type';
import { IAuthState } from './auth.type';


/**
 * @description
 * Selects the authentication state
 *
 * @param state The app state
 */
export const selectAuthState = (state: IAppState) => state.user;

/**
 * @description
 * Selects the authenticated user
 */
export const selectAuthUser = createSelector(selectAuthState, (state: IAuthState) => state);