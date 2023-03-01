import { IAuthState } from '../auth/auth.type';

/**
 * @description
 * The entire app state
 */
export interface IAppState {

  /**
   * @description
   * The authentication state
   */
  user: IAuthState;
}
