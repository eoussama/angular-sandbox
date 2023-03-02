import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheroesComponent } from './superheroes.component';
import { RouterModule } from '@angular/router';
import { ThumbModule } from 'src/app/components/thumb/thumb.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';



@NgModule({
  declarations: [
    SuperheroesComponent
  ],
  imports: [
    CommonModule,
    ThumbModule,
    LoaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: SuperheroesComponent
      }
    ])
  ]
})
export class SuperheroesModule { }
