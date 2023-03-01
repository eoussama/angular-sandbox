import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheroesComponent } from './superheroes.component';
import { RouterModule } from '@angular/router';
import { ThumbModule } from 'src/app/components/thumb/thumb.module';



@NgModule({
  declarations: [
    SuperheroesComponent
  ],
  imports: [
    CommonModule,
    ThumbModule,
    RouterModule.forChild([
      {
        path: '',
        component: SuperheroesComponent
      }
    ])
  ]
})
export class SuperheroesModule { }
