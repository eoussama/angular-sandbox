import { createAction, props } from '@ngrx/store';


export enum FavoritesAction {
  Update = '[Favorites] Update',
  Reset = '[Favorites] Reset'
}


export const update = createAction(FavoritesAction.Update, props<{ favorites: Array<number> }>());
export const reset = createAction(FavoritesAction.Reset);