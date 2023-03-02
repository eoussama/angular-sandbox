import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheroesComponent } from './superheroes.component';
import { RouterModule } from '@angular/router';
import { ThumbModule } from 'src/app/components/thumb/thumb.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';
import { FormsModule } from '@angular/forms';
import { SuperheroResolver } from 'src/app/resolvers/superhero/superhero.resolver';



@NgModule({
  declarations: [
    SuperheroesComponent
  ],
  imports: [
    CommonModule,
    ThumbModule,
    FormsModule,
    LoaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: SuperheroesComponent
      },
      {
        path: ':id',
        loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule),
        resolve: {
          superhero: SuperheroResolver
        }
      }
    ])
  ]
})
export class SuperheroesModule { }
