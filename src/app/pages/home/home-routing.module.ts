import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        data: { animation: 'HomePage' },
        children: [
          {
            path: 'home',
            data: { animation: 'HomePage' },
            loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
          },
          {
            path: 'superheroes',
            data: { animation: 'SuperheroesPage' },
            loadChildren: () => import('./superheroes/superheroes.module').then(m => m.SuperheroesModule)
          },
          {
            path: 'favorites',
            data: { animation: 'FavoritesPage' },
            loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule)
          },
          {
            path: '**',
            redirectTo: 'home'
          }
        ]
      },
    ])],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
