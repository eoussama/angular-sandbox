import { authReducer } from './auth/auth.reducer';
import { favoritesReducer } from './favorites/favorites.reducer';


export const reducers = {
  auth: authReducer,
  favorites: favoritesReducer
}