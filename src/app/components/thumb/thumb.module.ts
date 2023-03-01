import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbComponent } from './thumb.component';



@NgModule({
  declarations: [
    ThumbComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ThumbComponent]
})
export class ThumbModule { }
