import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/components/card/card.module';
import { StatsModule } from 'src/app/components/stats/stats.module';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    StatsModule,
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
