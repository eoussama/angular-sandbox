import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [StatsComponent]
})
export class StatsModule { }
