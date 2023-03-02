import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { RouterModule } from '@angular/router';
import { FavoritePipe } from 'src/app/pipes/favorite/favorite.pipe';
import { ThumbModule } from 'src/app/components/thumb/thumb.module';



@NgModule({
  declarations: [
    FavoritesComponent,
    FavoritePipe
  ],
  imports: [
    CommonModule,
    ThumbModule,
    RouterModule.forChild([
      {
        path: '',
        component: FavoritesComponent
      }
    ])
  ]
})
export class FavoritesModule { }
