import { on } from '@ngrx/store';
import { createRehydrateReducer } from 'src/app/helpers/state.helper';
import { StateKey } from 'src/app/enums/state.enum';
import { IFavoriteState } from './favorites.type';
import { reset, update } from './favoritesd.action';

export const initialState: IFavoriteState = {
  favorites: []
};

export const favoritesReducer = createRehydrateReducer(
  StateKey.favorites,
  initialState,
  on(update, (state, action) => ({ ...state, favorites: action.favorites })),
  on(reset, state => ({ ...state, favorites: [] }))
);