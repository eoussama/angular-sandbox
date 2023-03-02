import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { ThumbModule } from '../thumb/thumb.module';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ThumbModule
  ],
  exports: [LoaderComponent]
})
export class LoaderModule { }
