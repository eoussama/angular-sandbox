import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/components/input/input.module';
import { ButtonModule } from 'src/app/components/button/button.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ])
  ]
})
export class LoginModule { }
