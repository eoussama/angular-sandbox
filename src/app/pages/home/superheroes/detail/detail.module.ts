import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/components/card/card.module';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailComponent
      }
    ])
  ]
})
export class DetailModule { }
