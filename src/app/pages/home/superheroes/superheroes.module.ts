import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheroesComponent } from './superheroes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SuperheroesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SuperheroesComponent
      }
    ])
  ]
})
export class SuperheroesModule { }
