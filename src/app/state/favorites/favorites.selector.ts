import { createSelector } from '@ngrx/store';
import { IAppState } from '../app/app.type';
import { IFavoriteState } from './favorites.type';


/**
 * @description
 * Selects the favorites state
 *
 * @param state The app state
 */
export const selectFavoritesState = (state: IAppState) => state.favorites;

/**
 * @description
 * Selects the favorites
 */
export const selectFavorites = createSelector(selectFavoritesState, (state: IFavoriteState) => state.favorites);