import { IAuthState } from '../auth/auth.type';
import { IFavoriteState } from '../favorites/favorites.type';

/**
 * @description
 * The entire app state
 */
export interface IAppState {

  /**
   * @description
   * The authentication state
   */
  auth: IAuthState;

  /**
   * @description
   * Favorited superheroes sate
   */
  favorites: IFavoriteState;
}
